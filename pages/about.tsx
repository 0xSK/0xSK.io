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

const variants = {
  hidden: { opacity: 0, x: 0, y: -100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const aboutMd = `
I'm a recent graduate from University of Illinois at Urbana-Champaign, where I completed my B.Sc. in Computer Engineering with a minor in Art & Design. 

My research/work interests are in the areas of Computer Architecture, Machine Learning, Acoustics, and Open-Source Hardware Toolchains.

I'm passionate about Electronics Repair, Audio Engineering, Homelab (or personal workstations & servers), Typography, Product Design, and UI/UX design. Most of my [projects](/projects) reflect these interests. 

I sometimes write about my [findings and thoughts](/thoughts) on this website, and rather frequently [rant](/rants) here as well. 

---

## Website

This website is a work in progress. After procastinating for serveral months, I decided to take a break and start working on this website (and on the way, also update my web development knowledge with new tools in the Javascript ecosystem). This is my first time building an entire website from scratch, and it has been a fun programming experience --- certainly more fun than dealing with most hardware workflows!

This website is built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a>, and mostly styled using <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. Credit for the awesome typefaces goes to <a href="https://fonts.floriankarsten.com/" target="_blank" rel="noreferrer">Florain Karsten Typefaces</a> and <a href="https://indiantypefoundry.com/" target="_blank" rel="noreferrer">Indian Type Foundry</a>. Source code for this website is available on <a href="https://github.com/0xsk/0xsk.io" target="_blank" rel="noreferrer">here</a>.

### Privacy

I am a strong advocate for privacy. [This website does not use any cookies](https://thejenkinscomic.wordpress.com/2021/01/26/doesnt-use-cookies/) or any other tracking technology. 


`;

const contactMd = `

![Shreyas Kishore](/images/sk/grayscale-grad.jpg)

Telegram <a href="https://t.me/shreyaskishore" target="_blank" rel="noreferrer">@shreyaskishore</a> <br/>
Matrix <a href="https://matrix.to/#/@i:0xsk.io" target="_blank" rel="noreferrer">@i:0xSK.io</a> <br/>
Email <a href="mailto:i@0xsk.io">i@0xSK.io</a> <br/>
Twitter <a href="https://twitter.com/_0xsk" target="_blank" rel="noreferrer">@_0xSK</a> <br/>
Messenger <a href="https://m.me/00xsk" target="_blank" rel="noreferrer">@00xSK</a> <br/>
Facebook <a href="https://fb.me/00xsk" target="_blank" rel="noreferrer">@00xSK</a> <br/>
Github <a href="https://github.com/0xsk" target="_blank" rel="noreferrer">@0xSK</a> <br/>
LinkedIn <a href="https://www.linkedin.com/in/0xsk" target="_blank" rel="noreferrer">@0xSK</a> <br/>
`;

const About: NextPage = () => {
  // const pageData = usePageData();
  const pageData = navData.about;
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
        <GlareImage
          dynamic={false}
          imageNumber={4}
          className=""
          hueOffset={10}
          opacityStatic={0.5}
          scale={1.3}
          xOffset="right -100px"
          yOffset="top -100px"
        />
        <GlareImage
          imageNumber={2}
          className=""
          hueOffset={10}
          opacityStatic={0.7}
          scale={1.3}
          xOffset="calc(50% - 100px)"
          yOffset="calc(50% - 100px)"
        />

        <Section>
          {/* Intro */}
          <div className="grid lg:grid-cols-[1fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-4">
            <div className="col-span-1">
              {/* <Breadcrumb /> */}
              <motion.h3 {...basicAnimation({ delay: 0 })}>
                Namaste! I&rsquo;m
              </motion.h3>
              <motion.h1
              {...basicAnimation({ delay: 0.1 })}
              className="py-0">
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
              className="font-hindi font-bold">
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
          <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr] sm:grid-cols-1 lg:gap-24 md:gap-12">
            <motion.div className="col-span-1 order-2 md:order-1"
            {...basicAnimation({ delay: 0.5 })}
            >
              <div className="prose prose-invert lg:prose-lg">
                <hr className="md:hidden" />
                <h3 className="md:hidden">About Me</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: bettermd().render(aboutMd),
                  }}
                />
              </div>
            </motion.div>
            <motion.div className="col-span-1 order-1 md:order-2"
            {...basicAnimation({ delay: 0.7 })}>
              <div className="prose prose-invert lg:prose-lg">
                <div
                  dangerouslySetInnerHTML={{
                    __html: bettermd().render(contactMd),
                  }}
                />
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
      {/* </motion.main> */}
    </>
  );
};

export default About;
