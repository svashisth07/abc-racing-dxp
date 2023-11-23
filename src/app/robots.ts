import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.URL || 'https://abc-racing-dxp.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/_next', '/static'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
