/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'dummyimage.com',
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
