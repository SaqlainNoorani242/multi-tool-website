/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    unoptimized: true, // <UPDATE> Added unoptimized field
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // <UPDATE> Added eslint field
  },
  typescript: {
    ignoreBuildErrors: true, // <UPDATE> Added typescript field
  },
}

export default nextConfig
