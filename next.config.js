/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['flagcdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
