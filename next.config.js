/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  publicRuntimeConfig: {
    appAuthURL: process.env.NEXTAUTH_URL ?? 'http://localhost:3000',
    apiURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
    web3ProviderKey: process.env.NEXT_PUBLIC_WEB3_PROVIDER_KEY,
    web3ProviderURL: process.env.NEXT_PUBLIC_WEB3_PROVIDER_URL,
    lbsfContractAddress: process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
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
