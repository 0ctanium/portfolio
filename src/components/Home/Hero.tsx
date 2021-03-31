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
      className="relative max-w-screen min-h-screen bg-gray-200">
      <div className="mx-auto container px-20">
        <div className="text-center md:text-left mx-auto w-full max-w-screen-xl h-screen relative">
          <div className="w-full absolute top-1/2 transform left-1/2 -translate-y-1/2 -translate-x-1/2 md:left-0  md:translate-x-0 md:-translate-y-full">
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
            <p className="text-xl font-light font-sans text-gray-600">
              {t('hero.desc')}
            </p>
          </div>
        </div>
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
