/**
 * Стикмен: скелет, позы и реквизит. Чистые функции без DOM, поэтому модуль
 * можно импортировать и во frontmatter (статичные позы на сервере),
 * и в <script> (бегун по линии в Stickman.astro).
 *
 * Система координат фигуры: начало — между стоп, ось Y вниз (как в SVG),
 * «вперёд» — +X (разворот делается через scaleX(-1) снаружи).
 * Углы конечностей в градусах от «прямо вниз», плюс — вперёд.
 */

export const POSES = ['stand', 'wave', 'point', 'suitcase', 'laptop', 'juggle', 'plane', 'draw', 'erase'] as const;
export type PoseName = (typeof POSES)[number];

type Limb = [number, number]; // [угол сустава у корпуса, сгиб второго сустава]

export interface Pose {
  lean: number; // наклон корпуса от вертикали, плюс — вперёд
  hipY: number; // высота таза (стоя −30, сидя меньше)
  armB: Limb;
  armF: Limb;
  legB: Limb;
  legF: Limb;
}

const TORSO = 23;
const NECK = 8;
export const HEAD_R = 7;
const UPPER_ARM = 12;
const FOREARM = 12;
const THIGH = 15;
const SHIN = 15;

const rad = (d: number) => (d * Math.PI) / 180;
const dir = (a: number, len: number): [number, number] => [Math.sin(rad(a)) * len, Math.cos(rad(a)) * len];

export type Pt = [number, number];
export interface Figure {
  head: Pt;
  torso: [Pt, Pt];
  armB: [Pt, Pt, Pt];
  armF: [Pt, Pt, Pt];
  legB: [Pt, Pt, Pt];
  legF: [Pt, Pt, Pt];
}

function limb(root: Pt, [a, b]: Limb, l1: number, l2: number): [Pt, Pt, Pt] {
  const [x1, y1] = dir(a, l1);
  const mid: Pt = [root[0] + x1, root[1] + y1];
  const [x2, y2] = dir(a + b, l2);
  return [root, mid, [mid[0] + x2, mid[1] + y2]];
}

/** Поза → координаты суставов. */
export function figure(p: Pose): Figure {
  const hip: Pt = [0, p.hipY];
  const up: Pt = [Math.sin(rad(p.lean)), -Math.cos(rad(p.lean))];
  const neck: Pt = [hip[0] + up[0] * TORSO, hip[1] + up[1] * TORSO];
  const shoulder: Pt = [hip[0] + up[0] * (TORSO - 2), hip[1] + up[1] * (TORSO - 2)];
  const head: Pt = [neck[0] + up[0] * NECK, neck[1] + up[1] * NECK];
  return {
    head,
    torso: [hip, neck],
    armB: limb(shoulder, [p.armB[0] + p.lean, p.armB[1]], UPPER_ARM, FOREARM),
    armF: limb(shoulder, [p.armF[0] + p.lean, p.armF[1]], UPPER_ARM, FOREARM),
    legB: limb(hip, p.legB, THIGH, SHIN),
    legF: limb(hip, p.legF, THIGH, SHIN),
  };
}

/* ---------------------------------------------------------------------- */
/*  Позы. t — время в секундах (для «живых» поз), phase — фаза шага.       */
/* ---------------------------------------------------------------------- */

const S = Math.sin;

/** Позы движения (не станции): присед перед прыжком/после приземления, группировка в полёте, «серфер» на горке,
 *  бег, шаг, падение с края, торможение юзом, сидя на краю (прогулка по Hero). */
export type MotionPose = 'crouch' | 'jump' | 'surf' | 'run' | 'walk' | 'fall' | 'skid' | 'sit';
export type AnyPose = PoseName | MotionPose;

