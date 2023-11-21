import { Locale } from '@i18nconfig';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from './_components/Hero';
import LatestFixtures from './_components/LatestFixtures';
import Top5Racers from './_components/Top5Racers';

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = useTranslations('Index.Header');
  // Ensures static rendering at build time.
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <LatestFixtures />
      <Top5Racers />
    </>
  );
}
