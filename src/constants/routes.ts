const routes = {
  home: '/',
  blog: '/blog',
  contact: '/contact',
  project: '/project',
};

const routesByUrl = Object.entries(routes).reduce(
  (acc, [key, route]) => ({
    ...acc,
    [route]: key,
  }),
  {}
);

export { routes, routesByUrl };
