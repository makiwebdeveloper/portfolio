import type { Localized } from '../i18n';

export interface Chapter {
  id: string;
  year: string;
  /** Где: учебное заведение или компания (в списке годов берётся часть до «·»). */
  place: Localized;
  /** Должность или программа. */
  role: Localized;
  /** Период как в резюме. */
  period: string;
  title: Localized;
  text: Localized;
}

export const chapters: Chapter[] = [
  {
    id: 'first-code',
    year: '2018',
    place: { en: 'Self-taught · Python course', sv: 'Självlärd · Pythonkurs', uk: 'Самостійно · Курс Python' },
    role: { en: 'HTML, CSS · Python basics', sv: 'HTML, CSS · Grunder i Python', uk: 'HTML, CSS · Основи Python' },
    period: '2018',
    title: { en: 'First lines of code', sv: 'De första kodraderna', uk: 'Перші рядки коду' },
    text: {
      en: 'My first try at programming: a bit of HTML and CSS and my very first website. The same year I took a short Python course and learned the basics of the language.',
      sv: 'Mitt första försök med programmering: lite HTML och CSS och min allra första webbplats. Samma år gick jag en kort Pythonkurs och lärde mig grunderna i språket.',
      uk: 'Моя перша спроба програмувати: трохи HTML і CSS та мій найперший сайт. Того ж року я пройшов короткий курс Python і вивчив основи мови.',
    },
  },
  {
    id: 'khpi',
    year: '2020',
    place: { en: 'HCTC NTU “KhPI”', sv: 'HCTC NTU ”KhPI”', uk: 'ХПТК НТУ «ХПІ»' },
    role: {
      en: 'Software Development · Junior Bachelor',
      sv: 'Mjukvaruutveckling · Junior Bachelor',
      uk: 'Розробка ПЗ · Фаховий молодший бакалавр',
    },
    period: '09/2020 — 05/2024',
    title: { en: 'Learning the fundamentals', sv: 'Grunderna på riktigt', uk: 'Фундамент' },
    text: {
      en: 'College gave me the theory of software development. We started with C#: core programming principles, classes and OOP. Later came HTML, CSS and JavaScript.',
      sv: 'På college fick jag teorin bakom mjukvaruutveckling. Vi började med C#: grundläggande programmeringsprinciper, klasser och OOP. Senare kom HTML, CSS och JavaScript.',
      uk: 'Коледж дав мені теорію розробки програмного забезпечення. Почали з C#: базові принципи програмування, класи та ООП. Пізніше були HTML, CSS і JavaScript.',
    },
  },
  {
    id: 'nix',
    year: '2023',
    place: { en: 'NIX Solutions', sv: 'NIX Solutions', uk: 'NIX Solutions' },
    role: { en: 'Frontend Developer Intern', sv: 'Frontendutvecklare, praktikant', uk: 'Frontend-розробник, стажер' },
    period: '01/2023 — 06/2023',
    title: { en: 'The first real team', sv: 'Det första riktiga teamet', uk: 'Перша справжня команда' },
    text: {
      en: 'Landing pages and simple responsive pages, mostly in HTML, CSS and JavaScript, with a first taste of React. Under mentorship, on real project milestones.',
      sv: 'Landningssidor och enkla responsiva sidor, mest i HTML, CSS och JavaScript, med en första smak av React. Med mentor, på riktiga projektmål.',
      uk: 'Лендинги та прості адаптивні сторінки, переважно на HTML, CSS і JavaScript, з першим знайомством з React. З ментором, на реальних етапах проєкту.',
    },
  },
  {
    id: 'novabit',
    year: '2024',
    place: { en: 'NovaBit · Freelance team', sv: 'NovaBit · Frilansteam', uk: 'NovaBit · Фриланс-команда' },
    role: { en: 'Fullstack Developer', sv: 'Fullstackutvecklare', uk: 'Fullstack-розробник' },
    period: '03/2024 — 12/2025',
    title: { en: 'Learning by building', sv: 'Lära genom att bygga', uk: 'Вчитися, будуючи' },
    text: {
      en: 'My biggest growth stage: client work and self-development at the same time. I went deep into Next.js and backend, building automotive and e-commerce platforms with admin panels, multilingual support and dynamic SEO. I rewrote a Python backend component in Go for much faster APIs and built real-time WebSocket multiplayer for a Telegram Mini App. On the side I tried Svelte and Astro and explored Web3.',
      sv: 'Min största utvecklingsfas: kunduppdrag och självutveckling på samma gång. Jag gick djupt in i Next.js och backend och byggde fordons- och e-handelsplattformar med adminpaneler, flerspråkighet och dynamisk SEO. Jag skrev om en backenddel från Python till Go för betydligt snabbare API:er och byggde realtidsmultiplayer med WebSockets för en Telegram Mini App. Vid sidan av testade jag Svelte och Astro och utforskade Web3.',
      uk: 'Мій найбільший етап росту: клієнтські проєкти й саморозвиток водночас. Я глибоко зайшов у Next.js і бекенд, робив автомобільні та e-commerce платформи з адмінками, багатомовністю й динамічним SEO. Переписав частину бекенду з Python на Go — API стали значно швидшими, — і зробив real-time мультиплеєр на WebSockets для Telegram Mini App. Паралельно пробував Svelte та Astro і досліджував Web3.',
    },
  },
  {
    id: 'chas',
    year: '2024',
    place: { en: 'Chas Academy · YH', sv: 'Chas Academy · YH', uk: 'Chas Academy · YH' },
    role: { en: 'Fullstack JavaScript Development', sv: 'Fullstack JavaScript-utveckling', uk: 'Fullstack JavaScript-розробка' },
    period: '09/2024 — 06/2026',
    title: { en: 'Deeper into fullstack', sv: 'Djupare in i fullstack', uk: 'Глибше у fullstack' },
    text: {
      en: 'After moving to Sweden I joined a Fullstack JavaScript programme in higher vocational education, studying alongside client work at NovaBit — and learned Swedish along the way.',
      sv: 'Efter flytten till Sverige började jag en yrkeshögskoleutbildning i Fullstack JavaScript, parallellt med kunduppdrag på NovaBit — och lärde mig svenska på vägen.',
      uk: 'Після переїзду до Швеції я вступив на програму Fullstack JavaScript у вищій професійній освіті, паралельно з клієнтськими проєктами в NovaBit, — і заодно вивчив шведську.',
    },
  },
  {
    id: 'active',
    year: '2026',
    place: { en: 'Active Solution · DevSum', sv: 'Active Solution · DevSum', uk: 'Active Solution · DevSum' },
    role: { en: 'Fullstack Developer · LIA intern', sv: 'Fullstackutvecklare · LIA-praktikant', uk: 'Fullstack-розробник · LIA-стажер' },
    period: '01/2026 — 06/2026',
    title: { en: 'On the conference floor', sv: 'På konferensgolvet', uk: 'На конференції' },
    text: {
      en: 'I co-built Active DJ, a 3D game played at DevSum 2026, across frontend, backend, UI/UX and deployment. Custom collision logic took it from ~30 to up to 100 FPS, and I built the game management panel. People kept coming back to the booth for another round.',
      sv: 'Jag var med och byggde Active DJ, ett 3D-spel som spelades på DevSum 2026, med frontend, backend, UI/UX och driftsättning. Egen kollisionslogik tog spelet från ~30 till upp till 100 FPS, och jag byggde adminpanelen. Folk kom tillbaka till montern för en runda till.',
      uk: 'Я співрозробляв Active DJ — 3D-гру, у яку грали на DevSum 2026: фронтенд, бекенд, UI/UX і деплой. Власна логіка колізій підняла гру з ~30 до 100 FPS, а ще я зробив панель керування грою. Люди поверталися до стенду ще на один раунд.',
    },
  },
];
