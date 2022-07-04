/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  unstable_runtimeJS: false,
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