export function pose(name: AnyPose, t = 0): Pose {
  switch (name) {
    case 'crouch':
      // колени согнуты, руки отведены назад — замах
      return {
        lean: 18,
        hipY: -19,
        legF: [56, -112],
        legB: [44, -96],
        armF: [-55, 25],
        armB: [-42, 30],
      };
    case 'jump':
      // группировка: руки вверх, ноги поджаты
      return {
        lean: -4,
        hipY: -30,
        legF: [72, -118],
        legB: [52, -104],
        armF: [158, 14],
        armB: [146, 22],
      };
    case 'run': {
      // бег: t — фаза шага (рад), её задаёт пройденное расстояние, а не время,
      // чтобы ноги не «скользили»
      const a = S(t);
      const c = Math.cos(t);
      return {
        lean: 12,
        hipY: -27 + 1.5 * Math.abs(S(2 * t)),
        legF: [8 + 34 * a, -10 - 46 * Math.max(0, c)],
        legB: [8 - 34 * a, -10 - 46 * Math.max(0, -c)],
        armF: [-34 * a, 72],
        armB: [34 * a, 72],
      };
    }
    case 'surf':
      // съезжает по нарисованной линии: стойка серфера, руки в стороны для равновесия
      return {
        lean: 6,
        hipY: -26,
        legF: [40, -50],
        legB: [-30, 40],
        armF: [96 + 10 * S(t * 5), -18],
        armB: [-100 + 8 * S(t * 4), 22],
      };
    case 'walk': {
      // спокойный шаг: t — фаза от пройденного пути, руки машут в противофазе ногам
      const a = S(t);
      const c = Math.cos(t);
      return {
        lean: 4,
        hipY: -29.5 + 1.2 * Math.abs(S(t)),
        legF: [2 + 24 * a, -6 - 26 * Math.max(0, c)],
        legB: [2 - 24 * a, -6 - 26 * Math.max(0, -c)],
        armF: [-22 * a, 16],
        armB: [22 * a, 16],
      };
    }
    case 'fall':
      // сорвался с края: машет руками и болтает ногами
      return {
        lean: -6,
        hipY: -30,
        armF: [140 + 28 * S(t * 15), -24],
        armB: [110 + 28 * S(t * 13 + 1.4), -30],
        legF: [24 + 18 * S(t * 11), -40],
        legB: [-6 + 18 * S(t * 11 + 2), -18],
      };
    case 'skid':
      // тормозит после рывка: корпус назад, передняя нога упирается
      return {
        lean: -16,
        hipY: -25,
        legF: [42, -6],
        legB: [-8, -44],
        armF: [64, -12],
        armB: [34, -20],
      };
    case 'sit':
      // сидит на краю блока: таз на поверхности, ноги свешены и болтаются,
      // ладони упираются в поверхность позади
      return {
        lean: -8,
        hipY: -3,
        legF: [82, -78 + 26 * S(t * 3)],
        legB: [74, -62 + 26 * S(t * 3 + 1.7)],
        armF: [-28, 8],
        armB: [-40, 10],
      };
    case 'wave':
      return {
        lean: -3,
        hipY: -30,
        armB: [-12, 14],
        armF: [128, 26 + 28 * S(t * 7)],
        legB: [-8, 0],
        legF: [9, 0],
      };
    case 'point':
      return {
        lean: 4,
        hipY: -30,
        armB: [-14, 22],
        armF: [94 + 3 * S(t * 3), -4],
        legB: [-7, 0],
        legF: [12, -4],
      };
    case 'suitcase':
      return {
        lean: -5,
        hipY: -30,
        armB: [6, 0],
        armF: [140, 30 + 22 * S(t * 6)],
        legB: [-9, 0],
        legF: [8, 0],
      };
    case 'laptop': {
      const k = S(t * 16);
      return {
        lean: 10,
        hipY: -8,
        legF: [104, -104],
        legB: [96, -98],
        armF: [30 + 4 * k, 52 + 6 * k],
        armB: [24 - 4 * k, 58 - 6 * k],
      };
    }
    case 'juggle':
      return {
        lean: 0,
        hipY: -30,
        armF: [40 + 10 * S(t * 6), 80],
        armB: [34 - 10 * S(t * 6), 84],
        legB: [-9, 0],
        legF: [9, 0],
      };
    case 'plane':
      return {
        lean: 7,
        hipY: -30,
        armB: [-38, 20],
        armF: [150, 14],
        legB: [-14, 0],
        legF: [15, -6],
      };
    case 'draw':
    case 'erase': {
      // идёт с огромным карандашом (draw — грифелем вниз, erase — ластиком вниз);
      // t — фаза шага от пройденного пути, как у бега
      const a = S(t);
      const c = Math.cos(t);
      const e = name === 'erase' ? 4 * S(t * 2) : 0; // ластик трёт — руки ходят
      return {
        lean: name === 'erase' ? 18 : 12,
        hipY: -29 + Math.abs(S(2 * t)),
        armF: [26 + e, 46],
        armB: [6 - e, 66],
        legF: [6 + 16 * a, -6 - 22 * Math.max(0, c)],
        legB: [6 - 16 * a, -6 - 22 * Math.max(0, -c)],
      };
    }
    default:
      return { lean: 0, hipY: -30, armB: [-8, 8], armF: [8, 10], legB: [-6, 0], legF: [6, 0] };
  }
}

