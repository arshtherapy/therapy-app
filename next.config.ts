import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-robots-tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "arshchildtherapy.com",
          },
        ],
        destination: "https://www.arshchildtherapy.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
