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
  time = 1.5,
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
        50% {
          background-position: bottom right;
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
      transition: background-position ${time}s ease-in-out;
      ${initialAnimation &&
      `animation-name: move-gradient;
        animation-duration: ${time}s;
        animation-iteration-count: once;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        `}
      &:hover {
        background-position: bottom right;
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
