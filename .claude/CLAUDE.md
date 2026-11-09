# CLAUDE.md

Одностраничное портфолио Illia Makovetskyi (Fullstack Developer, Стокгольм).
Стиль и настроение взяты с wedding.tonami-komuro.com: сторителлинг по скроллу, свой курсор, WebGL-фон, день/ночь.
Главный приоритет: красиво, но **быстро и удобно для рекрутера**.
С пользователем общаемся по-русски. Комментарии в коде тоже пишем по-русски.

## Команды

```bash
npm run dev        # http://localhost:4321, слева внизу dev-переключатель палитр
npm run build      # astro check (типы) + сборка; должна проходить без ошибок и warnings
npm run preview    # прод-сборка из dist/
npx astro check    # только проверка типов
```

URL-параметры для проверки: `?no-preloader`, `?theme=day|night`, `?palette=ice|dusk|forest`.

## Стек

Astro 5 (static, без UI-фреймворка) + TypeScript strict, GSAP 3 + ScrollTrigger, Lenis, OGL.
Шрифты self-host через `@fontsource-variable`: Cormorant (display) и Manrope (body). Оба нужны с кириллицей, потому что есть локаль UK.
Скрипты пишутся как vanilla `<script>` внутри `.astro`-компонентов. React/Vue не добавлять.

## Структура

- `src/styles/tokens.css`: **все цвета** и дизайн-токены (типографика, отступы, easing)
- `src/styles/base.css`: reset, хелперы (`.container`, `.section`, `.eyebrow`, `.pill`), стили Lenis
- `src/styles/motion.css`: начальные состояния анимаций (`.js [data-reveal]`), `prefers-reduced-motion`
- `src/lib/motion.ts`: синглтон GSAP/ScrollTrigger/Lenis, `scrollToTarget`, `lockScroll`, `initReveals`, `fontsReady`, медиа-запросы `reducedMotion`/`finePointer`
- `src/lib/theme.ts`: тема, палитра, «сцена» (`applyScene`/`onScene`), `readToken()` (CSS-цвет → RGB для WebGL)
- `src/lib/scene.ts`: `tweenScene()`, триггеры для `[data-scene]`
- `src/lib/split.ts`: деление текста на слова/символы (с сохранением `aria-label`)
- `src/lib/intro.ts`: промис `introDone` (прелоадер → появление hero)
- `src/config/palettes.ts`: список палитр (SSR-безопасный, его можно импортировать во frontmatter)
- `src/data/*.ts`: весь контент (проекты, главы истории, профиль, навыки)
- `src/i18n/ui.ts`: строки интерфейса, `src/i18n/index.ts`: `useT`, `pick`, `pathFor`
- `src/components/Home.astro`: порядок секций; `pages/{,sv/,uk/}index.astro` только передают `lang`
- `src/layouts/Base.astro`: head, **инлайн-скрипт до первой отрисовки** (тема, палитра, классы `js`/`is-entering`/`no-preloader`)

## Правила, которые нельзя нарушать

### Цвета

- Цвет задаётся **только** в `tokens.css`. В компонентах используем семантические токены: `--color-bg`, `--color-text`, `--color-muted`, `--color-line`, `--color-accent`, `--color-surface`, `--color-particle`. Сырые `--p-*` берём только там, где нужен «чистый» цвет палитры (орбы, WebGL).
- Никаких hex/rgb в компонентах. Исключение: обложки проектов в `ProjectVisual.astro`, они строятся из `oklch(... var(--h))`, то есть от hue проекта.
- `--scene` (0..1) затемняет страницу. Текст переключается резко через `--scene-ink`, чтобы на середине перехода не было серого на сером. Промежуточные значения `scene` в данных не используем, только 0 или 1.
- Новая палитра: блок `[data-palette='name'][data-theme='day|night']` в `tokens.css` + имя в `src/config/palettes.ts`.
- WebGL перечитывает токены по событию `colorschange`. Если добавляешь новый цветной канал в шейдер, читай его через `readToken()`, а не хардкодом.

### SSR и модули

- `src/lib/theme.ts` и `src/lib/motion.ts` при импорте обращаются к `document`/`window`. **Импортировать их можно только в `<script>`**, во frontmatter нельзя. Для данных, нужных на сервере, заводи отдельный модуль (как `config/palettes.ts`).
- `motion.ts` работает как синглтон. Lenis и `gsap.registerPlugin` не создавать повторно в компонентах.
- Модульные скрипты Astro выполняются в произвольном порядке. Если нужна синхронизация между компонентами, используем промисы или события (`introDone`, `colorschange`, `orbs:toggle`/`orbs:state`), а не порядок подключения.

