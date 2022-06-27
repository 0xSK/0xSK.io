import navData from '../../components/navdata';
import { NextPage } from 'next';
import Glare from '../../components/glare';
import GradientText from '../../components/gradienttext';
import Section from '../../components/section';
import Nav from '../../components/nav';
import getDirFrontmatters from '../../components/getdirfrontmatters';
import Card from '../../components/card';
import PostList from '../../components/postlist';
import usePageData from '../../components/usepagedata';
import Breadcrumb from '../../components/breadcrumb';
import GlareImage from '../../components/glareimage';
import type { ThoughtFrontmatter } from '../../components/getdirfrontmatters';

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
  const pageData = usePageData();

  return (
    <>
      <GlareImage
        scale={2}
        hueOffset={80}
        xOffset={'calc(50vw - 1000px)'}
        yOffset={'-500px'}
      />
      <Section>
        {/* Intro */}
        <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4">
          <div className="col-span-1">
            <Breadcrumb />
          </div>
          <div className="col-span-1">
            <Nav />
          </div>
        </div>
      </Section>
      <Section>
        <PostList
          posts={thoughts}
          baseDir="/posts/thoughts"
          tiltProps={{
            perspective: 500,
          }}
        />
      </Section>
    </>
  );
};

export default ThoughtsPage;
