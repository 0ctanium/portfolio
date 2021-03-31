import React, { HTMLAttributes } from 'react';
import { useTranslation } from 'next-i18next';
import { Timeline, TimelineEvent } from '@src/types';
import { IconType } from 'react-icons';
import { AiOutlineTrophy, AiTwotoneExperiment } from 'react-icons/ai';
import { MdSchool } from 'react-icons/md';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BackgroundProps {
  timeline: Timeline;
}

const filterIcon = {
  studies: MdSchool,
  pro: AiTwotoneExperiment,
  events: AiOutlineTrophy,
};

const Background: React.FC<BackgroundProps> = ({ timeline }) => {
  const { t } = useTranslation('home');
  // const [filters, setFilter] = useState<TimelineEventType[]>([]);

  return (
    <section id="background" className="mb-24">
      <h2 className="text-gray-800 mb-16 text-center">
        {t('background.title')}
      </h2>
      <div className="relative text-center container mx-auto">
        {/* Filter */}
        <div className="flex justify-end" style={{ width: '45%' }}>
          <FilterChip
            label={t('background.filters.studies')}
            icon={filterIcon.studies}
          />
          <FilterChip
            label={t('background.filters.pro')}
            icon={filterIcon.pro}
          />
          <FilterChip
            label={t('background.filters.events')}
            icon={filterIcon.events}
          />
        </div>
        <div
          id="timeline"
          className="overflow-y-scroll hide-scrollbar flex flex-col py-12"
          style={{ height: 500 }}>
          <div>
            {/* scroll top button */}
            <button className="absolute-x-center z-20 paper shadow-lg rounded-full top-0 flex items-center justify-center">
              <HiChevronUp className="w-8 h-8 text-gray-800" />
            </button>
            {/* bar */}
            <div className="absolute-x-center border-8 h-full border-gray-600 rounded-full top-0" />
            {/* progress */}
            <div
              className="absolute-x-center border-4 border-blue-500 rounded-full z-10 top-0"
              style={{ height: 300 }}
            />
            <button className="absolute-x-center z-20 paper shadow-lg rounded-full bottom-0 flex items-center justify-center">
              <HiChevronDown className="w-8 h-8 text-gray-800" />
            </button>
          </div>
          {/* Events */}
          {timeline.map((event, i) => (
            <TimelineEventCard event={event} reverse={i % 2 === 0} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineEventCardProps {
  event: TimelineEvent;
  reverse?: boolean | number;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({
  event: { content, date, type, meta },
  reverse,
}) => {
  const { locale } = useRouter();
  const Icon = filterIcon[type];
  date = new Date(date);

  return (
    <div
      className={clsx(
        'mb-8 flex justify-between items-center text-left',
        reverse && 'flex-row-reverse'
      )}>
      <div className="order-1 w-5/12" />

      <div className="z-0 flex items-center order-1 bg-gray-600 shadow-xl w-6 h-6 rounded-full" />

      <div className="order-1 w-5/12">
        <span className="capitalize">
          {date.toLocaleString(locale, { month: 'long', year: 'numeric' })}
        </span>
        <div className="paper rounded-md p-4">
          <div
            className={clsx(
              'flex items-center text-blue-800 mb-4',
              reverse && 'flex-row-reverse'
            )}>
            <h6 className="flex-grow text font-semibold text-lg order-1">
              {meta?.title}
            </h6>
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

interface FilterChipProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: IconType;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  return (
    <button
      className="paper rounded-full mr-4 last:mr-0 flex items-center text-gray-800 font-semibold text-base px-4 py-1"
      {...props}>
      {label} <Icon className="ml-4 h-5 w-5" />
    </button>
  );
};

export default Background;
