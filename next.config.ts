import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
  experimental: {
    turbo: {
      rules: {
        use: ['@svgr/webpack'],
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  reactStrictMode: false,
};

export default nextConfig;
