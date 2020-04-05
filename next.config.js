require('dotenv').config();
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(
  withImages({
    env: {
      youtubeApiKey: process.env.YOUTUBE_API_KEY,
      youtubeChannelId: process.env.YOUTUBE_CHANNEL_ID
    }
  })
);
