  const withPWA = require("next-pwa");

  module.exports = withPWA({
      images: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: ['dd-master.vercel.app'], // Add your image domain here
          path: '/_next/image',
          loader: 'default',
      },
      pwa: {
          dest: "public",
          register: true,
          skipWaiting: true,
          disable: process.env.NODE_ENV === "development"
      }
  });