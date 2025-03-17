import type NextConfig from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
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
