import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['true'],
    },
  },
};
export default nextConfig;
