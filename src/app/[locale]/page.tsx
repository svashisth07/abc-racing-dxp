import Wrapper from '@/components/Wrapper';
import { Hero } from '@/components/blocks';
import { hygraphClient } from '@/lib/client';
import { pageQuery } from '@/lib/queries';
import { PageQueryResponse } from '@/types/query';
import { parsePageData } from '@/utils/parsePageData';
import { Locale } from '@i18nconfig';
import { unstable_setRequestLocale } from 'next-intl/server';
import { cache } from 'react';

export const revalidate = 3600; // revalidate the data at most every hour

const getPageData = cache(async (locale: Locale) => {
  const client = hygraphClient(false);

  const res = await client.request<PageQueryResponse>(pageQuery, {
    // Define the type of the response object
    locale,
    slug: 'home',
  });

  const parsedPageData = await parsePageData(res);

  return {
    page: parsedPageData,
  };
});

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const { page } = await getPageData(locale);
  // Ensures static rendering at build time.
  unstable_setRequestLocale(locale);

  const { title, subTitle, hero, ...rest } = page;
  return (
    <>
      <Hero title={title} subTitle={subTitle} hero={hero} />
      <Wrapper {...rest} />
    </>
  );
}
