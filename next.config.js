/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['ik.imagekit.io', "lh3.googleusercontent.com"],
    },
    webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  }
  }
  
  module.exports = nextConfig