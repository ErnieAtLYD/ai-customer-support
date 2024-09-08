/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: false,
    },
    experimental: {
      appDir: true,
    },
    webpack: (config, { isServer }) => {
      // Add custom webpack configurations here if needed
      return config;
    },
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
  };
  
  export default nextConfig;