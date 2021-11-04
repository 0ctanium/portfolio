import React from 'react';
import Image from 'next/image'
import { useTranslation } from 'next-i18next';
import { HiOutlineCode, HiOutlineDesktopComputer } from 'react-icons/hi';
import clsx from 'clsx';
import { FaHandRock, FaRegLightbulb } from 'react-icons/fa';
import { AiOutlineHourglass } from 'react-icons/ai';

const Skills: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <section
      id="skills"
      className="px-10 lg:px-0 mx-auto lg:max-w-screen-md mb-24">
      <h2 className="text-gray-800 dark:text-gray-200 mb-16 text-center">
        {t('skills.title')}
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 gap-x-9">
        <div className="mb-6 lg:mb-0">
          <div className="flex flex-row justify-center items-center mb-8">
            <HiOutlineDesktopComputer className="w-8 h-8 text-blue-800 dark:text-blue-500 stroke-1 mr-3" />
            <h5 className="text-gray-800 dark:text-gray-200">
              {t('skills.front')}
            </h5>
          </div>

          <SkillBar
            url="/static/js.svg"
            label="Javascript / Typescript"
            color="#F7DF1E"
            percent={90}
          />
          <SkillBar
            url="/static/react.svg"
            label="React"
            color="#61DAFB"
            percent={85}
          />
          <SkillBar
            url="/static/nextjs.svg"
            label="Next.js"
            color="#000000"
            percent={65}
          />
          <div className="grid grid-cols-2 mb-2">
            <SkillBar
              url="/static/html.svg"
              label="HTML"
              color="#FA502E"
              percent={95}
              small
            />
            <SkillBar
              url="/static/css.svg"
              label="CSS"
              color="#2965F1"
              percent={90}
              revertTooltip
              reverse
              small
            />
          </div>
          <div className="grid grid-cols-3">
            <CircleSkill
              url="/static/tailwind.svg"
              label="TailwindCSS"
              color="#06B6D4"
              percent={65}
            />
            <CircleSkill
              url="/static/material.svg"
              label="Material-UI"
              color="#0081CB"
              percent={80}
            />
            <CircleSkill
              url="/static/redux.svg"
              label="Redux"
              color="#764ABC"
              percent={90}
            />
          </div>
        </div>

        <div className="mb-6 lg:mb-0">
          <div className="flex flex-row justify-center items-center mb-8">
            <HiOutlineCode className="w-8 h-8 text-blue-800 dark:text-blue-500 stroke-1 mr-3" />
            <h5 className="text-gray-800 dark:text-gray-200">
              {t('skills.back')}
            </h5>
          </div>

          <SkillBar
            url="/static/graphql.svg"
            label="GraphQL"
            color="#E535AB"
            percent={70}
            reverse
          />
          <SkillBar
            url="/static/mongo.svg"
            label="MongoDB"
            color="#10AA50"
            percent={65}
            reverse
          />
          <SkillBar
            url="/static/firebase.svg"
            label="Firebase"
            color="#FFA000"
            percent={60}
            reverse
          />

          <div className="grid grid-cols-2 mb-2">
            <SkillBar
              url="/static/node.svg"
              label="Node.js"
              color="#539E43"
              percent={80}
              small
            />
            <SkillBar
              url="/static/express.svg"
              label="Express"
              color="#000000"
              percent={70}
              reverse
              small
            />
          </div>

          <div className="grid grid-cols-3">
            <CircleSkill
              url="/static/php.svg"
              label="PHP"
              color="#777BB3"
              percent={90}
            />
            <CircleSkill
              url="/static/symfony.svg"
              label="Symfony"
              color="#000000"
              percent={80}
            />
            <CircleSkill
              url="/static/postgre.svg"
              label="PostgreSQL"
              color="#336791"
              percent={40}
            />
          </div>
        </div>

        <div className="col-span-2 mb-6 lg:mb-0">
          <h5 className="text-gray-800 dark:text-gray-200 mb-8">
            {t('skills.other')}
          </h5>
          <div className="flex justify-between items-center flex-wrap">
            <CircleSkill
              url="/static/linux.svg"
              label="Linux/GNU"
              color="#FFC107"
              percent={75}
            />
            <CircleSkill
              url="/static/xd.svg"
              label="Adobe XD"
              color="#FF61F6"
              percent={25}
            />
            <CircleSkill
              url="/static/indesign.svg"
              label="Indesign"
              color="#FF3366"
              percent={20}
            />
            <CircleSkill
              url="/static/illustrator.svg"
              label="Illustrator"
              color="#FF9A00"
              percent={12}
            />
            <CircleSkill
              url="/static/photoshop.svg"
              label="Photoshop"
              color="#31A8FF"
              percent={17}
            />
            <CircleSkill
              url="/static/after.svg"
              label="After Effects"
              color="#9999FF"
              percent={24}
            />
            <CircleSkill
              url="/static/premiere.svg"
              label="Premiere Pro"
              color="#9999FF"
              percent={20}
            />
          </div>
        </div>
        <div className="mx-auto col-span-2 mb-12 lg:mb-0 text-center">
          <h5 className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            {t('skills.soft.title')}
          </h5>
          <ul className="font-semibold text-lg text-gray-800 dark:text-gray-200 inline-block">
            <li className="flex items-center mb-3 last:mb-0">
              <AiOutlineHourglass className="w-6 h-6 text-blue-800 dark:text-blue-500 stroke-2 mr-3" />{' '}
              {t('skills.soft.skills.patient')}
            </li>
            <li className="flex items-center mb-3 last:mb-0">
              <FaHandRock className="w-6 h-6 text-blue-800 dark:text-blue-500 mr-3" />{' '}
              {t('skills.soft.skills.invested')}
            </li>
            <li className="flex items-center mb-3 last:mb-0">
              <FaRegLightbulb className="w-6 h-6 text-blue-800 dark:text-blue-500 mr-3" />{' '}
              {t('skills.soft.skills.curious')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

interface Skill {
  url: string;
  label: string;
  color: string;
  /** Range: 0 < 100 */
  percent: number;
}

const CircleSkill: React.FC<Skill> = ({ url, label, color, percent }) => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center mb-6">
      <div className="block relative h-16 w-16">
        <div className="progress-wrapper absolute" style={{ color: color }}>
          <div className="progress-left">
            <div
              className="circle"
              style={{
                // @ts-ignore
                '--tw-rotate': `max(0deg, ${360 * (percent / 100) - 180}deg)`,
              }}
            />
          </div>
          <div className="progress-right">
            <div
              className="circle"
              style={{
                // @ts-ignore
                '--tw-rotate': `min(180deg, ${360 * (percent / 100)}deg)`,
              }}
            />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center border-6 border-gray-800 dark:border-gray-600 rounded-full relative mb-2">
          <picture>
            <Image
              src={url}
              alt={label}
              className="w-8 h-8"
              height="32"
              width="32"
            />
          </picture>
        </div>
      </div>
      <span className="mx-3 mt-1 font-medium text-lg font-display text-gray-800 dark:text-gray-200">
        {label}
      </span>
    </div>
  );
};

