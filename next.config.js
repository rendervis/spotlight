/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      "tailwindui.com",
      "assets.vercel.com",
      "images.unsplash.com",
      "images.pexels.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
