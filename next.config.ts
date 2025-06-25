import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'images.unsplash.com','pub-d8d80d0e4a9c4361bf0d27aba14da6c8.r2.dev'],
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
