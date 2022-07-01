import Link from 'next/link';
import Script from 'next/script';
import DateString from './datestring';
import _ from 'lodash';
import Tilt from 'react-parallax-tilt';
import type { ReactParallaxTiltProps } from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { basicAnimation } from '../components/animation';

// type tiltProps = {
//   glare?: boolean;
//   maxGlare?: number;
//   perspective?: number;
//   speed?: number;
//   scale?: number;
//   max?: number;
// };

const defaultPostListTiltProps: ReactParallaxTiltProps = {
  scale: 1.15,
  transitionSpeed: 2000,
  tiltMaxAngleX: 5,
  tiltMaxAngleY: 2,
  perspective: 500,
  glareEnable: true,
  glareMaxOpacity: 0.9,
  glarePosition: 'all',
};

type Post = {
  title: string;
  date: string;
  link: string;
  slug: string;
};

type PostListProps = {
  posts: Post[];
  // baseDir: string;
  tiltProps?: ReactParallaxTiltProps;
  umamiEventPrefix?: string;
  baseDelay?: number;
  childrenDelay?: number;
};

const PostList = ({
  posts,
  // baseDir,
  tiltProps,
  umamiEventPrefix,
  baseDelay = 0,
  childrenDelay = 0.05,
}: PostListProps): JSX.Element => {
  const tiltData = _.merge(defaultPostListTiltProps, tiltProps);
  return (
    <>
      {posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map(({ title, date, link, slug }, i) => {
          return (
            <motion.div
              {...basicAnimation({ delay: baseDelay + i * childrenDelay })}
              key={i}
            >
              <Tilt
                {...tiltData}
                className={`py-2 ${
                  umamiEventPrefix && `umami--click--${umamiEventPrefix}${slug}`
                }`}
              >
                <Link
                  href={`${link}`}
                  passHref
                  scroll={false}
                  key={i}
                >
                  <a>
                    <table className="w-full">
                      <colgroup>
                        <col width="100%" />
                        <col width="0%" />
                      </colgroup>
                      <tbody>
                        <tr className="">
                          <td className="text-left whitespace-nowrap text-ellipsis overflow-hidden max-w-0 py-1 text-lg font-semibold">
                            {title}
                          </td>
                          {date && (
                            <td className="text-right whitespace-nowrap">
                              <DateString date={date} className="font-thin text-sm" />
                            </td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </a>
                </Link>
              </Tilt>
            </motion.div>
          );
        })}
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`tilt loaded`);
          // $('.tilt-card').tilt({
          //     glare: true,
          //     maxGlare: .5
          // })
        }}
      /> */}
    </>
  );
};

export default PostList;
