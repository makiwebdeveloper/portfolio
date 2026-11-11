/**
 * Тема (day = бумага / night = доска).
 * Начальные значения ставит инлайн-скрипт в Base.astro ДО первой отрисовки;
 * здесь только переключение и уведомление подписчиков (курсор и т.п.).
 */

export type Theme = 'day' | 'night';

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

/** Цвета сменились (тема) — пусть canvas-слои перечитают токены. */
function emitColors() {
  window.dispatchEvent(new CustomEvent('colorschange'));
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
