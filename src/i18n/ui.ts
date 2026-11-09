export const languages = {
  en: 'English',
  sv: 'Svenska',
  uk: 'Українська',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const en = {
  'meta.title': 'Illia Makovetskyi — Fullstack Developer',
  'meta.description':
    'Fullstack developer in Stockholm building end-to-end products: e-commerce, AI tools, real-time apps and interactive 3D.',

  'nav.label': 'Main',
  'nav.story': 'Story',
  'nav.work': 'Work',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.skip': 'Skip to work',
  'nav.home': 'Home',

  'theme.day': 'Day',
  'theme.night': 'Night',
  'theme.toggle': 'Switch colour theme',
  'bg.pause': 'Pause background animation',
  'bg.play': 'Play background animation',
  'lang.label': 'Language',

  'hero.role': 'Fullstack Developer',
  'hero.place': 'Stockholm, Sweden',
  'hero.greeting': 'Hi, I’m',
  'hero.scroll': 'Scroll',
  'hero.available': 'Open to new roles · 2026',

  'intro.eyebrow': 'In short',
  'intro.text':
    'I turn ideas into working digital products — from interfaces and backends to real-time features and interactive 3D. I care about the engineering and the person on the other side of the screen equally.',

  'story.eyebrow': 'The story so far',
  'story.title': 'From Kharkiv to Stockholm',
  'story.next': 'Next chapter',
  'story.prev': 'Previous chapter',

  'work.eyebrow': 'Selected work',
  'work.title': 'Things I’ve built',
  'work.lead': 'Six projects, from live stores to a 3D game on a conference floor. Open one to read more.',
  'work.stack': 'Stack',
  'work.role': 'Role',
  'work.year': 'Year',
  'work.solo': 'Solo project',
  'work.team': 'Team project',
  'work.open': 'Open',
  'work.close': 'Close',
  'work.highlight': 'Did you know?',

  'skills.eyebrow': 'Toolbox',
  'skills.title': 'What I work with',
  'skills.languages': 'Languages',
  'skills.tech': 'Frameworks & libraries',
  'skills.tools': 'Data & tools',
  'skills.spoken': 'I speak',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Let’s build something together',
  'contact.lead': 'I’m based in Stockholm and open to fullstack and frontend roles.',
  'contact.copy': 'Copy',
  'contact.copied': 'Email copied',
  'contact.cv': 'Download CV',

  'footer.built': 'Built with Astro, GSAP, Lenis and OGL.',
  'footer.top': 'Back to top',
};

export type UIKey = keyof typeof en;

const sv: Record<UIKey, string> = {
  'meta.title': 'Illia Makovetskyi — Fullstackutvecklare',
  'meta.description':
    'Fullstackutvecklare i Stockholm som bygger kompletta produkter: e-handel, AI-verktyg, realtidsappar och interaktiv 3D.',

  'nav.label': 'Huvudmeny',
  'nav.story': 'Historia',
  'nav.work': 'Projekt',
  'nav.skills': 'Kompetens',
  'nav.contact': 'Kontakt',
  'nav.menu': 'Meny',
  'nav.close': 'Stäng',
  'nav.skip': 'Hoppa till projekt',
  'nav.home': 'Hem',

  'theme.day': 'Dag',
  'theme.night': 'Natt',
  'theme.toggle': 'Byt färgtema',
  'bg.pause': 'Pausa bakgrundsanimationen',
  'bg.play': 'Spela bakgrundsanimationen',
  'lang.label': 'Språk',

  'hero.role': 'Fullstackutvecklare',
  'hero.place': 'Stockholm, Sverige',
  'hero.greeting': 'Hej, jag heter',
  'hero.scroll': 'Scrolla',
  'hero.available': 'Öppen för nya roller · 2026',

  'intro.eyebrow': 'Kort sagt',
  'intro.text':
    'Jag gör idéer till fungerande digitala produkter — från gränssnitt och backend till realtidsfunktioner och interaktiv 3D. Tekniken och människan på andra sidan skärmen är lika viktiga för mig.',

  'story.eyebrow': 'Historien hittills',
  'story.title': 'Från Charkiv till Stockholm',
  'story.next': 'Nästa kapitel',
  'story.prev': 'Föregående kapitel',

  'work.eyebrow': 'Utvalda projekt',
  'work.title': 'Saker jag har byggt',
  'work.lead': 'Sex projekt, från live-butiker till ett 3D-spel på en konferens. Öppna ett för att läsa mer.',
  'work.stack': 'Teknik',
  'work.role': 'Roll',
  'work.year': 'År',
  'work.solo': 'Eget projekt',
  'work.team': 'Teamprojekt',
  'work.open': 'Öppna',
  'work.close': 'Stäng',
  'work.highlight': 'Visste du?',

  'skills.eyebrow': 'Verktygslåda',
  'skills.title': 'Det här jobbar jag med',
  'skills.languages': 'Språk',
  'skills.tech': 'Ramverk & bibliotek',
  'skills.tools': 'Data & verktyg',
  'skills.spoken': 'Jag talar',

  'contact.eyebrow': 'Kontakt',
  'contact.title': 'Låt oss bygga något tillsammans',
  'contact.lead': 'Jag bor i Stockholm och är öppen för roller inom fullstack och frontend.',
  'contact.copy': 'Kopiera',
  'contact.copied': 'E-post kopierad',
  'contact.cv': 'Ladda ner CV',

  'footer.built': 'Byggd med Astro, GSAP, Lenis och OGL.',
  'footer.top': 'Till toppen',
};

const uk: Record<UIKey, string> = {
  'meta.title': 'Ілля Маковецький — Fullstack-розробник',
  'meta.description':
    'Fullstack-розробник у Стокгольмі: створюю продукти від ідеї до запуску — e-commerce, AI-інструменти, real-time застосунки та інтерактивне 3D.',

  'nav.label': 'Головне меню',
  'nav.story': 'Історія',
  'nav.work': 'Проєкти',
  'nav.skills': 'Навички',
  'nav.contact': 'Контакти',
  'nav.menu': 'Меню',
  'nav.close': 'Закрити',
  'nav.skip': 'Перейти до проєктів',
  'nav.home': 'Головна',

  'theme.day': 'День',
  'theme.night': 'Ніч',
  'theme.toggle': 'Змінити тему',
  'bg.pause': 'Зупинити анімацію фону',
  'bg.play': 'Запустити анімацію фону',
  'lang.label': 'Мова',

  'hero.role': 'Fullstack-розробник',
  'hero.place': 'Стокгольм, Швеція',
  'hero.greeting': 'Привіт, я',
  'hero.scroll': 'Гортайте',
  'hero.available': 'Відкритий до нових ролей · 2026',

  'intro.eyebrow': 'Коротко',
  'intro.text':
    'Я перетворюю ідеї на робочі цифрові продукти — від інтерфейсів і бекенду до real-time функцій та інтерактивного 3D. Для мене однаково важливі і інженерія, і людина по той бік екрана.',

  'story.eyebrow': 'Історія',
  'story.title': 'Від Харкова до Стокгольма',
  'story.next': 'Наступний розділ',
  'story.prev': 'Попередній розділ',

  'work.eyebrow': 'Вибрані роботи',
  'work.title': 'Що я створив',
  'work.lead': 'Шість проєктів — від живих магазинів до 3D-гри на конференції. Відкрийте будь-який, щоб дізнатися більше.',
  'work.stack': 'Стек',
  'work.role': 'Роль',
  'work.year': 'Рік',
  'work.solo': 'Самостійний проєкт',
  'work.team': 'Командний проєкт',
  'work.open': 'Відкрити',
  'work.close': 'Закрити',
  'work.highlight': 'А ви знали?',

  'skills.eyebrow': 'Інструменти',
  'skills.title': 'З чим я працюю',
  'skills.languages': 'Мови програмування',
  'skills.tech': 'Фреймворки й бібліотеки',
  'skills.tools': 'Дані й інструменти',
  'skills.spoken': 'Розмовляю',

  'contact.eyebrow': 'Контакти',
  'contact.title': 'Створімо щось разом',
  'contact.lead': 'Я живу в Стокгольмі й відкритий до fullstack- та frontend-ролей.',
  'contact.copy': 'Копіювати',
  'contact.copied': 'Email скопійовано',
  'contact.cv': 'Завантажити CV',

  'footer.built': 'Зроблено на Astro, GSAP, Lenis та OGL.',
  'footer.top': 'Нагору',
};

export const ui: Record<Lang, Record<UIKey, string>> = { en, sv, uk };
