import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    cacheLife: {
      oneMinute: {
        stale: 30,      // browser can serve without checking for 30s
        revalidate: 60, // server revalidates after 60s
        expire: 300,    // hard maximum before forced fresh fetch: 5 min
      },
      realtime: {
        stale: 0,
        revalidate: 0,
        expire: 0,      // never cache — always fresh
      }
    }
  }
};

export default nextConfig;