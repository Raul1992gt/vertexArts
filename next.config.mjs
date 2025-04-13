/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // Usa `===` en vez de `=`

const nextConfig = {
    basePath: isProd ? '/vertexArts' : '',
}

export default nextConfig;
