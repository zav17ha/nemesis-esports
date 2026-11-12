import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern, smaller formats where the browser supports them.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
