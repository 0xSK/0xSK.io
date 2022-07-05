import styles from '../styles/hex.module.scss';
import { css } from '@emotion/react';
// import colors from 'tailwindcss/colors';
import { motion } from 'framer-motion';
import { basicTransition } from './animation';

// const ringWidth = 7;
const edgeLength = 100;

type LineSegmentProps = {
  rotation?: number;
  colors: string[];
  thickness: number;
};

const LineSegment = ({
  rotation,
  colors,
  thickness,
}: LineSegmentProps): JSX.Element => (
  <div
    className="absolute w-full h-full"
    css={css`
      transform: rotate(${rotation}deg);
    `}
  >
    <div className="relative w-full h-full">
      <motion.div
        initial={{
          height: thickness,
        }}
        animate={{
          height: thickness,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        css={css`
          top: 0px;
          width: 100%;
          background: linear-gradient(
            to right,
            ${colors[0]} 10%,
            ${colors[1]} 50%,
            ${colors[0]} 90%
          );
        `}
      />
    </div>
  </div>
);

type HexProps = {
  // color: string;
  angle: number;
  colors: string[];
  thickness: number;
  scale: number;
  className?: string;
};

const Hex = ({
  angle,
  colors,
  thickness,
  scale,
  className,
}: HexProps): JSX.Element => (
  <div className={`
    absolute top-0 md:-right-16
    scale-[0.7] lg:scale-[0.9] 
    brightness-[0.9] 
    -translate-x-14 md:-translate-x-2 lg:-translate-x-5
    translate-y-3 md:-translate-y-7 lg:-translate-y-5
    ${className}`}>
    <motion.div
      initial={{ rotate: angle, scale: scale }}
      animate={{
        rotate: angle,
        scale: scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <div
        className="hex"
        css={css`
          position: relative;
          width: ${edgeLength * 2}px;
          height: ${edgeLength * Math.sqrt(3)}px;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 0;
            left: ${edgeLength / 2}px;
            width: ${edgeLength}px;
            height: 100%;
          `}
        >
          {Array.from(Array(6).keys()).map((i) => (
            <LineSegment
              key={i}
              rotation={i * 60}
              colors={colors}
              thickness={thickness}
            />
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

// type HexProps = {
//   className?: string;
//   id?: string;
//   angle: number;
//   colors: string[];
//   thickness?: number;
// };

// const Hex = ({
//   className,
//   id,
//   angle,
//   colors,
//   thickness = 8,
// }: HexProps): JSX.Element => {
//   return (
//     <>
//       {/* <div className={`${styles['hex-container']} ${className}`} id={id}>
//         <div className={styles.hex}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//         <div className={styles.hex}>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div> */}
//       <Ring angle={angle} colors={colors} thickness={thickness} />
//     </>
//   );
// };

export default Hex;
