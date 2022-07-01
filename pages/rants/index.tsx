import navData from '../../components/navdata';
import { NextPage } from 'next';
import GradientText from '../../components/gradienttext';
import Section from '../../components/section';
import Nav from '../../components/nav';
import getDirFrontmatters from '../../components/getdirfrontmatters';
import Card from '../../components/card';
import usePageData from '../../components/usepagedata';
import GlareImage from '../../components/glareimage';
import Breadcrumb from '../../components/breadcrumb';
import type { RantFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';
import PostList from '../../components/postlist';

type RantsPageProps = {
  rants: RantFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      rants: getDirFrontmatters('posts/rants'),
    },
  };
}

const RantsPage = ({ rants }: RantsPageProps): JSX.Element => {
  const pageData = navData.rants;
  return (
    <>
      <div className="relative">
        <GlareImage
          imageNumber={0}
          opacityStatic={1}
          scale={1.5}
          hueOffset={60}
          xOffset={'-300px'}
          yOffset={'-500px'}
        />
        <Section>
          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <motion.div
              {...basicAnimation({ delay: 0 })}
              className="col-span-1"
            >
              <Breadcrumb />
            </motion.div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>
        <Section>
          <PostList
            posts={rants}
            baseDir="rants"
            umamiEventPrefix="rants-"
            baseDelay={0.2}
          />
        </Section>
      </div>
    </>
  );
};

export default RantsPage;
