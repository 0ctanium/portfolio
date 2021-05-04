import { GetStaticPathsResult } from 'next';
import prettier from 'prettier';
import path from 'path';
import requireDir from 'require-dir';
import fs from 'fs';

type GenerateSitemap = (config: {
  i18nConfig?: {
    locales?: string[];
    defaultLocale?: string;
  };
  basePath?: string;
  domain: string;
  date?: Date;
  formatter?: (sitemap: string) => string;
  output?: string;
}) => void;

const generateSitemap: GenerateSitemap = ({
  i18nConfig = {},
  basePath = '.next/server/pages',
  domain,
  date = new Date().toISOString(),
  formatter: formatted = (sitemap) =>
    prettier.format(sitemap, { parser: 'html' }),
  output = 'sitemap.xml',
}) => {
  const { locales, defaultLocale } = i18nConfig;

  const apiFullPath = path
    .resolve(`${basePath}/api`)
    .replace(/([=!:$\/()])/g, '\\$1');
  const nextFullPath = path
    .resolve(`${basePath}/next`)
    .replace(/([=!:$\/()])/g, '\\$1');
  const apiReg = new RegExp(`^${apiFullPath}`, 'gm');
  const nextReg = new RegExp(`^${nextFullPath}`, 'gm');

  const dir = requireDir('../../', {
    recurse: true,
    duplicates: true,
    filter: function (fullPath) {
      const { name } = path.parse(fullPath);

      return (
        !nextReg.test(fullPath) && !apiReg.test(fullPath) && !/^\_/g.test(name)
      );
    },
  });

  function getModules(dir: { [p: string]: any }) {
    return Object.entries(dir)
      .map(([pathname, module]) => {
        // check if object is a module
        if (module.default) {
          if (!/.js/g.test(pathname)) {
            // check if pathname is a dynamic route
            if (/\[(.*)\]/g.test(pathname)) {
              // check if dynamic route exports getStaticPaths
              if (module.getStaticPaths) {
                const {
                  paths,
                }: GetStaticPathsResult<{
                  [p: string]: string;
                }> = module.getStaticPaths({
                  locales,
                  defaultLocale,
                });

                // loop through paths
                return paths
                  .map((path) => {
                    if (typeof path === 'string') return path;
                    const { params } = path;
                    let res = pathname;

                    // replace [param] by actual value for each paths
                    Object.entries(params).forEach(([key, value]) => {
                      const r = new RegExp(`\\[${key}\\]`);

                      res = res.replace(r, value);
                    });

                    return res;
                  })
                  .flat();
              }
              // if route does not exports getStaticPaths => return falsy value to be filter later
              return undefined;
            }

            return pathname;
          }
          return undefined;
        } else {
          return [
            dir[`${pathname}.js`] && pathname,
            ...getModules(module)
              .flat()
              .filter(Boolean)
              .map((path) => `${pathname}/${path}`),
          ];
        }
      })
      .flat()
      .filter(Boolean);
  }

  const pages = getModules(dir);

  const pagesSitemap = `
    ${pages
      .map((page) => {
        const path = page
          .replace('./pages/', '')
          .replace('.tsx', '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;
        return `
          <url>
            <loc>${domain}/${routePath}</loc>
            <lastmod>${date}</lastmod>
          </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${pagesSitemap}
    </urlset>
  `;

  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync(`./public/${output}`, formattedSitemap, 'utf8');
};

export default generateSitemap;
