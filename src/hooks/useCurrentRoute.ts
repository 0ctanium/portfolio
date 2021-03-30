import { useRouter } from 'next/router';
import { Route } from '@src/types';
import { routesByUrl } from '@src/constants/routes';
import { useMemo } from 'react';

const useCurrentRoute = (): Route | undefined => {
  const { pathname } = useRouter();

  return useMemo<Route | undefined>(() => routesByUrl[pathname], [pathname]);
};

export default useCurrentRoute;
