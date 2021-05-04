import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@src/components/Header';

import { NextSeo } from 'next-seo';
import Footer from '@src/components/Footer';
import { BsGearFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

const Blog: NextPage = () => {
  const { t } = useTranslation('blog');
  return (
    <>
      <NextSeo
        title={t('page.title')}
        description={t('page.desc')}
        canonical="https://benjaminlepas.fr/contact"
      />
      <Header />
      <main className="min-h-screen w-full inset-0 flex justify-center items-center text-gray-800 dark:text-gray-200">
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
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
};

export default Blog;
