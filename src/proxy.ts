import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

// In Next.js 16 the `middleware` file convention was renamed to `proxy`.
// next-intl's handler is the conventional default export, which satisfies
// the proxy convention. Without this file, `requestLocale` is never set and
// every locale falls back to `defaultLocale`, so pages render in English
// regardless of the URL prefix.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for static assets, Next.js internals and API
  // routes. This is the matcher recommended by next-intl v4.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
