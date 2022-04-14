/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: ["next/babel"],
  reactStrictMode: true,
  images: {
    domains: ["yts.torrentbay.to"],
  },
};

module.exports = nextConfig;
