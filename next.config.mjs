/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.**',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // webpack: (config, {dev, isServer}) => {
  //   // Activer les source maps en développement uniquement
  //   if (dev) {
  //     config.devtool = 'source-map';
  //   }

  //   // Retourne la configuration modifiée
  //   return config;
  // },
  // // Désactive les source maps en production pour éviter les erreurs 404
  // productionBrowserSourceMaps: false,
};

export default nextConfig;
