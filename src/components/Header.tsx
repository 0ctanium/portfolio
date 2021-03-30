import React from 'react';
import Nav from '@src/components/Nav';

const Header: React.FC = () => {
  return (
    <header className="absolute inset-y-0 top-0 w-full">
      <div className="container mx-auto h-16 flex items-center">
        <div className="flex-grow" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