const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
const mixLimb = (a: Limb, b: Limb, k: number): Limb => [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];

export function mix(a: Pose, b: Pose, k: number): Pose {
  if (k <= 0) return a;
  if (k >= 1) return b;
  return {
    lean: lerp(a.lean, b.lean, k),
    hipY: lerp(a.hipY, b.hipY, k),
    armB: mixLimb(a.armB, b.armB, k),
    armF: mixLimb(a.armF, b.armF, k),
    legB: mixLimb(a.legB, b.legB, k),
    legF: mixLimb(a.legF, b.legF, k),
  };
}

/* ---------------------------------------------------------------------- */
/*  SVG-строки                                                              */
/* ---------------------------------------------------------------------- */

const f = (n: number) => Math.round(n * 10) / 10;
export const pts = (p: Pt[]) => p.map(([x, y]) => `${f(x)},${f(y)}`).join(' ');

/** Голова — «кружок от руки»: конец линии заходит за начало. */
export const HEAD_PATH = (() => {
  const steps = 22;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const a = -1.9 + (i / steps) * (Math.PI * 2 + 0.55);
    const r = HEAD_R * (1 + 0.06 * Math.sin(i * 1.7));
    d += `${i ? 'L' : 'M'}${f(Math.cos(a) * r)},${f(Math.sin(a) * r)}`;
  }
  return d;
})();

export interface Prop {
  d: string;
  fill?: boolean;
  transform?: string;
  /** эффект (чёрточки скорости, пот): тонкой серой линией */
  fx?: boolean;
}

/** Реквизит для позы. Координаты в системе фигуры. */
export function propsFor(name: PoseName, fig: Figure, t = 0): Prop[] {
  switch (name) {
    case 'suitcase': {
      const [hx, hy] = fig.armB[2];
      return [
        { d: `M${f(hx - 2)},${f(hy)} q2,-4 4,0` },
        { d: `M${f(hx - 9)},${f(hy + 1)} h18 q1,0 1,1 v11 q0,1 -1,1 h-18 q-1,0 -1,-1 v-11 q0,-1 1,-1 z` },
        { d: `M${f(hx - 9)},${f(hy + 6)} h20` },
      ];
    }
    case 'laptop':
      return [
        // корпус на коленях и экран, повёрнутый к стикмену
        { d: 'M3,-17 L26,-19' },
        { d: 'M26,-19 L31,-36 L22,-36' },
      ];
    case 'juggle': {
      const out: Prop[] = [];
      for (let i = 0; i < 3; i++) {
        const a = t * 4.2 + (i * Math.PI * 2) / 3;
        const x = 9 + Math.cos(a) * 9;
        const y = -50 - Math.abs(Math.sin(a)) * 18;
        out.push({ d: `M${f(x + 2.6)},${f(y)} a2.6,2.6 0 1,0 -5.2,0 a2.6,2.6 0 1,0 5.2,0`, fill: true });
      }
      return out;
    }
    case 'plane': {
      const [hx, hy] = fig.armF[2];
      return [{ d: PLANE_PATH, transform: `translate(${f(hx)} ${f(hy)}) rotate(-20)` }];
    }
    case 'draw':
    case 'erase':
      return pencil(fig, name === 'erase');
    default:
      return [];
  }
}

