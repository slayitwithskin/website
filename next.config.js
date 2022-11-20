/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', '1000logos.net', 'elcompanies.com', 'logosdownload.com', 'stickpng.com']
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
  }
}

module.exports = nextConfig
