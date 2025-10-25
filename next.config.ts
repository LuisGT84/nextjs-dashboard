import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: 'incremental', // Prerrenderización Parcial
  }
};

export default nextConfig;
