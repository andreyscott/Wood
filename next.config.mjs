/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Uncomment if static export is needed
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
