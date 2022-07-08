const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  i18n,
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
