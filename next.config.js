/** @type {import('next').NextConfig} */
const nextConfig = {
  presets: ["next/babel"],
  reactStrictMode: true,
  images: {
    domains: ["yts.torrentbay.to"],
  },
  plugins: [["babel-plugin-styled-components"]],
};

module.exports = nextConfig;
