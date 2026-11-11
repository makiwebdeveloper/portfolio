import type { Localized } from '../i18n';

export interface Chapter {
  id: string;
  year: string;
  place: Localized;
  title: Localized;
  text: Localized;
}

export const chapters: Chapter[] = [
  {
    id: 'kharkiv',
    year: '2020',
    place: { en: 'Kharkiv, Ukraine', sv: 'Charkiv, Ukraina', uk: 'Харків, Україна' },
    title: { en: 'First lines of code', sv: 'De första kodraderna', uk: 'Перші рядки коду' },
    text: {
      en: 'I started studying software development at HCTC NTU “KhPI”. HTML, CSS and a lot of curiosity about how things on the screen actually work.',
      sv: 'Jag började studera mjukvaruutveckling vid HCTC NTU ”KhPI”. HTML, CSS och mycket nyfikenhet på hur saker på skärmen faktiskt fungerar.',
      uk: 'Я вступив на спеціальність «Розробка програмного забезпечення» в ХПТК НТУ «ХПІ». HTML, CSS і багато цікавості до того, як насправді працює все на екрані.',
    },
  },
  {
    id: 'nix',
    year: '2023',
    place: { en: 'NIX Solutions', sv: 'NIX Solutions', uk: 'NIX Solutions' },
    title: { en: 'The first real team', sv: 'Det första riktiga teamet', uk: 'Перша справжня команда' },
    text: {
      en: 'A frontend internship: responsive components, landing sections and animations in React — under mentorship and on real project milestones.',
      sv: 'En frontendpraktik: responsiva komponenter, landningssektioner och animationer i React — med mentor och riktiga projektmål.',
      uk: 'Frontend-стажування: адаптивні компоненти, секції лендингів та анімації на React — з ментором і на реальних етапах проєкту.',
    },
  },
  {
    id: 'novabit',
    year: '2024',
    place: { en: 'NovaBit · Freelance', sv: 'NovaBit · Frilans', uk: 'NovaBit · Фриланс' },
    title: { en: 'Going fullstack', sv: 'Steget till fullstack', uk: 'Перехід у fullstack' },
    text: {
      en: 'Automotive and e-commerce platforms with catalogs, admin panels and multilingual SEO. I rewrote a Python service in Go for faster APIs, and built real-time multiplayer for a Telegram Mini App.',
      sv: 'Fordons- och e-handelsplattformar med kataloger, adminpaneler och flerspråkig SEO. Jag skrev om en Python-tjänst i Go för snabbare API:er och byggde realtidsmultiplayer för en Telegram Mini App.',
      uk: 'Автомобільні та e-commerce платформи з каталогами, адмінками й багатомовним SEO. Переписав Python-сервіс на Go заради швидших API та зробив real-time мультиплеєр для Telegram Mini App.',
    },
  },
  {
    id: 'stockholm',
    year: '2024',
    place: { en: 'Stockholm, Sweden', sv: 'Stockholm, Sverige', uk: 'Стокгольм, Швеція' },
    title: { en: 'A new city', sv: 'En ny stad', uk: 'Нове місто' },
    text: {
      en: 'I moved to Stockholm and joined Chas Academy’s Fullstack JavaScript programme — and learned Swedish along the way.',
      sv: 'Jag flyttade till Stockholm och började på Chas Academys utbildning i Fullstack JavaScript — och lärde mig svenska på vägen.',
      uk: 'Я переїхав до Стокгольма, вступив на програму Fullstack JavaScript у Chas Academy — і паралельно вивчив шведську.',
    },
  },
  {
    id: 'devsum',
    year: '2026',
    place: { en: 'Active Solution · DevSum', sv: 'Active Solution · DevSum', uk: 'Active Solution · DevSum' },
    title: { en: 'On the conference floor', sv: 'På konferensgolvet', uk: 'На конференції' },
    text: {
      en: 'At Active Solution I co-built Active DJ, a 3D game played at DevSum 2026. People kept coming back to the booth for another round.',
      sv: 'På Active Solution byggde jag tillsammans med teamet Active DJ, ett 3D-spel som spelades på DevSum 2026. Folk kom tillbaka till montern för en runda till.',
      uk: 'В Active Solution ми з командою створили Active DJ — 3D-гру, у яку грали на DevSum 2026. Люди поверталися до стенду ще на один раунд.',
    },
  },
];
