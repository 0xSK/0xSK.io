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
import type { ThoughtFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';
import PostList from '../../components/postlist';

type ThoughtsPageProps = {
  thoughts: ThoughtFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      thoughts: getDirFrontmatters('posts/thoughts'),
    },
  };
}

const ThoughtsPage = ({ thoughts }: ThoughtsPageProps): JSX.Element => {
  const pageData = navData.thoughts;
  return (
    <>
      <div className="relative">
        <GlareImage
          imageNumber={1}
          opacityStatic={1}
          scale={2}
          hueOffset={200}
          xOffset={'calc(50vw - 1000px)'}
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
            posts={thoughts}
            baseDir="thoughts"
            umamiEventPrefix="thoughts-"
            baseDelay={0.2}
          />
        </Section>
      </div>
    </>
  );
};

export default ThoughtsPage;
