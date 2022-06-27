import type { NextPage } from 'next';

import Head from 'next/head';
// import Gradient from 'rgt'
import styles from '../styles/Home.module.css';
import Section from '../components/section';
import Nav from '../components/nav';
import fs from 'fs';
import matter from 'gray-matter';
import Card from '../components/card';
import PostList from '../components/postlist';
import GradientText from '../components/gradienttext';
import SectionHeader from '../components/sectionheader';
import navData from '../components/navdata';
import Glare from '../components/glare';
import GridRule from '../components/gridrule';
import getDirFrontmatters from '../components/getdirfrontmatters';
import usePageData from '../components/usepagedata';
import GlareImage from '../components/glareimage';
import { motion } from 'framer-motion';
import { basicAnimation } from '../components/animation';


import type {
  ProjectFrontmatter,
  ThoughtFrontmatter,
  RantFrontmatter,
  // Frontmatter,
} from '../components/getdirfrontmatters';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

type basicTransitionProps = {
  delay?: number;
};

const basicTransition = ({ delay }: basicTransitionProps): Transition => ({
  type: 'spring',
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  delay: delay || 0,
});



type HomeProps = {
  projects: ProjectFrontmatter[];
  thoughts: ThoughtFrontmatter[];
  rants: RantFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      projects: getDirFrontmatters('posts/projects', true),
      thoughts: getDirFrontmatters('posts/thoughts', true),
      rants: getDirFrontmatters('posts/rants', true),
    },
  };
}

const Home = ({ projects, thoughts, rants }: HomeProps): JSX.Element => {
  // const pageData = usePageData();
  const pageData = navData.home;
  return (
    <>
      <Head>
        <title>Shreyas Kishore</title>
      </Head>
      {/* <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      > */}
      {/* <AnimatePresence exitBeforeEnter> */}
      <div>
        {/* <Glare
          scaleX={10}
          scaleY={4}
          colors={pageData.colors}
          hueOffset={-10}
          posX={"calc(50% - 100px)"}
          posY={"500px"}
          opacity={0.5}
          brightness={0.5}
        />
        <Glare
          scaleX={4}
          scaleY={2}
          colors={pageData.altColors}
          hueOffset={10}
          posX={"calc(50% + 100px)"}
          posY={"50px"}
          opacity={0.5}
          brightness={0.5}
        /> */}
        <GlareImage
          imageNumber={3}
          scale={2}
          hueOffset={20}
          xOffset={'calc(50vw - 1000px)'}
          yOffset={'-500px'}
        />
        <Section>
          {' '}
          {/* Intro */}
          <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4">
            <div className="col-span-1">
              <motion.h1
                {...basicAnimation({delay: 0.0})}
              >
                Hello, I&rsquo;m
                <GradientText
                  colors={pageData.colors}
                  hoverColors={pageData.altColors}
                  initialAnimation
                >
                  {' '}
                  Shreyas&nbsp;Kishore
                </GradientText>
                .
              </motion.h1>
              <motion.p
                {...basicAnimation({delay: 0.1})}
              >
                I just graduated from University of Illinois at Urbana-Champaign
                with a major in Computer Engineering and a minor in Art &amp;
                Design. This site is a work in progress, and aims to be a place
                for all my projects, findings, and rants.
              </motion.p>
            </div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>

        <Section>
          {/* Projects */}
          <SectionHeader
            heading="Projects"
            link="/projects"
            gradientColors={navData.projects.colors}
            umamiEvent="home-projects-all"
            delay={0.3}
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pb-10">
            {projects.map((project, i) => {
              return (
                <Card
                  key={i}
                  title={project.title}
                  image={project.coverImage}
                  link={`/projects/${project.slug}`}
                  umamiEvent={`home-project-${project.slug}`}
                  delay={0.3 + i * 0.05}
                />
              );
            })}
          </div>
        </Section>

        <Section gridRule>
          {/* Thoughts & Rants */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-24">
            <div className="col-span-1">
              <SectionHeader
                heading="Thoughts"
                link="/thoughts"
                gradientColors={navData.thoughts.colors}
                umamiEvent="home-thoughts-more"
                delay={0.5}
              />
              <PostList
                posts={thoughts}
                baseDir="thoughts"
                umamiEventPrefix="home-thoughts-"
                baseDelay={0.5}
              />
            </div>
            <div className="col-span-1">
              <SectionHeader
                heading="Rants"
                link="/rants"
                gradientColors={navData.rants.colors}
                umamiEvent="home-rants-more"
                delay={0.6}
              />
              <PostList
                posts={rants}
                baseDir="rants"
                umamiEventPrefix="home-rants-"
                baseDelay={0.6}
              />
            </div>
          </div>
        </Section>
      </div>
      {/* </AnimatePresence> */}
      {/* </motion.main> */}
    </>
  );
};

export default Home;
