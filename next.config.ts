import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "designoholic.com",
        port: "",
        pathname: "/wp-content/uploads/2017/07/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
