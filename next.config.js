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
    apiURL: process.env.DIGILANDBALI_API_URL,
  },
  publicRuntimeConfig: {
    appAuthURL: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
    apiURL: process.env.DIGILANDBALI_API_URL ?? 'http://localhost:3001',
    providerKey: process.env.NEXT_PUBLIC_PROVIDER_KEY,
    providerURL: process.env.NEXT_PUBLIC_ALCHEMY_URL,
    contractAddress: process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
    usdcContractAddress: process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS,
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
