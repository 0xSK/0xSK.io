import { css } from '@emotion/react';
import GridRule, { GridRuleProps } from './gridrule';
import { motion } from 'framer-motion';
import { basicAnimation } from './animation';

type SectionProps = {
  // heading?: string,
  // headingLevel?: number,
  // headingClassName?: string,
  children?: React.ReactNode;
  className?: string;
  id?: string;
  gridRule?: boolean;
  gridRuleProps?: GridRuleProps;
  mobileFullWidth?: boolean;
  animate?: boolean;
  delay?: number;
};

const Section = ({
  // heading,
  // headingLevel = 2,
  // headingClassName,
  children,
  className,
  id,
  gridRule = false,
  gridRuleProps,
  mobileFullWidth = false,
  animate = false,
  delay = 0,
}: SectionProps): JSX.Element => {
  // const HeadingTag: string = `h${headingLevel}`;
  const contents = (
    <div
      className={`relative flex flex-col justify-center overflow-hidden bg-transparent pt-16 lg:pt-32 last:pb-16 lg:last:pb-32 lg:text-lg  ${className}`}
      id={id}
    >
      <div
        className={`relative w-full ${
          mobileFullWidth ? 'px-0 sm:px-6' : 'px-6'
        } py-0 lg:py-0 sm:mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-6xl `}
      >
        {children}
      </div>
      {gridRule && <GridRule {...gridRuleProps} />}
    </div>
  );
  return animate ? (
    <motion.div {...basicAnimation({ delay: delay })}>{contents}</motion.div>
  ) : (
    contents
  );
};

export default Section;
