/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  unstable_runtimeJS: false,
};

module.exports = nextConfig;
