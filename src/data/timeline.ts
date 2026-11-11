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
    id: 'khpi',
    year: '2020',
    place: { en: 'HCTC NTU “KhPI”', sv: 'HCTC NTU ”KhPI”', uk: 'ХПТК НТУ «ХПІ»' },
    role: {
      en: 'Software Development · Junior Bachelor',
      sv: 'Mjukvaruutveckling · Junior Bachelor',
      uk: 'Розробка ПЗ · Фаховий молодший бакалавр',
    },
    period: '09/2020 — 05/2024',
    title: { en: 'First lines of code', sv: 'De första kodraderna', uk: 'Перші рядки коду' },
    text: {
      en: 'I started studying software development. HTML, CSS and a lot of curiosity about how things on the screen actually work.',
      sv: 'Jag började studera mjukvaruutveckling. HTML, CSS och mycket nyfikenhet på hur saker på skärmen faktiskt fungerar.',
      uk: 'Я почав вивчати розробку програмного забезпечення. HTML, CSS і багато цікавості до того, як насправді працює все на екрані.',
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
      en: 'Responsive UI components, landing page sections and animations in React — under mentorship, on real project milestones, making the interface more consistent.',
      sv: 'Responsiva UI-komponenter, landningssektioner och animationer i React — med mentor, på riktiga projektmål och med ett mer enhetligt gränssnitt som resultat.',
      uk: 'Адаптивні UI-компоненти, секції лендингів та анімації на React — з ментором, на реальних етапах проєкту, з більш узгодженим інтерфейсом у результаті.',
    },
  },
  {
    id: 'novabit',
    year: '2024',
    place: { en: 'NovaBit · Freelance team', sv: 'NovaBit · Frilansteam', uk: 'NovaBit · Фриланс-команда' },
    role: { en: 'Fullstack Developer', sv: 'Fullstackutvecklare', uk: 'Fullstack-розробник' },
    period: '03/2024 — 12/2025',
    title: { en: 'Going fullstack', sv: 'Steget till fullstack', uk: 'Перехід у fullstack' },
    text: {
      en: 'Automotive and e-commerce platforms with vehicle catalogs, admin panels, multilingual support and dynamic SEO. I rewrote a Python backend component in Go for much faster APIs, and built real-time WebSocket multiplayer for a Telegram Mini App.',
      sv: 'Fordons- och e-handelsplattformar med fordonskataloger, adminpaneler, flerspråkighet och dynamisk SEO. Jag skrev om en backenddel från Python till Go för betydligt snabbare API:er och byggde realtidsmultiplayer med WebSockets för en Telegram Mini App.',
      uk: 'Автомобільні та e-commerce платформи з каталогами авто, адмінками, багатомовністю й динамічним SEO. Переписав частину бекенду з Python на Go — API стали значно швидшими, — і зробив real-time мультиплеєр на WebSockets для Telegram Mini App.',
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
