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
import type { DoggoFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';

type DoggosPageProps = {
  doggos: DoggoFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      doggos: getDirFrontmatters('posts/doggos', false, '/doggos'),
    },
  };
}

const DoggosPage = ({ doggos }: DoggosPageProps): JSX.Element => {
  const pageData = navData.doggos;
  return (
    <>
      <div className="relative">
        <GlareImage
          imageNumber={1}
          opacityStatic={0.9}
          scale={2}
          hueOffset={90}
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-10">
            {doggos
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((doggo, i) => {
                return (
                  <Card
                    key={i}
                    title={doggo.title}
                    image={doggo.coverImage}
                    link={`/doggos/${doggo.slug}`}
                    umamiEvent={`doggos-doggo-${doggo.slug}`}
                    delay={0.2 + i * 0.1}
                  />
                );
              })}
          </div>
        </Section>
      </div>
    </>
  );
};

export default DoggosPage;
