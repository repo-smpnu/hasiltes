import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  // For @react-pdf/renderer server-side rendering
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
