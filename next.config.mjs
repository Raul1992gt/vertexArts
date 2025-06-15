/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/vertexArts' : '',
  trailingSlash: true, // Muy importante para GitHub Pages
};

export default nextConfig;
