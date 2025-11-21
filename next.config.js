/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.asociacionpetis.org',
        port: '',
        pathname: '/sites/default/files/**',
      },
    ],
  },
}

module.exports = nextConfig
