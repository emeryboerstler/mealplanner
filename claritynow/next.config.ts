import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use static export so the site can be served as plain static files on Netlify
  output: "export",
  // Ensure images work without the Next Image Optimization server
  images: { unoptimized: true },
};

export default nextConfig;
