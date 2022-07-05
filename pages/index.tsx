import Glare from '../components/glare';
import Section from '../components/section';
import GradientText from '../components/gradienttext';
import _ from 'lodash';
import Nav from '../components/nav';
import colors from 'tailwindcss/colors';
import Breadcrumb from '../components/breadcrumb';
import usePageData from '../components/usepagedata';
import GlareImage from '../components/glareimage';
import bettermd from '../components/bettermd';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { basicAnimation } from '../components/animation';
import navData from '../components/navdata';
import Link from 'next/link';
import ExtLink from '../components/extlink';
import Image from 'next/image';
import { css } from '@emotion/react';
import SectionHeader from '../components/sectionheader';
import getDirFrontmatters, {
  ProjectFrontmatter,
  DoggoFrontmatter,
  IdeaRantFrontmatter,
} from '../components/getdirfrontmatters';
import Card from '../components/card';
import PostList from '../components/postlist';

type ContentProps = {
  baseDelay: number;
};

const AboutContent = ({ baseDelay }: ContentProps) => (
  <>
    <motion.p className="mt-0" {...basicAnimation({ delay: baseDelay + 0 })}>
      I&rsquo;m a recent graduate from University of Illinois at
      Urbana-Champaign, where I completed my B.Sc. in Computer Engineering with
      a minor in Art & Design.
    </motion.p>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.05 })}>
      My research interests are in the areas of Computer Architecture, Machine
      Learning, Acoustics, and Open-Source Hardware Toolchains.
    </motion.p>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.1 })}>
      I&rsquo;m passionate about Electronics Repair, Audio Engineering, Homelab
      (or personal workstations &amp; servers), Typography, Product Design, and
      UI/UX design. Most of my{' '}
      <Link href="/projects" passHref>
        <a>projects</a>
      </Link>{' '}
      reflect these interests.
    </motion.p>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.15 })}>
      I sometimes write about my{' '}
      <Link href="/ideas-rants" passHref>
        <a>findings and ideas</a>
      </Link>{' '}
      on this website, and rather frequently{' '}
      <Link href="/ideas-rants" passHref>
        <a>rant</a>
      </Link>{' '}
      here as well. Here are some of my favorites:
    </motion.p>
    {/* <motion.hr {...basicAnimation({ delay: 0.5 })} /> */}
  </>
);

const AboutDoggosContent = ({
  doggos,
  baseDelay,
}: {
  doggos: DoggoFrontmatter[];
} & ContentProps) => (
  <>
    <motion.p {...basicAnimation({ delay: baseDelay + 0 })}>
      I&rsquo;m also a huge dog lover, and I sometimes dogsit cute doggos. Here
      are some of those good bois:
    </motion.p>
    <SectionHeader
      heading="Doggos"
      link="/doggos"
      gradientColors={navData.doggos.colors}
      umamiEvent="home-doggos-all"
      delay={baseDelay + 0.05}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
      {doggos
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((doggo, i) => {
          return (
            <Card
              key={i}
              title={doggo.title}
              image={doggo.coverImage}
              link={doggo.link}
              umamiEvent={`home-project-${doggo.slug}`}
              delay={baseDelay + i * 0.05}
            />
          );
        })}
    </div>
  </>
);