/** Половина длины огромного карандаша: держат за середину, поэтому переворот
 *  вокруг хвата ставит ластик ровно туда, где был грифель. */
export const PENCIL_HALF = 31;

/** Карандаш в руках по умолчанию (статичная поза): грифелем вниз-вперёд. */
function pencil(fig: Figure, erase: boolean): Prop[] {
  const g: Pt = [(fig.armF[2][0] + fig.armB[2][0]) / 2, (fig.armF[2][1] + fig.armB[2][1]) / 2];
  const a: Pt = [0.35, 0.94];
  return pencilProps(g, erase ? [-a[0], -a[1]] : a);
}

/**
 * Карандаш с хватом в g, a — единичный вектор от хвата к грифелю.
 * Грифель (конус) на одном конце, ластик (залитый колпачок) на другом.
 */
export function pencilProps(g: Pt, a: Pt): Prop[] {
  const L = PENCIL_HALF;
  const nx = -a[1] * 3.2;
  const ny = a[0] * 3.2;
  // d — расстояние от хвата к грифелю (минус — к ластику)
  const at = (d: number, side = 0) => `${f(g[0] + a[0] * d + nx * side)},${f(g[1] + a[1] * d + ny * side)}`;
  return [
    { d: `M${at(L - 10, 1)} L${at(L)} L${at(L - 10, -1)} M${at(L - 3.5, 0.35)} L${at(L)} L${at(L - 3.5, -0.35)}` },
    { d: `M${at(L - 10, 1)} L${at(-L + 8, 1)} M${at(L - 10, -1)} L${at(-L + 8, -1)} M${at(-L + 8, 1)} L${at(-L + 8, -1)}` },
    { d: `M${at(-L + 8, 1)} L${at(-L, 1)} L${at(-L, -1)} L${at(-L + 8, -1)} Z`, fill: true },
  ];
}

/** Двухзвенная IK руки: из плеча s дотянуться кистью до p, локоть книзу. */
function reach(s: Pt, p: Pt, lean: number): Limb {
  const dx = p[0] - s[0];
  const dy = p[1] - s[1];
  const d = Math.min(Math.hypot(dx, dy), UPPER_ARM + FOREARM - 0.5);
  const base = (Math.atan2(dx, dy) * 180) / Math.PI; // 0 — вниз, 90 — вперёд
  const cos = (UPPER_ARM * UPPER_ARM + d * d - FOREARM * FOREARM) / (2 * UPPER_ARM * d);
  const b = (Math.acos(Math.max(-1, Math.min(1, cos))) * 180) / Math.PI;
  // два решения: выбираем то, где локоть ниже
  const pick = (a1: number): [number, number] => {
    const [ex, ey] = dir(a1, UPPER_ARM);
    const a2 = (Math.atan2(p[0] - s[0] - ex, p[1] - s[1] - ey) * 180) / Math.PI;
    return [a1, ((a2 - a1 + 540) % 360) - 180];
  };
  const u = pick(base + b);
  const v = pick(base - b);
  const elbow = (l: [number, number]) => s[1] + dir(l[0], UPPER_ARM)[1];
  const best = elbow(u) >= elbow(v) ? u : v;
  return [best[0] - lean, best[1]];
}

/** Поза с руками, которые держат точки hf (передняя кисть) и hb (задняя). */
export function reachArms(p: Pose, hf: Pt, hb: Pt): Pose {
  const sh = figure(p).armF[0];
  return { ...p, armF: reach(sh, hf, p.lean), armB: reach(sh, hb, p.lean) };
}

/** Бумажный самолётик (носом вправо), центр в (0,0). */
export const PLANE_PATH = 'M-9,-3 L10,-1 L-7,6 L-4,0 Z M-4,0 L10,-1';
