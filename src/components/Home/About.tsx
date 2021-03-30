import React from 'react';
import { useTranslation } from 'next-i18next';

const About: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section
      id="about"
      className="bg-gradient-to-tr from-indigo-500 to-blue-700 pt-20 pb-32 -mb-24 text-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6">{t('about.title')}</h2>
        <p className="text-lg">{t('about.text')}</p>
      </div>
    </section>
  );
};

export default About;