const WebsiteInfoContent = ({ baseDelay }: ContentProps) => (
  <>
    <motion.h2 {...basicAnimation({ delay: baseDelay + 0 })}>Website</motion.h2>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.05 })}>
      This website is a work in progress. After procastinating for serveral
      months, I decided to take a break and start working on this website (and
      on the way, also update my web development knowledge with new tools in the
      Javascript ecosystem). This is my first time building an entire website
      from scratch, and it has been a fun programming experience &mdash;
      certainly more fun than dealing with most hardware workflows!
    </motion.p>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.1 })}>
      This website is built with{' '}
      <ExtLink href="https://nextjs.org/">Next.js</ExtLink>, styled using{' '}
      <ExtLink href="https://tailwindcss.com/">Tailwind CSS</ExtLink>, and
      animated using{' '}
      <ExtLink href="https://www.framer.com/motion/">Framer Motion</ExtLink>.
      Credit for the awesome typefaces goes to{' '}
      <ExtLink href="https://fonts.floriankarsten.com/">
        Florain Karsten Typefaces
      </ExtLink>{' '}
      and{' '}
      <ExtLink href="https://indiantypefoundry.com/">
        Indian Type Foundry
      </ExtLink>
      . Source code for this website is available{' '}
      <ExtLink href="https://github.com/0xsk/0xsk.io">here</ExtLink>.
    </motion.p>
    <motion.h3 {...basicAnimation({ delay: baseDelay + 0.15 })}>
      Privacy
    </motion.h3>
    <motion.p {...basicAnimation({ delay: baseDelay + 0.2 })}>
      I am a strong advocate for privacy.{' '}
      <ExtLink
        href="
        https://thejenkinscomic.wordpress.com/2021/01/26/doesnt-use-cookies/
      "
      >
        This website does not use any cookies
      </ExtLink>
      . To keep count of page views (as a way to guage interest on my site), I
      use a self-hosted instance of{' '}
      <ExtLink href="https://umami.is">Umami</ExtLink>. Umami does not collect
      any personally identifiable information and anonymizes all data.
    </motion.p>
  </>
);

const FeaturedProjectsContent = ({
  projects,
  baseDelay,
}: {
  projects: ProjectFrontmatter[];
} & ContentProps): JSX.Element => (
  <>
    <SectionHeader
      heading="Projects"
      link="/projects"
      gradientColors={navData.projects.colors}
      umamiEvent="home-projects-all"
      delay={baseDelay}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
      {projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((project, i) => {
          return (
            <Card
              key={i}
              title={project.title}
              image={project.coverImage}
              link={project.link}
              umamiEvent={`home-project-${project.slug}`}
              delay={baseDelay + i * 0.05}
            />
          );
        })}
    </div>
  </>
);

const FeaturedIdeasRantsContent = ({
  ideasRants,
  baseDelay,
}: {
  ideasRants: IdeaRantFrontmatter[];
} & ContentProps): JSX.Element => (
  <>
    <SectionHeader
      heading={navData.ideas_rants.label}
      gradientColors={navData.ideas_rants.colors}
      umamiEvent="home-ideas-rants-all"
      link={navData.ideas_rants.href}
      delay={baseDelay}
    />
    <PostList posts={ideasRants} baseDelay={baseDelay} />
  </>
);

const ContactContent = () => (
  <>
    <motion.div {...basicAnimation({ delay: 0.5 })} className="h-auto w-full">
      <Image
        src="/images/sk/grayscale-grad.jpg"
        alt="Shreyas Kishore"
        width={512}
        height={512}
        layout="responsive"
        objectFit="cover"
      />
    </motion.div>
    <motion.p {...basicAnimation({ delay: 0.55 })}>
      Telegram{' '}
      <ExtLink href="https://t.me/shreyaskishore">@shreyaskishore</ExtLink>{' '}
      <br />
      Matrix <ExtLink href="https://matrix.to/#/@i:0xsk.io">
        @i:0xSK.io
      </ExtLink>{' '}
      <br />
      Email <ExtLink href="mailto:i@0xsk.io">i@0xsk.io</ExtLink> <br />
      Twitter <ExtLink href="https://twitter.com/_0xsk">@_0xsk</ExtLink> <br />
      Messenger <ExtLink href="https://m.me/00xsk">@00xsk</ExtLink> <br />
      Facebook <ExtLink href="https://fb.me/00xsk">@00xsk</ExtLink> <br />
      Github <ExtLink href="https://github.com/0xsk">@0xsk</ExtLink> <br />
      LinkedIn <ExtLink href="https://www.linkedin.com/in/0xsk">
        @0xsk
      </ExtLink>{' '}
      <br />
    </motion.p>
  </>
);

