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
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/files/Shreyas Kishore Résumé v3.1.3.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
