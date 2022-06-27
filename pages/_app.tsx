import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/nav';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <Nav /> */}
      {/* <Component {...pageProps} /> */}
      <AnimatePresence
        exitBeforeEnter
        // initial={false}
        // onExitComplete={() => window.scrollTo(0, 0)}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth'})
          }
        }}
      >
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
