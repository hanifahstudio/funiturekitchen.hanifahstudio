import type { NextConfig } from "next";

// The sandbox production flow builds a standalone server (see package.json
// "build" / "start"). Netlify's Next runtime manages the build output itself,
// so standalone is skipped when NEXT_OUTPUT=default (set in netlify.toml).
const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT === "default" ? undefined : "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