interface SkillBarProps extends Skill {
  reverse?: boolean;
  revertTooltip?: boolean;
  small?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  url,
  label,
  color,
  percent,
  reverse,
  revertTooltip,
  small,
}) => {
  return (
    <div className={clsx('flex mb-8', reverse && 'flex-row-reverse')}>
      {/* circle */}
      <div
        className={clsx(
          'rounded-full flex items-center justify-center bg-transparent z-10',
          small ? 'w-16 h-16 border-6' : 'w-20 h-20 border-8'
        )}
        style={{ borderColor: color }}>
        <picture>
          <Image
            src={url}
            alt={label}
            className={clsx(small ? 'w-8 h-8' : 'w-10 h-10')}
            width={small ? '32' : '40'}
            height={small ? '32' : '40'}
          />
        </picture>
      </div>
      <div className={clsx('flex-grow relative')}>
        <span
          className={clsx(
            'mx-3 font-bold text-xl font-display absolute top-1/2 transform text-gray-800 dark:text-gray-200',
            reverse && 'right-0'
          )}
          style={{
            // @ts-ignore
            '--tw-translate-y': 'calc(-100% - 0.5rem)',
          }}>
          {label}
        </span>
        {/* bar */}
        <div
          className={clsx(
            'bg-gray-800 dark:bg-gray-600 absolute-y-center',
            reverse ? '-right-1 ' : '-left-1',
            small ? 'h-1.5 rounded-none' : 'h-2 rounded-full'
          )}
          style={{ width: 'calc(100% + 0.25rem)' }}>
          <div
            className={clsx(
              'h-full',
              reverse ? 'rounded-l-full float-right' : 'rounded-r-full'
            )}
            style={{ backgroundColor: color, width: percent + '%' }}
          />
        </div>
        <div
          className="absolute transform bg-gray-800 dark:bg-gray-600 rounded py-px px-1.5"
          style={{
            left: !reverse && percent + '%',
            right: reverse && percent + '%',
            top: !revertTooltip && 'calc(50% + 1rem)',
            bottom: revertTooltip && 'calc(50% + 1rem)',
            // @ts-ignore
            '--tw-translate-x': reverse ? '50%' : '-50%',
          }}>
          <svg
            className={clsx(
              'absolute z-0 w-6 h-6 transform text-gray-800 dark:text-gray-600 fill-current stroke-current',
              revertTooltip
                ? 'bottom-0 translate-y-1/2 -scale-y-100'
                : 'top-0 -translate-y-1/2'
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 16">
            <path d="M16 0l16 16H0z" />
          </svg>
          <span className="font-medium z-10 text-gray-200 dark:text-gray-300 text-sm">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