type HomeProps = {
  projects: ProjectFrontmatter[];
  ideasRants: IdeaRantFrontmatter[];
  doggos: DoggoFrontmatter[];
};

export async function getStaticProps() {
  return {
    props: {
      projects: getDirFrontmatters('posts/projects', true, '/projects'),
      ideasRants: getDirFrontmatters('posts/ideas-rants', true, '/ideas-rants'),
      doggos: getDirFrontmatters('posts/doggos', true, '/doggos'),
    },
  };
}

const Home = ({ projects, ideasRants, doggos }: HomeProps): JSX.Element => {
  // const pageData = usePageData();
  const pageData = navData.home;
  return (
    <>
      {/* <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'ease-in-out', duration: 0.5 }}
        > */}

      <div className="relative">
        {/* <Glare
          dynamic={false}
          imageNumber={2}
          className=""
          hueOffset={20}
          opacityStatic={0.9}
          scale={1.0}
          xOffset="-60%"
        /> */}
        {/* <GlareImage
          dynamic={false}
          imageNumber={3}
          className=""
          hueOffset={20}
          opacityStatic={0.8}
          scale={1}
          xOffset="0%"
          yOffset="0%"
        /> */}
        {/* <GlareImage
          dynamic={false}
          imageNumber={4}
          className=""
          hueOffset={40}
          opacityStatic={0.6}
          scale={1.3}
          xOffset="30%"
          yOffset="0"
        /> */}
        <GlareImage
          imageNumber={1}
          className=""
          hueOffset={10}
          opacityStatic={0.9}
          scale={1.3}
          xOffset="calc(50% - 100px)"
          yOffset="100vh"
        />
        <GlareImage
          imageNumber={3}
          scale={2}
          hueOffset={20}
          xOffset={'calc(50vw - 1000px)'}
          yOffset={'-500px'}
        />

        <Section>
          {/* Intro */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="col-span-1">
              {/* <Breadcrumb /> */}
              <motion.h3 {...basicAnimation({ delay: 0 })}>
                Hello, I&rsquo;m
              </motion.h3>
              <motion.h1 {...basicAnimation({ delay: 0.1 })} className="py-0">
                <GradientText
                  colors={pageData.colors}
                  hoverColors={pageData.altColors}
                  initialAnimation
                >
                  Shreyas&nbsp;Kishore
                </GradientText>
              </motion.h1>
              <motion.h1
                {...basicAnimation({ delay: 0.2 })}
                className="font-hindi font-bold"
              >
                <GradientText
                  colors={pageData.colors}
                  hoverColors={pageData.altColors}
                  initialAnimation
                >
                  श्रेयस&nbsp;किशोर
                </GradientText>
              </motion.h1>

              {/* <h1>
                <GradientText
                  colors={pageData.colors}
                  hoverColors={pageData.altColors}
                  initialAnimation
                >
                  {' '}
                  Shreyas&nbsp;Kishore
                </GradientText>
                
              </h1> */}
            </div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>
        <Section>
          <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-2 grid-cols-1 lg:gap-24 sm:gap-12">
            <div
              className="col-span-1 order-2 sm:order-1"
              // {...basicAnimation({ delay: 0.5 })}
            >
              <motion.hr
                {...basicAnimation({ delay: 0.2 })}
                className="md:hidden"
              />
              <AboutContent baseDelay={0.3} />
              <FeaturedProjectsContent projects={projects} baseDelay={0.5} />
              <FeaturedIdeasRantsContent
                ideasRants={ideasRants}
                baseDelay={0.7}
              />
              <motion.hr {...basicAnimation({ delay: 0.9 })} />
              <AboutDoggosContent doggos={doggos} baseDelay={0.9} />
              <motion.hr {...basicAnimation({ delay: 1.1 })} />
              <WebsiteInfoContent baseDelay={1.1} />
            </div>
            <div className="col-span-1 order-1 sm:order-2">
              <ContactContent />
            </div>
          </div>
        </Section>
      </div>
      {/* </motion.main> */}
    </>
  );
};

export default Home;
