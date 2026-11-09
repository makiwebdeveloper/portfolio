import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com', // TODO: replace with the real domain
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv', 'uk'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
});
