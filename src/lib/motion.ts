/**
 * Общее ядро движения: GSAP + ScrollTrigger + Lenis.
 * Модуль — синглтон: Astro собирает общий чанк, поэтому все компоненты
 * получают один и тот же экземпляр Lenis.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };

export const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

let lenis: Lenis | null = null;

export function initSmoothScroll() {
  if (lenis || reducedMotion.matches) return lenis;

  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    // на тач-устройствах оставляем нативный скролл — он быстрее и привычнее
    syncTouch: false,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis() {
  return lenis;
}

const navOffset = () => -(document.querySelector<HTMLElement>('.nav')?.offsetHeight ?? 0);

/** Плавно прокручивает к цели (с учётом высоты шапки). */
export function scrollToTarget(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : navOffset(), duration: 1.4 });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth' });
}

export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

/** Ждёт загрузки шрифтов, но не дольше `max` мс. */
export function fontsReady(max = 1500) {
  return Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, max))]);
}

/**
 * Секции за кадром получают .is-off: их бесконечные CSS-анимации стоят
 * (правило в motion.css). Вне экрана их всё равно не видно, а браузер
 * иначе пересчитывает их каждый кадр — заметно на слабых устройствах.
 */
export function initOffscreenPause() {
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) e.target.classList.toggle('is-off', !e.isIntersecting);
  });
  document.querySelectorAll('main > section, main > footer').forEach((el) => io.observe(el));
}

/** Появление элементов [data-reveal] при входе в экран (без ScrollTrigger — дешевле). */
export function initReveals(scope: ParentNode = document) {
  const items = scope.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
  if (!items.length) return;
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  items.forEach((el) => io.observe(el));
}
