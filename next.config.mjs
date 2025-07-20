/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lacalchona.cl', 
      },
      {
        protocol: 'https',
        hostname: 'api.lacalchona.cl',  // Agregamos el subdominio
      }
    ],
  },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  export default nextConfig;
  