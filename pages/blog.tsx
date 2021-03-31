import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@src/components/Header';

import { NextSeo } from 'next-seo';
import Footer from '@src/components/Footer';
import { BsGearFill } from 'react-icons/bs';

const Blog: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Benjamin Lepas"
        description="Hey ! I'm Benjamin, a full stack web developper. You can visit my portfolio to know more about me"
        canonical="https://benjaminlepas.fr/"
      />

      <Header />

      <main className="min-h-screen w-full inset-0 flex justify-center items-center">
        <BsGearFill className="w-20 h-20 animate-spin-slow" />
        <h1 className="ml-6">Soon</h1>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};

export default Blog;
