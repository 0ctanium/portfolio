import React from 'react';
import Nav from '@src/components/Nav';

const Header: React.FC = () => {
  return (
    <header className="absolute inset-x-0 top-0 w-full z-50">
      <div className="container mx-auto h-16 flex justify-center sm:justify-end items-center">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
