// import react component type
import { FC } from 'react';
import { css } from '@emotion/react';
import { transcode } from 'buffer';

type GlareProps = {
  scaleX?: number;
  scaleY?: number;
  colors: string[];
  hueOffset?: number;
  posX?: string;
  posY?: string;
  angle?: number;
  opacity?: number;
  brightness?: number;
};

const Glare = ({
  scaleX = 1,
  scaleY = 1,
  colors,
  hueOffset = 0,
  posX = '50%',
  posY = '100px',
  angle = 45,
  opacity = 0.75,
  brightness = 1,
}: GlareProps) => {
  const glareStyle = css`
    position: absolute;
    overflow: hidden;
    left: ${posX};
    top: ${posY};
    width: 0;
    height: 0;
    opacity: ${opacity};
    mix-blend-mode: lighten;
    border-radius: 50%;
    transform: rotate(${angle}deg) scale(${scaleX}, ${scaleY});
    filter: hue-rotate(${hueOffset}deg) brightness(${brightness});
    box-shadow: ${[
      colors.map((color, index) => {
        return `0 0 ${20 + index * 20}px ${10 + index * 10}px ${color}`;
      }),
    ].join(',')};
  `;
  return <div css={glareStyle} />;
};

export default Glare;
