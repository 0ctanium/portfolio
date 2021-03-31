import React, { ReactNode } from 'react';
import { Route } from '@src/types';
import { routes } from '@src/constants/routes';
import { useTranslation } from 'next-i18next';
import Link, { LinkProps } from 'next/link';
import useCurrentRoute from '@src/hooks/useCurrentRoute';
import clsx from 'clsx';
import { TFunction } from 'i18next';

const Nav: React.FC = () => {
  return (
    <nav className="flex items-center float-right">
      <NavItem route={'home'} />
      <NavItem route={'blog'} />
      <NavItem route={'contact'}>
        {({ active, route, t }) => (
          <a
            className={clsx(
              'border-2 border-blue-800 rounded-full text-base text-blue-800 font-sans font-regular py-2 px-5 hover:bg-blue-500 hover:bg-opacity-70 hover:border-blue-500 hover:text-white transition duration-200',
              active && ''
            )}>
            {t(`header.nav.${route}`)}
          </a>
        )}
      </NavItem>
    </nav>
  );
};

export interface NavItemProps extends Omit<LinkProps, 'href'> {
  route: Route;
  children?: (props: {
    active: boolean;
    route: Route;
    t: TFunction;
  }) => ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  route,
  children,
  ...props
}) => {
  const { t } = useTranslation();
  const currentRoute = useCurrentRoute();
  const active = currentRoute === route;

  if (!routes[route]) {
    throw new Error(`Route ${route} does not exists`);
  }

  return (
    <Link passHref {...props} href={routes[route]}>
      {children ? (
        children({ active, t, route })
      ) : (
        <a
          className={clsx(
            'text-base text-gray-800 font-sans font-regular mr-20',
            active
              ? 'border-b border-blue-800'
              : 'hover:border-b hover:border-blue-800 transition duration-200'
          )}>
          {t(`header.nav.${route}`)}
        </a>
      )}
    </Link>
  );
};

export default Nav;
