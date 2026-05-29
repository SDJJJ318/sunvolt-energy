import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'ru', 'pt', 'es', 'ar'],
  defaultLocale: 'en',
});
