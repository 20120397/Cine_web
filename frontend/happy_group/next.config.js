// /** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true ,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
        port: '',
        // pathname: '/da2qtf6sw/image/upload/v1681396702/movie-cloud/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org', 
        port: '',
        pathname: '/t/p/w1280/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', 
        port: '',
        pathname: '/images/M/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com', 
        port: '',
        // pathname: '/images/M/**',
      },
    ],
  },
}

module.exports = nextConfig

