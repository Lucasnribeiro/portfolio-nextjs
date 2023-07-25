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
  env: {
    ROOT: __dirname,
  },
  webpack: (config) => {
    config.module.rules.push({
    test: /\.node/,
    use: 'raw-loader',
    });
    
    return config;
  },
  
}

module.exports = nextConfig