### Прогрессивное улучшение и доступность

- Без JS страница должна быть полной и читаемой. Скрывающие стили пишем только под `.js` (`.js [data-reveal]`, `.js.is-entering [data-hero-in]`). В `Base.astro` есть страховка: через 4 с снимается `is-entering`.
- `prefers-reduced-motion` отключает Lenis, кастомный курсор, scrub-анимации, pinned-Story и анимацию WebGL (остаётся статичный кадр). Каждую новую анимацию проверяй в этом режиме.
- Кастомный курсор только при `(hover:hover) and (pointer:fine)`. Интерактивные элементы: `a, button, [data-cursor]`. `data-cursor="Text"` даёт подпись в кольце, `data-magnetic="0.25"` даёт магнитный эффект.
- Секции-цели якорей имеют `id` + `tabindex="-1"` (навигация переводит туда фокус). Аккордеоны строятся на `button[aria-expanded]` + `region`, у закрытой панели стоит `inert`.
- Дублирующийся декоративный контент (вторая лента marquee и т.п.) помечается `aria-hidden="true"`.

### Производительность

- Анимируем только `transform`/`opacity` (и CSS-переменные на `<html>`). Появление элементов делаем через `initReveals` (IntersectionObserver). ScrollTrigger используем, только когда нужен scrub или pin.
- Бюджет JS: **≤ 80 КБ gzip** на главную, включая OGL. После добавления зависимостей проверь:
  `for f in dist/_astro/*.js; do gzip -c $f | wc -c; done | paste -sd+ | bc`
- WebGL: половинное разрешение, ≤ 40 fps, пауза на `visibilitychange`, адаптивное снижение качества, ленивый `import('ogl')` через `requestIdleCallback`.
- Если меняется высота страницы (аккордеон и т.п.), вызывай `ScrollTrigger.refresh()` после перехода.

### Известные грабли

- У `body` фон **прозрачный**, фон задан на `html`. Иначе WebGL-слой (`position:fixed; z-index:-1`) окажется под фоном body.
- В GLSL `smoothstep(edge0, edge1, x)` требует `edge0 < edge1`. Обратный порядок работает на одних GPU и ломается на других. Пиши `1.0 - smoothstep(0.0, r, d)`.
- У курсивных цифр Cormorant большие выносные элементы. Если обрезаешь их через `overflow` (одометр года), закладывай высоту ячейки с запасом (`--cell: 1.3em`).
- `localStorage`/`sessionStorage` всегда оборачиваем в `try/catch` (приватный режим).

## Контент и i18n

- Новая строка интерфейса добавляется в `en` в `ui.ts`. Тип `Record<UIKey, string>` заставит добавить её в `sv` и `uk`, иначе билд упадёт.
- Локализованные поля данных имеют тип `Localized` (`{ en, sv, uk }`), читаются через `pick(value, lang)`.
- Только факты из резюме (`Illia-Makovetskyi-Resume.pdf`). Ничего не выдумывать. Если данных нет, спроси пользователя или оставь `TODO`.
- Ассеты Tonami Komuro (PNG курсоров, шрифт IvyOra, иллюстрации) **не копировать**. Повторяем принципы, графику делаем свою.

## Открытые TODO

- Реальные ссылки на GitHub и LinkedIn (`src/data/profile.ts`) и домен (`site` в `astro.config.mjs`).
- Годы у Focal, VTIKHA, Soundy, MakMoney и Acars проставлены наугад, их нужно подтвердить у пользователя.
- Скриншоты проектов: `src/assets/projects/*.png` → поле `cover` в `projects.ts`.
- OG-картинка, Lighthouse-прогон, проверка на реальных iOS/Android, деплой (Vercel или Cloudflare Pages).

## Как проверять изменения

1. `npm run build`: 0 ошибок, 0 warnings.
2. Визуально: Chrome-расширение (claude-in-chrome) на `npm run dev`. Если оно недоступно, подойдёт headless Chrome с `puppeteer-core` (`executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'`, флаги `--use-angle=swiftshader --enable-unsafe-swiftshader`, чтобы работал WebGL). Скрипты для скриншотов кладём в scratchpad, не в проект.
3. Проверяй обе темы, хотя бы одну альтернативную палитру, ширину 390px и 1440px, `?no-preloader`, отсутствие ошибок в консоли.
4. Коммиты делаем только по просьбе пользователя.
