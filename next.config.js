/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/blogs': { page: '/blogs' },
    }
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
