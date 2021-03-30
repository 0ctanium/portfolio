import React from 'react';
import { useTranslation } from 'next-i18next';
import { HiOutlineCode, HiOutlineDesktopComputer } from 'react-icons/hi';

const Work: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section id="work">
      <div className="shadow bg-white border border-gray-200 max-w-xl w-full mx-auto rounded overflow-hidden">
        <h3 className="py-4 border-b border-gray-200 text-gray-800 text-center">
          {t('work.title')}
        </h3>
        <div className="grid grid-cols-2">
          <div>
            <HiOutlineDesktopComputer className="w-16 h-16 text-blue-800 stroke-1" />
            <h5 className="text-gray-800">{t('work.content.front.title')}</h5>
          </div>
          <div>
            <HiOutlineCode className="w-16 h-16 text-blue-800 stroke-1" />
            <h5 className="text-gray-800">{t('work.content.back.title')}</h5>
          </div>
          <div className="col-span-2">
            <h5 className="text-blue-800">{t('work.content.tools.title')}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
