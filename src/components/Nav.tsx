import React from 'react';
import { Route } from '@src/types';
import { routes } from '@src/constants/routes';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav>
      <NavItem route={'home'} />
      <NavItem route={'blog'} />
      <NavItem route={'contact'} />
    </nav>
  );
};

export interface NavItemProps {
  route: Route;
}

export const NavItem: React.FC<NavItemProps> = ({ route }) => {
  const { t } = useTranslation();

  if (!routes[route]) {
    throw new Error(`Route ${route} does not exists`);
  }

  return <Link href={routes[route]}>{t(`header.nav.${route}`)}</Link>;
};

export default Nav;
