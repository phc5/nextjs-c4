const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(withImages(
  {
    env: {
      youtubeApiKey: 'AIzaSyCGxeq_EDpz22jTACuCXE7G5Il48B1IPyk', //get from console.developers.google.com using c4ministrywebmaster account
      youtubeChannelId: 'UCRKb2u0ePuQ9t6TnKVfe1Gw'
    }
  }
));
