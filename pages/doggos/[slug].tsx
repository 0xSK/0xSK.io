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
import DateString from '../../components/datestring';
import { NextPage } from 'next';
import usePageData from '../../components/usepagedata';
import GlareImage from '../../components/glareimage';
import Breadcrumb from '../../components/breadcrumb';
import Sheet from '../../components/sheet';
import { DoggoFrontmatter } from '../../components/getdirfrontmatters';
import { motion } from 'framer-motion';
import { basicAnimation } from '../../components/animation';
import Image from '../../components/image';

type Params = {
  params: {
    slug: string;
  };
};

type DoggoPostPageProps = {
  frontmatter: DoggoFrontmatter;
  content: string;
};

export function getStaticPaths() {
  const doggosDir = 'posts/doggos';
  const files = fs.readdirSync(doggosDir);
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
  const doggoFile = `${process.cwd()}/posts/doggos/${params.slug}.md`;
  const doggoContents = fs.readFileSync(doggoFile, 'utf8');
  const { data: frontmatter, content } = matter(doggoContents);
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
}: DoggoPostPageProps): JSX.Element => {
  const pageData = navData.doggos;

  return (
    <>
      <div className="relative">
        <GlareImage
          scale={2}
          hueOffset={160}
          xOffset={'calc(50vw - 1000px)'}
          yOffset={'-500px'}
        />
        <Section>
          {/* Intro */}
          <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4">
            <div className="col-span-1">
              <motion.div {...basicAnimation({ delay: 0 })}>
                <Breadcrumb pageData={pageData} />
              </motion.div>
              <motion.div {...basicAnimation({ delay: 0.1 })}>
                <p>{frontmatter.desc}</p>
                {/* <p className="font-thin text-sm">
                  Posted on <DateString date={frontmatter.date} />
                </p> */}
              </motion.div>
            </div>
            <div className="col-span-1">
              <Nav />
            </div>
          </div>
        </Section>
        <Section mobileFullWidth delay={0.5}>
          <Sheet
            className="prose prose-invert lg:text-lg prose-pre:bg-white/10"
            color={pageData.colors[0]}
          >
            <motion.h1
              {...basicAnimation({ delay: 0.2 })}
              className="text-center lg:text-6xl"
            >
              <GradientText
                colors={pageData.colors}
                hoverColors={pageData.altColors}
                initialAnimation
              >
                {frontmatter.title}
              </GradientText>
            </motion.h1>
            {/* <motion.div
              {...basicAnimation({ delay: 0.2 })}
              className="text-center"
            >
              <p>Posted on {frontmatter.date}</p>
            </motion.div> */}
            <motion.div
              {...basicAnimation({ delay: 0.25 })}
              className="h-auto max-w-prose mx-auto"
            >
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                width={1200}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </motion.div>
            {/* <motion.hr
              {...basicAnimation({ delay: 0.2 })}
              className="mx-auto max-w-prose"
            /> */}
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
