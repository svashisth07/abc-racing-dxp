import Hero from '@/components/Hero';
import LatestFixtures from '@/components/LatestFixtures';
import Top5Racers from '@/components/Top5Racers';
import { Locale } from '@i18nconfig';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

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
