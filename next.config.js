const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack5: true,
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: 'build',
  webpack: (config) => {
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers');
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@hooks'] = path.join(__dirname, 'hooks');
    return config;
  }
}

module.exports = nextConfig;
