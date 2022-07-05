/* 
This component is a stupid hack for a stupid bug in next/image.
*/

import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = {} & NextImageProps;

const Image = ({ src, ...props }: ImageProps): JSX.Element => {
  if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('//')) {
    src = '/' + src;
  }
  return <NextImage src={src} {...props} />;
};

export default Image;
