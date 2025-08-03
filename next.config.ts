import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ...otros settings
  typescript: {
    ignoreBuildErrors: true, // <-- Ignora errores de TS en build
  },
  eslint: {
    ignoreDuringBuilds: true, // <-- Ignora errores de ESLint en build
  },
};

export default nextConfig;
