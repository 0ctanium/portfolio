import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@src/components/Header';
import Hero from '@src/components/Home/Hero';
import About from '@src/components/Home/About';
import Tasks from '@src/components/Home/Tasks';
import Background from '@src/components/Home/Background';

import { admin } from '@src/services/firebase/admin';
import { DownloadResponse } from '@google-cloud/storage';
import matter from 'gray-matter';
import { Timeline } from '@src/types';
import { SSRConfig, useTranslation } from 'next-i18next';
import Skills from '@src/components/Home/Skills';
import Works from '@src/components/Home/Work';
import { NextSeo } from 'next-seo';
import Testimonials from '@src/components/Home/Testimonials';
import Footer from '@src/components/Footer';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  events,
}) => {
  const { t } = useTranslation('home');

  return (
    <>
      <NextSeo
        title={t('page.title')}
        description={t('page.desc')}
        canonical="https://benjaminlepas.fr/"
      />

      <Header />

      <Hero />
      <About />
      <Tasks />
      <Background timeline={events} />
      <Skills />
      <Works />
      <Testimonials />
      <section
        id="contact"
        className="text-center mb-24 mx-auto container px-10 text-gray-800 dark:text-gray-200">
        <h2 className="mb-3">{t('contact.title')}</h2>
        <h5 className="mb-12 font-sans text-lg font-normal">
          {t('contact.text')}
        </h5>
        <button className="btn-blue-700 dark:btn-blue-500">
          {t('contact.cta')}
        </button>
      </section>

      <Footer />
    </>
  );
};

interface HomePageProps extends SSRConfig {
  events: Timeline;
}

async function getTimelineEventFile(key: string, locale: string) {
  const bucket = admin.storage().bucket();

  let file = bucket.file(`timeline/${key}.${locale}.md`);

  if (!(await file.exists())[0]) {
    file = bucket.file(`timeline/${key}.${locale}.mdx`);
  }

  return file;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  locale,
}) => {
  const firestore = admin.firestore();
  const snapshot = await firestore.collection('timeline').get();

  const events = [];
  for (const document of snapshot.docs) {
    const data = document.data();

    let file = await getTimelineEventFile(data.key, locale);

    if (!(await file.exists())[0] && locale !== 'en') {
      file = await getTimelineEventFile(data.key, 'en');
    }

    if ((await file.exists())[0]) {
      let fileContent: DownloadResponse;
      try {
        fileContent = await file.download();
      } catch (e) {
        throw e;
      }

      const { data: meta, content } = matter(fileContent.toString());

      events.push({
        ...data,
        date: (data.date.toDate() as Date).toJSON(),
        content,
        meta,
      });
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      events,
    },
  };
};

export default HomePage;
