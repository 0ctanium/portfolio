import { routes } from '@src/constants/routes';
import { NextRouter } from 'next/router';

export type Route = keyof typeof routes;
export type RouteUrl = typeof routes[Route] | NextRouter['pathname'];

export interface RoutesByUrl {
  [p: RouteUrl]: Route;
}

export type TimelineEventType = 'studies' | 'pro' | 'events';
export interface TimelineEvent {
  date: Date;
  key: string;
  type: TimelineEventType;
  content: string;
  meta: {
    title?: string;
  };
}
export type Timeline = TimelineEvent[];
