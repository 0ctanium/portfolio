import { routes } from '@src/constants/routes';

export type Route = keyof typeof routes;
export type RouteUrl = typeof routes[Route];
