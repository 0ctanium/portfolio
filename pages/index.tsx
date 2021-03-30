import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@src/components/Header';
import Hero from '@src/components/Home/Hero';
import About from '@src/components/Home/About';
import Work from '@src/components/Home/Work';

const HomePage: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default HomePage;
