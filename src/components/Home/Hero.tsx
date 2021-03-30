import React from 'react';
import { Trans, useTranslation } from 'next-i18next';
import { HiArrowDown } from 'react-icons/hi';

const Hero: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section
      id="hero"
      className="relative w-screen min-h-screen py-32 bg-gray-300">
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
        <h5 className="text-xl font-light font-body text-gray-500">
          {t('hero.desc')}
        </h5>
      </div>
      <a
        href="#about"
        className="animate-bounce absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <HiArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
