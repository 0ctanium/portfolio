import React from 'react';
import { useTranslation } from 'next-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section id="work" className="mb-24">
      <h2 className="text-gray-800 mb-16 text-center">
        {t('testimonials.title')}
      </h2>
      <div className="mx-auto w-full max-w-xl flex flex-col justify-center items-center">
        <picture>
          <img
            src="/static/testimonials/avatar.png"
            alt="avatar"
            className="rounded-full w-24 h-24 mb-4"
            width="96"
            height="96"
          />
        </picture>
        <p className="font-bold text-lg mb-2">Pierre</p>
        <span className="font-light text-base mb-8">Entreoruse Co.</span>
        <p className="quote font-normal text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
