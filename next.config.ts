import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  // Generate unique build ID for cache busting on each deployment
  generateBuildId: async () => {
    // Use timestamp for unique build ID on each deploy
    return `build-${Date.now()}`;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mamrotspain.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
    // Skip Next.js image optimization for CDN images - serve directly from BunnyCDN
    unoptimized: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
