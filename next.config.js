const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos.textgiraffe.com',
      },
    ],
    minimumCacheTTL:15000000,
  },
};
module.exports=nextConfig