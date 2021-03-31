import { RoutesByUrl } from '@src/types';

const routes = {
  home: '/',
  blog: '/blog',
  contact: '/contact',
  project: '/project',
};

const routesByUrl: RoutesByUrl = Object.entries(routes).reduce(
  (acc, [key, route]) => ({
    ...acc,
    [route]: key,
  }),
  {}
);

export { routes, routesByUrl };
