/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com', 'img.youtube.com', 'upload.wikimedia.org', '1000logos.net', 'logos-world.net'],
  },
  // basePath: '/film',
  // assetPrefix: '/film/',
}

module.exports = nextConfig