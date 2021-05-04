import React, { HTMLAttributes } from 'react';
import { useTranslation } from 'next-i18next';
import {
  HiBookOpen,
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiServer,
} from 'react-icons/hi';
import { FaPaintBrush } from 'react-icons/fa';
import { IconType } from 'react-icons';
import clsx from 'clsx';

const Tasks: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section id="task" className="mb-24">
      <div className="paper shadow-lg sm:shadow w-full max-w-2xl mx-auto rounded overflow-hidden text-center">
        <h3 className="py-4 border-b border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200">
          {t('work.title')}
        </h3>
        <div className="sm:grid sm:grid-cols-2">
          <Skill
            className="border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-800"
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
          <div className="col-span-2 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
            <h5 className="text-blue-800 dark:text-blue-500 mb-4">
              {t('work.content.tools.title')}
            </h5>
            <ul className="text-gray-800 dark:text-gray-200 font-normal font-sans">
              {(t('work.content.tools.text', {
                returnObjects: true,
              }) as string[][]).map((text, i) => (
                <li key={i}>{text.join(' · ')}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
            <h5 className="text-blue-800 dark:text-blue-500 mb-6">
              {t('work.content.other.title')}
            </h5>
            <ul className="text-gray-800 dark:text-gray-200 font-semibold font-sans inline-block">
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

interface SkillProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  title: string;
  sections: {
    key: string;
    label: string;
    content: string[];
  }[];
}

const Skill: React.FC<SkillProps> = ({
  icon: Icon,
  title,
  sections,
  ...props
}) => {
  return (
    <div {...props} className={clsx('py-8 px-4', props.className)}>
      <Icon className="w-16 h-16 text-blue-800 dark:text-blue-500 stroke-1 mx-auto" />
      <h5 className="text-gray-800 dark:text-gray-200 mb-8">{title}</h5>
      {sections.map(({ label, content, key }) => (
        <div key={key}>
          <p className="text-blue-800 dark:text-blue-500 font-semibold font-sans mb-3">
            {label}
          </p>
          <ul className="text-gray-800 dark:text-gray-200 font-light font-sans">
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
    <Icon className="w-6 h-6 mr-4 text-blue-800 dark:text-blue-500" /> {label}
  </li>
);

export default Tasks;
