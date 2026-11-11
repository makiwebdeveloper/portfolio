import type { ImageMetadata } from "astro";
import acarsCover from "../assets/projects/acars.png";
import activeDjCover from "../assets/projects/activedj.png";
import focalCover from "../assets/projects/focal.png";
import makmoneyCover from "../assets/projects/makmoney.png";
import soundyCover from "../assets/projects/soundy.png";
import vtikhaCover from "../assets/projects/vtikha.png";
import type { Localized } from "../i18n";

export interface Project {
  slug: string;
  title: string;
  year: string;
  solo: boolean;
  tagline: Localized;
  summary: Localized;
  stack: string[];
  /** Optional "Did you know?" fact shown inside the opened project. */
  highlight?: Localized;
  links?: { label: string; href: string }[];
  /**
   * Optional screenshot: import it from src/assets and put it here, e.g.
   *   import focalCover from '../assets/projects/focal.png';
   *   cover: focalCover,
   * Without a cover the project gets a generated visual in its own hue.
   */
  cover?: ImageMetadata;
  /** Hue (0–360) for the generated visual. */
  hue: number;
}

export const projects: Project[] = [
  {
    slug: "active-dj",
    title: "ActiveDJ",
    cover: activeDjCover,
    year: "2026",
    solo: false,
    hue: 265,
    stack: ["React", "React Three Fiber", "C#", ".NET"],
    tagline: {
      en: "Interactive 3D game for DevSum 2026",
      sv: "Interaktivt 3D-spel för DevSum 2026",
      uk: "Інтерактивна 3D-гра для DevSum 2026",
    },
    summary: {
      en: "A 3D game played with a real DJ controller at the Active Solution booth. I worked across frontend, backend, UI/UX and deployment, and built the game management panel used during the conference.",
      sv: "Ett 3D-spel som spelas med en riktig DJ-kontroller i Active Solutions monter. Jag arbetade med frontend, backend, UI/UX och driftsättning, och byggde adminpanelen som användes under konferensen.",
      uk: "3D-гра, у яку грають справжнім DJ-контролером на стенді Active Solution. Я працював над фронтендом, бекендом, UI/UX і деплоєм, а також зробив панель керування грою, яку використовували на конференції.",
    },
    highlight: {
      en: "Replacing the physics library with custom collision logic took the game from ~30 to up to 100 FPS.",
      sv: "Genom att ersätta fysikbiblioteket med egen kollisionslogik gick spelet från ~30 till upp till 100 FPS.",
      uk: "Заміна фізичної бібліотеки на власну логіку колізій підняла гру з ~30 до 100 FPS.",
    },
  },
  {
    slug: "focal",
    title: "Focal",
    cover: focalCover,
    year: "2026",
    solo: true,
    hue: 215,
    stack: [
      "TypeScript",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenRouter",
    ],
    tagline: {
      en: "AI-powered productivity platform",
      sv: "AI-driven produktivitetsplattform",
      uk: "Платформа продуктивності з AI",
    },
    summary: {
      en: "A productivity app with a custom agent orchestration loop and backend tools the agent can call, for planning tasks and managing projects intelligently.",
      sv: "En produktivitetsapp med en egen loop för agentorkestrering och backendverktyg som agenten kan anropa, för smart planering av uppgifter och projekt.",
      uk: "Застосунок продуктивності з власним циклом оркестрації агента та бекенд-інструментами, які агент може викликати, — для розумного планування задач і проєктів.",
    },
  },
  {
    slug: "vtikha",
    title: "VTIKHA",
    cover: vtikhaCover,
    year: "2025",
    solo: true,
    hue: 20,
    stack: ["TypeScript", "Next.js", "Express"],
    tagline: {
      en: "Live e-commerce platform",
      sv: "E-handelsplattform i drift",
      uk: "Робоча e-commerce платформа",
    },
    summary: {
      en: "A live online store with product management, checkout, payments, inventory tracking and an admin panel — built and run on my own.",
      sv: "En webbutik i drift med produkthantering, kassa, betalningar, lagerhantering och adminpanel — byggd och driven på egen hand.",
      uk: "Живий інтернет-магазин з керуванням товарами, оформленням замовлень, оплатами, обліком залишків та адмінкою — зроблений і підтримуваний самостійно.",
    },
  },
  {
    slug: "acars",
    title: "Acars",
    cover: acarsCover,
    year: "2025",
    solo: false,
    hue: 195,
    stack: ["Next.js", "TypeScript", "MySQL", "Python", "Go", "Zustand"],
    tagline: {
      en: "Car import marketplace",
      sv: "Marknadsplats för bilimport",
      uk: "Маркетплейс імпортованих авто",
    },
    summary: {
      en: "A sales site for a Ukrainian company importing cars from US auctions: multilingual catalogs, price calculators and an admin panel.",
      sv: "En försäljningssajt för ett ukrainskt företag som importerar bilar från amerikanska auktioner: flerspråkiga kataloger, priskalkylatorer och adminpanel.",
      uk: "Сайт для української компанії, що імпортує авто з американських аукціонів: багатомовні каталоги, калькулятори вартості та адмінка.",
    },
    highlight: {
      en: "I rewrote the slowest backend part from Python to Go, which made API responses noticeably faster.",
      sv: "Jag skrev om den långsammaste backenddelen från Python till Go, vilket gjorde API-svaren märkbart snabbare.",
      uk: "Найповільнішу частину бекенду я переписав з Python на Go — і відповіді API стали помітно швидшими.",
    },
  },
  {
    slug: "soundy",
    title: "Soundy",
    cover: soundyCover,
    year: "2024",
    solo: true,
    hue: 330,
    stack: ["Next.js", "TypeScript", "Zustand", "PostgreSQL"],
    tagline: {
      en: "Fullstack music platform",
      sv: "Musikplattform i fullstack",
      uk: "Fullstack музична платформа",
    },
    summary: {
      en: "Publish tracks, build playlists and albums, like songs and listen with a persistent player.",
      sv: "Publicera låtar, skapa spellistor och album, gilla låtar och lyssna med en spelare som följer med mellan sidor.",
      uk: "Публікація треків, плейлисти й альбоми, лайки та плеєр, який не зупиняється при переході між сторінками.",
    },
  },
  {
    slug: "makmoney",
    title: "MakMoney",
    cover: makmoneyCover,
    year: "2024",
    solo: true,
    hue: 150,
    stack: ["TypeScript", "Next.js", "Supabase"],
    tagline: {
      en: "Personal finance app",
      sv: "App för privatekonomi",
      uk: "Застосунок для особистих фінансів",
    },
    summary: {
      en: "Multi-account tracking and goal-based savings pools, so reserved money and everyday spending never get mixed up.",
      sv: "Flera konton och målbaserade sparpotter, så att reserverade pengar och vardagsutgifter aldrig blandas ihop.",
      uk: "Кілька рахунків і цільові накопичувальні «пули», щоб відкладені гроші не змішувалися з щоденними витратами.",
    },
  },
];
