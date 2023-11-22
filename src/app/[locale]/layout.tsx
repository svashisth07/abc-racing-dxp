import Header from '@/components/Header';
import useTextDirection from '@/hooks/useTextDirection';
import { hygraphClient } from '@/lib/client';
import { seoQuery } from '@/lib/queries';
import { SeoQueryResponse } from '@/types/query';
import { Locale, locales } from '@i18nconfig';
// import { unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale, preview = false },
}: {
  params: { locale: Locale; preview: boolean };
}) {
  const client = hygraphClient(preview);

  const { page } = await client.request<SeoQueryResponse>(seoQuery, {
    locale,
    slug: 'home',
  });

  const { title, description } = page.seo;
  return {
    title,
    description,
    manifest: '/manifest.json',
    keywords: ['next13', 'pwa', 'next-pwa'],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Ensures static rendering at build time.
  // unstable_setRequestLocale(locale);

  const dir = useTextDirection();
  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
