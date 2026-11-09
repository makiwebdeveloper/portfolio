/**
 * Тема (day/night), палитра и «сцена» (0 светлая → 1 тёмная).
 * Начальные значения ставит инлайн-скрипт в Base.astro ДО первой отрисовки;
 * здесь только переключение и уведомление подписчиков (WebGL-фон, курсор).
 */

export type Theme = 'day' | 'night';

import { PALETTES, type Palette } from '../config/palettes';
export { PALETTES, type Palette };

const root = document.documentElement;

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* хранилище недоступно (приватный режим) — просто не запоминаем */
  }
}

export function getTheme(): Theme {
  return root.dataset.theme === 'night' ? 'night' : 'day';
}

export function setTheme(theme: Theme) {
  root.dataset.theme = theme;
  store('theme', theme);
  emitColors();
}

export function getPalette(): Palette {
  const p = root.dataset.palette as Palette | undefined;
  return p && PALETTES.includes(p) ? p : PALETTES[0];
}

export function setPalette(palette: Palette) {
  if (palette === PALETTES[0]) delete root.dataset.palette;
  else root.dataset.palette = palette;
  store('palette', palette);
  emitColors();
}

/** Цвета сменились (тема или палитра) — пусть WebGL перечитает токены. */
function emitColors() {
  window.dispatchEvent(new CustomEvent('colorschange'));
}

/* ---------- Сцена ---------- */

let scene = 0;
const sceneListeners = new Set<(v: number) => void>();

export function getScene() {
  return scene;
}

/** Мгновенно выставляет значение сцены. Плавность даёт вызывающий (GSAP). */
export function applyScene(value: number) {
  scene = value;
  root.style.setProperty('--scene', value.toFixed(4));
  sceneListeners.forEach((fn) => fn(value));
}

export function onScene(fn: (v: number) => void) {
  sceneListeners.add(fn);
  return () => sceneListeners.delete(fn);
}

/**
 * Превращает любой CSS-цвет (hex, rgb, oklch, color-mix…) в [r,g,b] 0..1.
 * Рисуем пиксель на крошечном canvas — так браузер сам разбирает любой формат.
 */
let probe: CanvasRenderingContext2D | null = null;
export function cssColorToRgb(value: string): [number, number, number] {
  probe ??= Object.assign(document.createElement('canvas'), { width: 1, height: 1 }).getContext('2d', {
    willReadFrequently: true,
  });
  if (!probe) return [0, 0, 0];
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = '#000';
  probe.fillStyle = value.trim();
  probe.fillRect(0, 0, 1, 1);
  const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
  return [r / 255, g / 255, b / 255];
}

export function readToken(name: string) {
  return cssColorToRgb(getComputedStyle(root).getPropertyValue(name));
}
