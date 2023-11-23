import { hygraphClient } from '@/lib/client';
import { getAllPages } from '@/lib/queries';
import { locales } from '@i18nconfig';
import { MetadataRoute } from 'next';

export default async function sitemap() {
  const baseUrl = process.env.URL || 'https://abc-racing-dxp.vercel.app';
  const sitemaps: MetadataRoute.Sitemap = [];

  const client = hygraphClient();
  const { pages } = await client.request<{
    pages: {
      slug: string;
    }[];
  }>(getAllPages);

  sitemaps.push({
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
  });

  pages.forEach((page) => {
    locales.forEach((locale) => {
      sitemaps.push({
        url: `${baseUrl}/${locale}/${page.slug === 'home' ? '' : page.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
      });
    });
  });

  return sitemaps;
}
