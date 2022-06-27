import { motion, Transition } from 'framer-motion';
import _ from 'lodash';

type basicTransitionProps = {
  delay: number;
};

const basicTransition = ({ delay }: basicTransitionProps): Transition => ({
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
  velocity: 0,
  delay: delay || 0,
});

type basicAnimationProps = {
  delay?: number;
  opacity?: number;
  duration?: number;
};
const basicAnimation = ({
  delay = 0,
  opacity = 1,
  duration,
}: basicAnimationProps) => ({
  initial: {
    y: -10,
    opacity: 0,
    scale: 1,
  },
  animate: {
    y: 0,
    opacity: opacity,
    scale: 1,
  },
  // exit: _.merge(
  //   {
  //     y: 10,
  //     opacity: 0,
  //     scale: 1,
  //   },
  //   fastExit && {
  //     transition: {
  //       duration: 0.5,
  //     },
  //   }
  // ),
  exit: {
    y: 10,
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: delay / 2,
    },
  },
  transition: duration
    ? { delay: delay, duration: duration }
    : basicTransition({ delay }),
});

// type glareAnimationProps = {
//   delay: number;
//   finalOpacity: number;
//   // finalScale: number;
//   duration: number;
// };

// const glareAnimation = ({
//   delay,
//   finalOpacity,
//   // finalScale,
//   duration,
// }: glareAnimationProps) => ({
//   initial: {
//     y: -10,
//     opacity: 0,
//     scale: 1,
//   },
//   animate: {
//     y: 0,
//     opacity: finalOpacity,
//     scale: 1,
//   },
//   exit: {
//     y: 10,
//     opacity: 0,
//     scale: 1,
//   },
//   transition: {
//     delay: delay,
//     duration: duration,
//   },
// });

export { basicTransition, basicAnimation };
