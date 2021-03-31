import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  HiBookOpen,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiServer,
} from 'react-icons/hi';
import { FaPaintBrush } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Tasks: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section id="work" className="mb-24">
      <div className="shadow bg-white border border-gray-200 max-w-2xl w-full mx-auto rounded overflow-hidden text-center">
        <h3 className="py-4 border-b border-gray-200 text-gray-800">
          {t('work.title')}
        </h3>
        <div className="grid grid-cols-2">
          <Skill
            icon={HiOutlineDesktopComputer}
            title={t('work.content.front.title')}
            sections={[
              {
                key: 'tasks',
                label: t('work.content.front.tasks.label'),
                content: t('work.content.front.tasks.text', {
                  returnObjects: true,
                }),
              },
            ]}
          />
          <Skill
            icon={HiOutlineCode}
            title={t('work.content.back.title')}
            sections={[
              {
                key: 'tasks',
                label: t('work.content.back.tasks.label'),
                content: t('work.content.back.tasks.text', {
                  returnObjects: true,
                }),
              },
            ]}
          />
          <div className="col-span-2 py-8 px-4">
            <h5 className="text-blue-800 mb-4">
              {t('work.content.tools.title')}
            </h5>
            <ul className="font-normal font-sans">
              {(t('work.content.tools.text', {
                returnObjects: true,
              }) as string[][]).map((text, i) => (
                <li key={i}>{text.join(' · ')}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 py-8 px-4">
            <h5 className="text-blue-800 mb-6">
              {t('work.content.other.title')}
            </h5>
            <ul className="font-semibold font-sans inline-block">
              <OtherWorksListItem
                icon={FaPaintBrush}
                label={t('work.content.other.tasks.design')}
              />
              <OtherWorksListItem
                icon={HiServer}
                label={t('work.content.other.tasks.sysadmin')}
              />
              <OtherWorksListItem
                icon={HiBookOpen}
                label={t('work.content.other.tasks.teach')}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillProps {
  icon: IconType;
  title: string;
  sections: {
    key: string;
    label: string;
    content: string[];
  }[];
}

const Skill: React.FC<SkillProps> = ({ icon: Icon, title, sections }) => {
  return (
    <div className="py-8 px-4">
      <Icon className="w-16 h-16 text-blue-800 stroke-1 mx-auto" />
      <h5 className="text-gray-800 mb-8">{title}</h5>
      {sections.map(({ label, content, key }) => (
        <div key={key}>
          <p className="text-blue-800 font-semibold font-sans mb-3">{label}</p>
          <ul className="font-light font-sans">
            {content.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

interface OtherWorksListItemProps {
  icon: IconType;
  label: string;
}

const OtherWorksListItem: React.FC<OtherWorksListItemProps> = ({
  icon: Icon,
  label,
}) => (
  <li className="flex items-center mb-6 last:mb-0">
    <Icon className="w-6 h-6 mr-4 text-blue-800" /> {label}
  </li>
);

export default Tasks;
