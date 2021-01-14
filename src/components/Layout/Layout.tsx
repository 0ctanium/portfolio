import React from 'react';
import Head from 'next/head';
import Footer from '@components/Layout/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-auto px-2 flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col p-4 py-20 justify-center items-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
