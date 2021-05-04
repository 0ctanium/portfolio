const { i18n } = require('./next-i18next.config');

require('@next/env').loadEnvConfig(
  process.cwd(),
  process.env.NODE_ENV === 'development'
);

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/next/*'],
  i18n: i18n,
  transform: async (config, path) => {
    const [_, currentLocale] = path.split('/');
    const isLocalized = i18n.locales.includes(currentLocale);
    const pathWithoutLocate = isLocalized
      ? path.substring(currentLocale.length + 1)
      : path;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,

      'xhtml:link': i18n.locales
        .map(
          (locale) =>
            (!isLocalized || currentLocale !== locale) && {
              rel: 'alternate',
              hreflang: locale,
              href: `${config.siteUrl}/${locale}${pathWithoutLocate}`,
            }
        )
        .filter(Boolean),
    };
  },
};
