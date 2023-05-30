/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-portfolio.lucasnribeiro.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
