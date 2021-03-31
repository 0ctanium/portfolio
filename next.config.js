const { i18n } = require('./next-i18next.config');

module.exports = {
  async redirects() {
    return [
      {
        source: '/:path(.*)/',
        destination: '/:path',
        permanent: true,
      },
    ];
  },
  i18n,
};
