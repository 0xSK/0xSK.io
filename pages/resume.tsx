import { NextPage } from 'next';
import GlareImage from '../components/glareimage';
import Section from '../components/section';
import Nav from '../components/nav';
import Breadcrumb from '../components/breadcrumb';
import Script from 'next/script';
import Icon from '../components/icon';
import Timeline, { TimelineEntry } from '../components/timeline';
import type { TimelineProps } from '../components/timeline';
import Sheet from '../components/sheet';
import { motion } from 'framer-motion';
import { basicAnimation } from '../components/animation';
import navData from '../components/navdata';

const educationData: TimelineEntry[] = [
  {
    title: 'University of Illinois at Urbana-Champaign',
    icon: 'college',
    time: 'August 2017 – May 2022',
    desc: 'B.Sc. in Computer Engineering with a minor in Art & Design.',
  },
  {
    title: 'Delhi Public School, R. K. Puram',
    icon: 'school',
    time: 'July 2015 – May 2017',
    desc: 'High School Diploma',
  },
];

const workExperienceData: TimelineEntry[] = [
  {
    title: 'Apple — Platform Architecture Intern',
    icon: 'Apple',
    time: 'May 2021 – August 2021 · Cupertino, CA',
    desc: 'Worked on driving trace-driven simulation from checkpoints collected from silicon.',
  },
  {
    title: 'Synchrony — UI/UX Intern',
    icon: 'Synchrony',
    time: 'August 2020 – May 2021 · Remote',
    desc: [
      'Designed a new UI for customers\' credit card dashboard.',
      'Conducted user surveys and implemented a data-driven approach for design thinking.',
    ],
  },
  {
    title: 'Apple — Silicon Validation Intern',
    icon: 'Apple',
    time: 'May 2020 – August 2020 · Remote',
    desc: [
      'Developed a software framework that parses & visualizes SoC request-response traces, and provides a Python notebook interface for data-driven discovery and debugging.',
      'Added high-level front-end components that parse advanced SoC scan-dump structures.',
    ],
  },
  {
    title: 'Synchrony — VUI Design Intern',
    icon: 'Synchrony',
    time: 'August 2019 – May 2020 · Champaign, IL',
    desc: "Worked on redesigning Synchonry's Alexa Skill for the Amazon Store Card.",
  },
  {
    title: 'Google — Software Engineering Intern',
    icon: 'Google',
    time: 'May 2019 – August 2019 · Mountain View, CA',
    desc: [
      'Worked on Procella, a distributed, highly-scalable SQL query engine built for YouTube analytics, currently serving hundreds of billions of queries per day.',
      'Implemented new caching policies in Procella to accelerate its adoption across teams in YouTube and Google.',
    ],
  },
  {
    title: 'Synchrony — Hardware Engineering Intern',
    icon: 'Synchrony',
    time: 'January 2019 – May 2019 · Champaign, IL',
    desc: [
      'Built a specialized Merchant Terminal that utilizes data-over-sound to securely verify mobile payments.',
      'Worked on firmware for the BCM2837 SoC to fulfil engineering requirements.',
    ],
  },
  {
    title: 'Synchrony — Cloud Technologies Intern',
    icon: 'Synchrony',
    time: 'August 2018 – December 2018 · Champaign, IL',
    desc: [
      "Worked on a multi-phase project that involved migrating Synchrony's hadoop cluster to Amazon Web Services.",
      'Orchestrated dozens of AWS services for scalable big data processing.',
    ],
  },
  {
    title: 'Campus Mobile Solutions — Hardware Technician',
    icon: 'repair',
    time: 'September 2017 – May 2018 · Champaign, IL',
    desc: 'Worked on troubleshooting & fixing electronics, and performing board-level repairs.',
  },
];

const academicExperienceData: TimelineEntry[] = [
  {
    title: 'Passat Research Group — Research Assistant · Uncertainity Project',
    icon: 'research',
    time: 'August 2021 – January 2022 · Champaign, IL',
    desc: [
      "Worked on a project that explores the possibility of mitigating supply and demand uncertainty from an architect's perspective.",
      'Generating an economic model of the problem and implemented the model in Python.',
    ],
  },
  {
    title:
      'Passat Research Group — Research Assistant & Co-Author · Earables Project',
    icon: 'scroll',
    time: 'January 2021 – May 2021 · Champaign, IL',
    desc: [
      <span key={1}>
        Worked on the paper{' '}
        <a
          className="underline"
          href="https://dl.acm.org/doi/10.1145/3470496.3527396"
          target="_blank"
          rel="noreferrer"
        >
          Rethinking Programmable Earable Processors
        </a>{' '}
        that proposes a suite of representative emerging earable applications
        with diverse sensor-based inputs and computation requirements.
      </span>,
      'Implemented a VLIW simulator and ran applications & microbenchmarks on the simulator, modeling a modern DSP.',
      <span key={2}>
        Paper accepted to{' '}
        <a
          className="underline"
          href="https://iscaconf.org/isca2022/"
          target="_blank"
          rel="noreferrer"
        >
          ISCA 2022
        </a>
        .
      </span>,
    ],
  },
  {
    title:
      'ECE 434 Mobile Computing Algorithms & Applications — Teaching Assistant',
    icon: 'teach',
    time: 'Jan 2021 – May 2021 · Champaign, IL',
    desc: [
      'Taught and helped students with course material, homework assignments and Python/Jupyter implementation.',
    ],
  },
  {
    title:
      'Passat Research Group — Research Assistant · Dual Front-End Microarchitecture Project',
    icon: 'research',
    time: 'August 2020 – December 2020 · Champaign, IL',
    desc: [
      'Worked on a project that analyzed the feasability of a microarchitecture that fetches and pre- processes both on-path and off-path instructions on low-confidence branch prediction.',
      'Implemented DuFE on the Gem5 Simulator.',
    ],
  },
];

const Resume: NextPage = () => {
  const pageData = navData.resume;
  return (
    <div className="relative">
      {/* <GlareImage
          imageNumber={2}
          className=""
          hueOffset={10}
          opacityStatic={0.7}
          scale={1.3}
          xOffset="calc(50% - 100px)"
          yOffset="-300px"
        /> */}
      <GlareImage
        scale={2}
        hueOffset={-50}
        xOffset={'calc(50vw - 1000px)'}
        yOffset={'-500px'}
      />
      <Section>
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
          <div className="col-span-1">
            <motion.div {...basicAnimation({ delay: 0 })}>
              <Breadcrumb pageData={pageData} />
            </motion.div>
            <motion.p {...basicAnimation({ delay: 0.1 })}>
              This is a web version of my résumé. You can download a PDF version
              here.
            </motion.p>
          </div>
          <div className="col-span-1">
            <Nav />
          </div>
        </div>
      </Section>
      <Section mobileFullWidth>
        <Sheet color={pageData.colors[0]}>
          <div className="px-1 md:px-8 lg:px-12">
            <motion.h2
              {...basicAnimation({ delay: 0.3 })}
              className="text-center pb-4"
            >
              Education
            </motion.h2>
            <Timeline delay={0.3} data={educationData} />
            <motion.h2
              {...basicAnimation({ delay: 0.4 })}
              className="text-center pb-4"
            >
              Work Experience
            </motion.h2>
            <Timeline delay={0.4} data={workExperienceData} />
            <motion.h2
              {...basicAnimation({ delay: 0.5 })}
              className="text-center pb-4"
            >
              Academic Experience
            </motion.h2>
            <Timeline delay={0.5} data={academicExperienceData} />
          </div>
        </Sheet>
      </Section>
    </div>
  );
};

export default Resume;
