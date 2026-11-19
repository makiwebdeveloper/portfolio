import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://makiwebdeveloper.up.railway.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
  // предзагрузка по наведению — только для ссылок с data-astro-prefetch (языки)
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
