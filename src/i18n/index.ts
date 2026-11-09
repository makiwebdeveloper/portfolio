import { defaultLang, languages, ui, type Lang, type UIKey } from './ui';

export { languages, defaultLang, type Lang };

export type Localized = Record<Lang, string>;

export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in languages ? (currentLocale as Lang) : defaultLang;
}

export function useT(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Picks the right language from a { en, sv, uk } object. */
export function pick(value: Localized, lang: Lang) {
  return value[lang] ?? value[defaultLang];
}

export function pathFor(lang: Lang) {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
