import { locales } from '@i18nconfig';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Our app's supported locales. We can have
  // as many as we want.
  locales,

  // If this locale is matched, pathnames work without
  // a prefix (e.g. `/about`)
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
});

export const config = {
  // Skip all paths that should not be internationalized.
  // This skips the folders "api", "_next" and all files
  // with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
