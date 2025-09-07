/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"], // ✅ Add your image host here
  },
};

module.exports = nextConfig;