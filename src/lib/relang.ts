/* Смена языка без «мигания».
   Переход между /, /sv/ и /uk/ — обычная навигация, но:
   1) кросс-документный View Transition (@view-transition в base.css) держит старую
      страницу на экране, пока новая не готова, и делает кроссфейд;
   2) перед уходом запоминаем, где был читатель (секция + смещение в ней);
   3) новая страница (класс .is-relang ставит инлайн-скрипт в Base) пропускает
      прелоадер и вход hero, встаёт на то же место и сразу показывает видимые блоки. */
import { ScrollTrigger, fontsReady, getLenis } from './motion';

const KEY = 'relang';

interface Spot {
  id?: string;
  dy?: number;
}

/** Вызывается по клику на ссылку языка, до ухода со страницы. */
export function rememberSpot() {
  const spot: Spot = {};
  if (window.scrollY > 4) {
    // секция, в которой сейчас верх экрана
    for (const sec of document.querySelectorAll<HTMLElement>('main section[id]')) {
      const top = sec.getBoundingClientRect().top;
      if (top <= 1) {
        spot.id = sec.id;
        spot.dy = Math.round(-top);
      }
    }
  }
  try {
    sessionStorage.setItem(KEY, JSON.stringify(spot));
  } catch {
    /* приватный режим: просто откроется сверху */
  }
}

/** На новой странице: вернуться на то же место и показать видимое без анимаций. */
export function restoreSpot() {
  const de = document.documentElement;
  const raw = de.dataset.relang;
  if (raw == null) return;
  delete de.dataset.relang;

  let spot: Spot = {};
  try {
    spot = JSON.parse(raw) as Spot;
  } catch {
    /* битые данные — останемся наверху */
  }

  const place = () => {
    const sec = spot.id ? document.getElementById(spot.id) : null;
    if (!sec) return;
    const y = sec.getBoundingClientRect().top + window.scrollY + Math.min(spot.dy ?? 0, sec.offsetHeight - 1);
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
    else window.scrollTo(0, y);
    ScrollTrigger.update();
  };

  // Видимые блоки сразу в конечном состоянии (переходы выключены под .is-relang)
  const showVisible = () => {
    for (const el of document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')) {
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) el.classList.add('is-in');
    }
  };

  // DOMContentLoaded приходит после всех модульных скриптов: Story уже закреплена,
  // высота страницы итоговая.
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      place();
      showVisible();
      // шрифт мог поменять высоты — поправляем, потом возвращаем обычные анимации
      fontsReady().then(() => {
        place();
        showVisible();
        requestAnimationFrame(() => requestAnimationFrame(() => de.classList.remove('is-relang')));
      });
    },
    { once: true },
  );
}
