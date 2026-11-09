/** Имена палитр из src/styles/tokens.css. Первая — палитра по умолчанию. */
export const PALETTES = ['ice', 'dusk', 'forest'] as const;
export type Palette = (typeof PALETTES)[number];
