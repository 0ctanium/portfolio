import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@src/components/Header';

const HomePage: NextPage = () => {
  const { t, i18n } = useTranslation('home');

  console.log(i18n.getResource('en', 'home', 'hero.hi'));

  return (
    <>
      <Header />
      <section id="hero">
        <h1 className="text-7xl font-black font-display">
          <Trans
            ns="home"
            i18nKey="hero.hi"
            values={{
              name: 'Ben',
            }}>
            Hi, I'm
            <span className="text-gradient bg-gradient-to-r from-blue-800 to-yellow-600 via-pink-700">
              Ben
            </span>
            , a web developer
          </Trans>
        </h1>
      </section>
      <section id="about">
        <h1>{t('about.title')}</h1>
        <p>{t('about.text')}</p>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default HomePage;
