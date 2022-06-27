import fs from 'fs';
import matter from 'gray-matter';
import Section from '../../components/section';
import bettermd from '../../components/bettermd';
import { css } from '@emotion/react';
import GradientText from '../../components/gradienttext';
import navData from '../../components/navdata';
import Nav from '../../components/nav';
import Glare from '../../components/glare';
import React from 'react';
import Date from '../../components/date';
import { NextPage } from 'next';
import usePageData from '../../components/usepagedata';
import GlareImage from '../../components/glareimage';
import Breadcrumb from '../../components/breadcrumb';
import Sheet from '../../components/sheet';
import { ProjectFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';

type Params = {
  params: {
    slug: string;
  };
};

type ProjectPostPageProps = {
  frontmatter: ProjectFrontmatter;
  content: string;
};

export function getStaticPaths() {
  const projectsDir = 'posts/projects';
  const files = fs.readdirSync(projectsDir);
  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', '').toLowerCase(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }: Params) {
  const projectFile = `${process.cwd()}/posts/projects/${params.slug}.md`;
  const projectContents = fs.readFileSync(projectFile, 'utf8');
  const { data: frontmatter, content } = matter(projectContents);
  return {
    props: {
      frontmatter: frontmatter,
      content: content,
    },
  };
}

const PostPage = ({
  frontmatter,
  content,
}: ProjectPostPageProps): JSX.Element => {
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
            <div className="col-span-1">
              <motion.div {...basicAnimation({ delay: 0 })}>
                <Breadcrumb />
              </motion.div>
              <motion.div {...basicAnimation({ delay: 0.1 })}>
                <p>{frontmatter.desc}</p>
                <p className="font-thin text-sm">
                  <Date date={frontmatter.date} />
                </p>
              </motion.div>
            </div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>
        <Section mobileFullWidth gridRule delay={0.5}>
            <Sheet className="prose prose-invert lg:text-lg prose-pre:bg-white/10">
              <motion.h1 
                {...basicAnimation({ delay: 0.2 })}
              className="text-center text-6xl">
                <GradientText
                  colors={pageData.colors}
                  hoverColors={pageData.altColors}
                  initialAnimation
                >
                  {frontmatter.title}
                </GradientText>
              </motion.h1>
              <motion.hr 
                {...basicAnimation({ delay: 0.2 })}
              className="mx-auto max-w-prose" />
              <motion.div
                {...basicAnimation({ delay: 0.3 })}
                className="mx-auto max-w-prose "
                dangerouslySetInnerHTML={{ __html: bettermd().render(content) }}
              />
            </Sheet>
          {/* </motion.div> */}
        </Section>

        {/* <div class="relative w-full backdrop-blur-3xl  ">
          <div ">
          
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PostPage;
