import Link from 'next/link';
import GradientText from './gradienttext';
import { css } from '@emotion/react';
import { createElement, FC } from 'react';
import { motion } from 'framer-motion';
import { basicAnimation } from './animation';

type SectionHeaderProps = {
  heading: string;
  headingLevel?: number;
  link?: string;
  linkText?: string;
  gradientColors?: string[];
  umamiEvent?: string;
  delay?: number;
};

type HeaderProps = {
  headerNumber: number;
  className?: string;
  children: string | string[] | React.ReactNode;
};
const HeaderTag: FC<HeaderProps> = ({
  headerNumber,
  className = '',
  children,
}: HeaderProps): JSX.Element => {
  const Tag = `h${headerNumber}`;
  return createElement(Tag, { className }, children);
};

const SectionHeader = ({
  heading,
  headingLevel = 2,
  link,
  linkText = 'more',
  gradientColors = [],
  umamiEvent,
  delay = 0,
}: SectionHeaderProps): JSX.Element => {
  // const HeadingTag: string = `h${headingLevel}`;

  let colorsArr = [];
  if (gradientColors && gradientColors.length > 0) {
    for (let i = 0; i < gradientColors.length; i++) {
      colorsArr.push('#ffffff');
    }
  }
  return (
    <>
      <motion.div
        {...basicAnimation({ delay: delay })}
        className="flex flex-row justify-between align-baseline"
      >
        <HeaderTag headerNumber={headingLevel} className="">
          {heading}
        </HeaderTag>
        {link && (
          <span
            className={`font-md font-semibold flex flex-col justify-around 
              ${umamiEvent && `umami--click--${umamiEvent}`}
            `}
          >
            <Link href={link} passHref scroll={false}>
              <a>
                <GradientText
                  colors={colorsArr}
                  hoverColors={gradientColors}
                  time={1.5}
                >
                  <span>
                    <span className="">{linkText}&nbsp;</span>{' '}
                    {/* TODO: baseline shift */}
                    <span className="font-mono">-&gt;</span>
                  </span>
                </GradientText>
              </a>
            </Link>
          </span>
        )}
      </motion.div>
    </>
  );
};

export default SectionHeader;
