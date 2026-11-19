/*
  Аналитика Umami Cloud (cloud.umami.is): без cookie, баннер согласия не нужен.
  Скрипт подключается в Base.astro только в прод-сборке и только если задан ID.
  Простые клики размечены атрибутом data-umami-event прямо в разметке;
  здесь обёртка для событий, которые нужно слать из кода.
*/

// Website ID из настроек сайта в Umami (не секрет: он всё равно виден в HTML)
export const UMAMI_ID: string = '85a69010-3d8e-4c69-bdac-782903dda28f';

type Umami = { track: (name: string, data?: Record<string, string | number>) => void };

export function track(name: string, data?: Record<string, string | number>) {
  try {
    (window as unknown as { umami?: Umami }).umami?.track(name, data);
  } catch {
    // блокировщик рекламы или скрипт ещё не загрузился: событие просто теряется
  }
}
