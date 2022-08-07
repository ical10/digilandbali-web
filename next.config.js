/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  serverRuntimeConfig: {
    appSecret: process.env.APP_SECRET,
    digilandAPIURL: process.env.DIGILANDAPI_URL,
    jwtSecret: process.env.JWT_SECRET,
  },
  publicRuntimeConfig: {
    appAuthURL: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
    apiURL: process.env.DIGILANDAPI_API_URL ?? 'http://localhost:3001',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  trailingSlash: true,
};

module.exports = nextConfig;
