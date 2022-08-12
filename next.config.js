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
    apiURL: process.env.DIGILAND_API_URL,
    jwtSecret: process.env.JWT_SECRET,
  },
  publicRuntimeConfig: {
    appAuthURL: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
    apiURL: process.env.DIGILAND_API_URL ?? 'http://localhost:3001',
    contractAddress: process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
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
