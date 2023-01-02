/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = `
  default-src 'self' https://res.cloudinary.com https://www.google-analytics.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  child-src 'self';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/css2 https://fonts.gstatic.com;
  font-src 'self' https://fonts.googleapis.com/css2 https://fonts.gstatic.com;  
  img-src 'self' https://res.cloudinary.com
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  // },
];

const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/#': { page: '/' },
      '/#/blogs': { page: '/blogs' },
    };
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  assetPrefix: isProd ? '/#' : undefined,
};

module.exports = nextConfig;
