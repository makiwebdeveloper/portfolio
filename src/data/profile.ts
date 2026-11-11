import type { Localized } from "../i18n";

export const profile = {
  name: "Illia Makovetskyi",
  nameLocal: {
    en: "Illia Makovetskyi",
    sv: "Illia Makovetskyi",
    uk: "Ілля Маковецький",
  } as Localized,
  email: "makiwebdeveloper@gmail.com",
  cv: "/Illia-Makovetskyi-Resume.pdf",
  // Старое портфолио (3D-комната с ретро-компьютером), ссылка-пасхалка в футере
  oldSite: "https://makiwebdeveloper.vercel.app",
  // TODO: put the real profile URLs here
  links: [
    { label: "GitHub", href: "https://github.com/makiwebdeveloper" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/makiwebdeveloper/",
    },
  ],
};

export const skills = {
  languages: [
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "SQL",
    "Go",
    "C#",
    ".NET",
    "Python",
    "Solidity",
  ],
  tech: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "NestJS",
    "Vue",
    "Redux",
    "Zustand",
    "TanStack Query",
    "Tailwind CSS",
    "React Three Fiber",
  ],
  tools: [
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "Supabase",
    "Docker",
    "Git",
    "GitHub Actions",
    "Vercel",
    "Railway",
    "Figma",
  ],
};

export const spoken: { name: Localized; level: Localized }[] = [
  {
    name: { en: "Ukrainian", sv: "Ukrainska", uk: "Українська" },
    level: { en: "Native", sv: "Modersmål", uk: "Рідна" },
  },
  {
    name: { en: "English", sv: "Engelska", uk: "Англійська" },
    level: { en: "Advanced", sv: "Avancerad", uk: "Вільно" },
  },
  {
    name: { en: "Swedish", sv: "Svenska", uk: "Шведська" },
    level: { en: "Advanced", sv: "Avancerad", uk: "Вільно" },
  },
  {
    name: { en: "Russian", sv: "Ryska", uk: "Російська" },
    level: { en: "Fluent", sv: "Flytande", uk: "Вільно" },
  },
];
