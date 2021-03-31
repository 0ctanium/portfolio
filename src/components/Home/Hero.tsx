import React, { useCallback } from 'react';
import { Trans, useTranslation } from 'next-i18next';
import OverlayScrollbarsModule from 'overlayscrollbars';
import { HiArrowDown } from 'react-icons/hi';

const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  const scrollDown = useCallback(() => {
    const instance = OverlayScrollbarsModule(document.body);

    instance.scrollStop().scroll(
      {
        el: document.getElementById('about'),
      },
      500
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative max-w-screen min-h-screen py-32 bg-gray-300">
      <div className="container mx-auto">
        <h1 className="text-gray-800 mb-4">
          <Trans
            ns="home"
            i18nKey="hero.hi"
            tOptions={{
              joinArrays: '<br />',
            }}
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
        <p className="text-xl font-light font-sans text-gray-500">
          {t('hero.desc')}
        </p>
      </div>
      <button
        onClick={scrollDown}
        className="animate-bounce absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <p className="sr-only">Scroller en bas</p>
        <HiArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
