import useTextDirection from '@/hooks/useTextDirection';
import { locales } from '@i18nconfig';
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import '../globals.css';
import Header from './_components/Header';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: 'Index.Metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dir = useTextDirection();
  return (
    <html lang={params.locale} dir={dir}>
      <Head>
        <link rel="prefetch" href="/hero.avif" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
