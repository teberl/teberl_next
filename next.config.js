/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Uncomment the line below to enable basePath, pages and
  // redirects will then have a path prefix (`/app` in this case)
  //
  // basePath: '/app',
  //
  // async redirects() {
  //   return [];
  // },
};

module.exports = nextConfig;
