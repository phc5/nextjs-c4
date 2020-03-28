const withImages = require('next-images');
const debug = process.env.NODE_ENV !== 'production';

module.exports = withImages({
  assetPrefix: !debug ? '/nextjs-c4/' : '',
  webpack(config, options) {
    return config;
  }
});
