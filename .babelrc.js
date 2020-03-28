const env = require('./env-config');
console.log(env);
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    ['transform-define', env]
  ]
};
