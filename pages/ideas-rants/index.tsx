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
import type { IdeaRantFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';
import PostList from '../../components/postlist';

type IdeasRantsPageProps = {
  IdeasRants: IdeaRantFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      IdeasRants: getDirFrontmatters(
        'posts/ideas-rants',
        false,
        '/ideas-rants'
      ),
    },
  };
}

const IdeasRantsPage = ({ IdeasRants }: IdeasRantsPageProps): JSX.Element => {
  const pageData = navData.ideas_rants;
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
              <Breadcrumb pageData={pageData} />
            </motion.div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>
        <Section>
          <PostList
            posts={IdeasRants}
            umamiEventPrefix="ideas-rants-"
            baseDelay={0.2}
          />
        </Section>
      </div>
    </>
  );
};

export default IdeasRantsPage;
