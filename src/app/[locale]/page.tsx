import { useTranslations } from 'next-intl';
import Hero from './_components/Hero';
import LatestFixtures from './_components/LatestFixtures';
import Top5Racers from './_components/Top5Racers';

export default function Home() {
  const t = useTranslations('Index.Header');
  return (
    <main>
      <Hero />
      <LatestFixtures />
      <Top5Racers />
    </main>
  );
}
