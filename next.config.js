/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', '1000logos.net', 'elcompanies.com', 'logosdownload.com']
  }
}

module.exports = nextConfig
