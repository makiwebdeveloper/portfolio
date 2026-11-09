# Portfolio — Illia Makovetskyi

Astro + GSAP (ScrollTrigger) + Lenis + OGL. Одна страница, языки EN / SV / UK.

```bash
npm run dev       # http://localhost:4321  (в dev слева внизу — переключатель палитр)
npm run build     # astro check + сборка в dist/
npm run preview
```

## Цвета
Все цвета задаются только в `src/styles/tokens.css`.
- Поменять палитру: правишь сырые `--p-*` в блоках `day` / `night`. Текст, линии, курсор и WebGL-фон подстроятся сами.
- Новая палитра: скопируй блок `[data-palette='dusk']`, переименуй и добавь имя в `src/config/palettes.ts`.
- Быстрая проверка без кода: `?palette=dusk`, `?theme=night`, `?no-preloader`.

## Контент
- Тексты интерфейса: `src/i18n/ui.ts`
- Проекты (и скриншоты через `cover`): `src/data/projects.ts`
- Главы истории (и `scene`: 0 светлая / 1 тёмная): `src/data/timeline.ts`
- Контакты, навыки, ссылки: `src/data/profile.ts`
