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
      projects: getDirFrontmatters('posts/projects', false, '/projects'),
    },
  };
}

const ProjectsPage = ({ projects }: ProjectsPageProps): JSX.Element => {
  const pageData = navData.projects;
  return (
    <>
      <div className="relative">
        <GlareImage
          imageNumber={1}
          opacityStatic={0.9}
          scale={2}
          hueOffset={-90}
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
          {projects.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-10">
              {projects
                .sort(
                  (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
                )
                .map((project, i) => {
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
          ) : (
            <motion.div
              {...basicAnimation({ delay: 0.3 })}
              className="text-center"
            >
              <p>¯\_(ツ)_/¯</p>
              <p>Still adding projects here. Please check later.</p>
            </motion.div>
          )}
        </Section>
      </div>
    </>
  );
};

export default ProjectsPage;
