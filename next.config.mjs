/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/vertexArts' : '',
  assetPrefix: isProd ? '/vertexArts/' : '',
  trailingSlash: true, // necesario para exportación estática
};

export default nextConfig;
