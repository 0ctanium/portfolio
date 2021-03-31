import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Works: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section id="work" className="mb-24 text-center">
      <h2 className="text-gray-800 mb-16">{t('works.title')}</h2>
      <div className="mx-auto inline-grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Work label="Isimmo" url="/static/work/isimmo.jpg" />
        <Work label="Isimmo" url="/static/work/isimmo.jpg" />
        <Work label="Isimmo" url="/static/work/isimmo.jpg" />
        <Work label="Isimmo" url="/static/work/isimmo.jpg" />
      </div>
    </section>
  );
};

interface WorkProps {
  label: string;
  link?: string;
  url: string;
}

const Work: React.FC<WorkProps> = ({ url, label }) => {
  return (
    <div
      className="rounded-md border border-gray-200 overflow-hidden"
      style={{ width: 300, height: 185 }}>
      <picture>
        <Image src={url} alt={label} width={300} height={185} />
      </picture>
    </div>
  );
};

export default Works;
