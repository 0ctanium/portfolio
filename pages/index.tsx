import React from 'react';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const { t, i18n } = useTranslation('common');
  const { locale } = useRouter();

  console.log(locale, i18n);

  return (
    <>
      <header className="container">{/*<nav></nav>*/}</header>
      <section id="hero">
        <h1>{t('about')}</h1>
      </section>
    </>
  );
};

export default HomePage;
