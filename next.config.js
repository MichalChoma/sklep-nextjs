/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images:{
    domains:['naszsklep-api.vercel.app', 'fakestoreapi.com', 'picsum.photos']
  }
}

module.exports = nextConfig
