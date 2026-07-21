import type { NextConfig } from 'next';
import dotenv from 'dotenv';

// Load .env into process.env
// Last deploy: includes pricing, Gibraltar, Al Boraq, cancellation, blog/train pages
dotenv.config({ path: '.env', override: true });

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    PROJECT_ID: process.env.HAPPYSEEDS_PROJECT_ID ?? '',
    REACTUS_BASE_URL: process.env.REACTUS_BASE_URL ?? '',
  },
  serverExternalPackages: [],
  allowedDevOrigins: [
    "**.*.*",
  ],
};

export default nextConfig;

