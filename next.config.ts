import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hekayet-jabal",
  assetPrefix: "/hekayet-jabal",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
