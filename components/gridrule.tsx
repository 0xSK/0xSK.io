import { FC } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { basicAnimation } from './animation';

type GridRuleProps = {
  opacity?: number;
  gradientAngle?: number;
  gradientStops?: string[];
  className?: string;
  delay?: number;
};

const GridRule: FC<GridRuleProps> = ({
  opacity = 0.7,
  gradientAngle = 160,
  gradientStops = ['50vh', '100vh'],
  delay = 0,
}: GridRuleProps) => {
  const gridRuleStyle = css`
    mask-image: linear-gradient(
      ${gradientAngle}deg,
      rgba(0, 0, 0, 0) ${gradientStops[0]},
      rgba(255, 255, 255, ${opacity}) ${gradientStops[1]}
    );
  `;
  return (
    <div
      // {...basicAnimation({ delay: delay })}
      className="absolute inset-0 bg-[url(/images/grid/0.svg)] bg-top h-full min-h-1vh -z-90 opacity-50"
      css={gridRuleStyle}
    />
  );
};

export default GridRule;
export type { GridRuleProps };
