import Link from 'next/link';
import Script from 'next/script';
import Tilt, { ReactParallaxTiltProps } from 'react-parallax-tilt';
import _ from 'lodash';
import { basicAnimation } from './animation';
import { motion } from 'framer-motion';
import Image from './image';

const defaultCardTiltProps: ReactParallaxTiltProps = {
  scale: 1.1,
  transitionSpeed: 2000,
  tiltMaxAngleX: 7,
  tiltMaxAngleY: 7,
  perspective: 500,
  glareEnable: true,
  glareMaxOpacity: 0.35,
};

type CardProps = {
  title?: string;
  desc?: string;
  image: string;
  link: string;
  umamiEvent?: string;
  tiltProps?: ReactParallaxTiltProps;
  delay?: number;
};

const Card = ({
  title,
  desc,
  image,
  link,
  umamiEvent,
  tiltProps,
  delay = 0,
}: CardProps): JSX.Element => {
  const tiltData = _.merge(defaultCardTiltProps, tiltProps);
  return (
    <>
      <motion.div {...basicAnimation({ delay: delay })} className="z-10">
        <Tilt
          {...tiltData}
          className={`${umamiEvent && `umami--click--${umamiEvent}`}`}
        >
          <Link href={link} passHref scroll={false}>
            <a>
              <div className="">
                <div className="h-auto w-full">
                  <Image
                    src={image}
                    alt={title}
                    width={600}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div>
                  {title && <h5>{title}</h5>}
                  {desc && <p>{desc}</p>}
                </div>
              </div>
            </a>
          </Link>
        </Tilt>
      </motion.div>
      {/* </div> */}
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`tilt loaded`);
        }}
      /> */}
    </>
  );
};

export default Card;
