import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vtzlmiqlqsppuxki.public.blob.vercel-storage.com",
      }
    ]
  }
};

export default nextConfig;
