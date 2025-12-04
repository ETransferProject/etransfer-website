const rewritesConfig = require('./rewrites/index');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return rewritesConfig;
  },
  images: {
    // loader: 'akamai',
    // path: '',
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etransfer-dev.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'etransfer.s3.ap-northeast-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'etransfer.exchange',
      },
      {
        protocol: 'https',
        hostname: 'cms.etransfer.exchange',
      },
      {
        protocol: 'https',
        hostname: 'home.etransfer.exchange',
      },
      {
        protocol: 'https',
        hostname: 'testhome.etransfer.exchange',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  productionBrowserSourceMaps: true,
};
