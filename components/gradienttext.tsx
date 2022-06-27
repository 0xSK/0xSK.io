import { FC } from 'react';
import { css } from '@emotion/react';

type GradientTextProps = {
  colors: string[];
  hoverColors: string[];
  angle?: number;
  time?: number;
  initialAnimation?: boolean;
  children: string | string[] | JSX.Element | JSX.Element[];
};

const GradientText = ({
  colors = [],
  hoverColors,
  angle = 130,
  time = 3,
  initialAnimation = false,
  children,
}: GradientTextProps): JSX.Element => {
  if (hoverColors && hoverColors.length > 0) {
    // hoverable gradient
    var gradientStyle = css`
      @keyframes move-gradient {
        0% {
          background-position: top left;
        }
        25% {
          background-position: top right;
        }
        50% {
          background-position: bottom right;
        }
        75% {
          background-position: buttom left;
        }
        100% {
          background-position: top left;
        }
      }

      background-image: linear-gradient(
        ${angle}deg,
        ${colors.join(', ')},
        ${hoverColors.join(', ')}
      );
      background-clip: text;
      color: transparent;
      background-position: top left;
      background-size: 200% 200%;
      ${initialAnimation
        ? `animation: move-gradient ${time}s ease-in-out;`
        : ''}
      &:hover {
        animation: move-gradient ${time}s ease-in-out infinite alternate;
        animation-direction: reverse;
      }
    `;
  } else {
    // static gradient
    var gradientStyle = css`
      background-image: linear-gradient(${angle}deg, ${colors.join(', ')};
      background-clip: text;
      color: transparent;
    `;
  }

  return <span css={gradientStyle}>{children}</span>;
};

export default GradientText;
