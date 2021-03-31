import React, {
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'next-i18next';
import { Timeline, TimelineEvent, TimelineEventType } from '@src/types';
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
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('home');
  const [scroll, setScroll] = useState<number>();
  const [filters, setFilter] = useState<TimelineEventType[]>([]);

  const onFilter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const tag = event.currentTarget.getAttribute(
        'data-tag'
      ) as TimelineEventType;

      let newFilters = filters.slice();
      if (newFilters.includes(tag)) {
        newFilters = newFilters.filter((filter) => filter !== tag);
      } else {
        newFilters.push(tag);
      }

      setFilter((prevState) => [...new Set(newFilters)]);
    },
    [filters]
  );

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        setScroll(
          ((ref.current.scrollTop + ref.current.offsetHeight) /
            ref.current.scrollHeight) *
            ref.current.offsetHeight
        );
      }
    }
    handleScroll();

    document
      .getElementById('timeline')
      ?.addEventListener('scroll', handleScroll);

    return () => {
      document
        .getElementById('timeline')
        ?.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return (
    <section id="background" className="mb-24">
      <h2 className="text-gray-800 mb-16 text-center">
        {t('background.title')}
      </h2>
      <div className="container px-4 mx-auto">
        <div className="relative">
          {/* Filter */}
          <div className="inline-flex pl-14 justify-start lg:justify-end w-full lg:w-1/2 lg:pl-0 lg:pr-8 flex-wrap self-start">
            <FilterChip
              active={filters.includes('studies')}
              onClick={onFilter}
              data-tag={'studies'}
              label={t('background.filters.studies')}
              icon={filterIcon.studies}
            />
            <FilterChip
              active={filters.includes('pro')}
              onClick={onFilter}
              data-tag={'pro'}
              label={t('background.filters.pro')}
              icon={filterIcon.pro}
            />
            <FilterChip
              active={filters.includes('events')}
              onClick={onFilter}
              data-tag={'events'}
              label={t('background.filters.events')}
              icon={filterIcon.events}
            />
          </div>
          <div
            id="timeline"
            ref={ref}
            className="overflow-y-scroll overflow-x-visible hide-scrollbar flex flex-col my-4 py-4 px-16"
            style={{ height: 500 }}>
            <div className="absolute left-6 inset-y-0 lg:left-1/2 lg:-translate-y-1/2 h-full flex justify-center z-10">
              {/* scroll top button */}
              <button className="absolute z-20 paper paper-btn rounded-full top-0 flex items-center justify-center text-gray-800 hover:text-blue-800">
                <span className="sr-only">Scroller en haut de la timeline</span>
                <HiChevronUp className="w-8 h-8" />
              </button>
              {/* bar */}
              <div className="absolute border-8 h-full border-gray-600 rounded-full top-0" />
              {/* progress */}
              <div
                className="absolute border-4 border-blue-500 rounded-full z-10 top-0"
                style={{
                  height: scroll,
                }}
              />
              <button className="absolute z-20 paper paper-btn rounded-full bottom-0 flex items-center justify-center text-gray-800 hover:text-blue-800">
                <span className="sr-only">Scroller en bas de la timeline</span>
                <HiChevronDown className="w-8 h-8" />
              </button>
            </div>
            {/* Events */}
            {[
              ...timeline,
              {
                key: 'test',
                date: new Date('11/05/2020'),
                type: 'studies',
                meta: {
                  title: 'Lorem Ipsum',
                },
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              } as TimelineEvent,
            ]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .filter(
                (e) =>
                  !filters || filters.length === 0 || filters.includes(e.type)
              )
              .map((event, i) => (
                <TimelineEventCard
                  event={event}
                  reverse={i % 2 === 0}
                  key={i}
                />
              ))}
          </div>
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
        'mb-8 flex justify-between items-center text-left relative',
        reverse && 'lg:flex-row-reverse'
      )}>
      <div className="hidden lg:block order-1 w-5/12" />

      <div className="absolute -left-12.5 lg:relative lg:left-0 lg:transform-none z-0 flex items-center order-1 bg-gray-600 shadow-xl w-6 h-6 rounded-full" />

      <div className="order-1 w-full lg:w-5/12">
        <span className="capitalize">
          {date.toLocaleString(locale, { month: 'long', year: 'numeric' })}
        </span>
        <div className="paper rounded-md p-4">
          <div className="flex flex-row items-center text-blue-800 mb-4">
            <h6 className="flex-grow text font-semibold text-lg">
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
  active?: boolean;
}

const FilterChip: React.FC<FilterChipProps> = ({
  label,
  icon: Icon,
  active,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'paper paper-btn rounded-full mr-4 last:mr-0 flex items-center font-semibold text-base px-4 py-1 mb-4',
        active ? 'text-blue-800' : 'text-gray-800'
      )}
      {...props}>
      {label} <Icon className="ml-4 h-5 w-5" />
    </button>
  );
};

export default Background;
