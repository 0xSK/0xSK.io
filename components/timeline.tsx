import Icon, { icons } from './icon';
import { motion } from 'framer-motion';
import { basicAnimation } from './animation';

type TimelineEntry = {
  icon?: keyof typeof icons | JSX.Element;
  iconClassName?: string;
  title?: string | React.ReactNode;
  badge?: string;
  time?: string | React.ReactNode;
  desc?: string | string[] | React.ReactNode;
  link?: string;
};

type TimelineProps = {
  data: TimelineEntry[];
  className?: string;
  delay?: number;
};

const parseDesc = (
  desc: string | string[] | React.ReactNode
): React.ReactNode => {
  if (typeof desc === 'string') {
    return <p>{desc}</p>;
  } else if (Array.isArray(desc)) {
    return (
      <p>
        {desc.map((d, i) => (
          <span key={i}>
            {d}
            <br />
          </span>
        ))}
      </p>
    );
  } else {
    return desc;
  }
};

const Timeline = ({
  data,
  className,
  delay = 0,
}: TimelineProps): JSX.Element => {
  return (
    <motion.ol
      {...basicAnimation({ delay: delay })}
      className="relative border-l-2 border-gray-600 ml-[17px] mb-24 lg:mb-32 mt-8 max-w-[72ch] last:mb-0"
    >
      {data.map((entry, index) => {
        return (
          <li className="mb-10 ml-10" key={index}>
            <span className="flex absolute -left-[17px] justify-center items-center w-8 h-8 bg-black rounded-full ring-4 ring-gray-600">
              <div className="w-4 h-4">
                {typeof entry.icon === 'string' ? (
                  <Icon name={entry.icon} className={entry.iconClassName} />
                ) : (
                  entry.icon
                )}
              </div>
            </span>
            {entry.title && (
              <p className="flex items-center mb-0 font-semibold">
                {entry.title}
                {entry.badge && (
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {entry.badge}
                  </span>
                )}
              </p>
            )}
            {entry.time && (
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {entry.time}
              </time>
            )}
            {entry.desc && (
              <span className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {parseDesc(entry.desc)}
              </span>
            )}
          </li>
        );
      })}
    </motion.ol>
  );
};

export default Timeline;
export type { TimelineProps, TimelineEntry };
