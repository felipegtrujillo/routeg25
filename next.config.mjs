/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['lacalchona.cl', 'otro-dominio.com'], // Agrega aquí los dominios de tus imágenes
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
  