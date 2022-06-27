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
import type { ProjectFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';

type ProjectsPageProps = {
  projects: ProjectFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      projects: getDirFrontmatters('posts/projects'),
    },
  };
}

const ProjectsPage = ({ projects }: ProjectsPageProps): JSX.Element => {
  const pageData = usePageData();
  return (
    <>
      <div className="relative">
        <GlareImage
          scale={2}
          hueOffset={-50}
          xOffset={'calc(50vw - 1000px)'}
          yOffset={'-500px'}
        />
        <Section>
          {/* Intro */}
          <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4">
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
            {projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  title={project.title}
                  image={project.coverImage}
                  link={`/projects/${project.slug}`}
                  umamiEvent={`projects-project-${project.slug}`}
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

export default ProjectsPage;
