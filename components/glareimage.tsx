import { FC } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { basicAnimation } from '../components/animation';

const getTranslateClass = (direction: string, offset: string) => {
  // if negative offset or not
  const offsetSign = offset.startsWith('-') ? '-' : '';
  const offsetValue = offset.startsWith('-') ? offset.substring(1) : offset;
  const className = `${offsetSign}translate-${direction}-[${offsetValue}]`;
  return className;
};

type GlareImageProps = {
  dynamic?: boolean;
  hueOffset?: number;
  hueChange?: number;
  hueTime?: number;
  opacityRange?: number[];
  opacityStatic?: number;
  opacityTime?: number;
  imageNumber?: number;
  xOffset?: string;
  yOffset?: string;
  scale?: number;
  className?: string;
};

const GlareImage: FC<GlareImageProps> = ({
  dynamic = false,
  hueOffset = 0,
  hueChange = 10,
  hueTime = 10,
  opacityRange = [0.5, 1],
  opacityStatic = 0.75,
  opacityTime = 3,
  imageNumber = 0,
  xOffset = '-50%',
  yOffset = '-20%',
  scale = 1,
  className = '',
}) => {
  return (
    // <div
    //   className={`absolute -z-10 top-0 left-1/2 mix-blend-lighten overflow-hidden w-[1000px] h-[1000px] bg-cover max-w-full max-h-full
    //   ${className}`}
    //   css={[
    //     BaseStyle,
    //     dynamic ? AnimationStyle : '',
    //     css`
    //       transform: translate(${xOffset}, ${yOffset}) scale(${scale});
    //       background-image: url(/images/glare/${imageNumber}.png);
    //     `,
    //   ]}
    // />
    <motion.div
      // {...glareAnimation({
      //   delay: 0,
      //   finalOpacity: opacityStatic,
      //   duration: opacityTime,
      // })}
      {...basicAnimation({ opacity: opacityStatic, duration: opacityTime })}
      className={`absolute inset-0 overflow-hidden mix-blend-lighten min-h-screen ${className}`}
      css={css`
        background-image: url(/images/glare/${imageNumber}.png);
        background-repeat: no-repeat;
        background-size: ${scale * 1000}px ${scale * 1000}px;
        background-position: ${xOffset} ${yOffset};
        filter: hue-rotate(${hueOffset}deg);
        // opacity: ${opacityStatic};
        // @keyframes fadeIn {
        //   0% {
        //     opacity: 0;
        //   }
        //   100% {
        //     opacity: ${opacityStatic};
        //   }
        // }
        // animation: fadeIn ${opacityTime}s ease-in-out;
      `}
    />
  );
};

export default GlareImage;
