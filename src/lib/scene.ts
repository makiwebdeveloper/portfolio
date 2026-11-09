/**
 * Управление «сценой»: элементы с data-scene="0..1" при прохождении
 * середины экрана плавно затемняют/осветляют всю страницу.
 */
import { gsap, ScrollTrigger, reducedMotion } from './motion';
import { applyScene, getScene } from './theme';

const state = { v: 0 };
let tween: gsap.core.Tween | null = null;
let target = 0;

export function tweenScene(value: number) {
  if (value === target && tween) return;
  target = value;
  tween?.kill();
  state.v = getScene();
  tween = gsap.to(state, {
    v: value,
    duration: reducedMotion.matches ? 0 : 1.1,
    ease: 'power2.inOut',
    onUpdate: () => applyScene(state.v),
  });
}

export function initSceneTriggers(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-scene]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (self.isActive) tweenScene(Number(el.dataset.scene) || 0);
      },
    });
  });
}
