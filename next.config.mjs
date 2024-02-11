/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
