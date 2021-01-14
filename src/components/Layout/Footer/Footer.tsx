import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-50 flex justify-center items-center">
      <a
        className="flex justify-center items-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
};

export default Footer;
