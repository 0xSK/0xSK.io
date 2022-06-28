import Link from 'next/link';
import { useRouter } from 'next/router';
import Hex from './hex';
import navData, { navPages } from './navdata';
import _ from 'lodash';
import { useAnimation } from 'framer-motion';
import { useState } from 'react';

type NavProps = {};

const useIsActive = (href: string, label: string): boolean => {
  const { asPath } = useRouter(); // asPath is the current path
  if (label === 'Home') {
    var isActive = asPath === '/';
  } else {
    var isActive = asPath.includes(href);
  }
  return isActive;
};

const Nav = ({}: NavProps): JSX.Element => {
  const currentPageKey: string = _.findKey(navData, (page) => {
    return useIsActive(page.href, page.label);
  });
  // console.log(currentPageKey);
  const currentPageIndex = navPages.indexOf(currentPageKey);
  const currentPageData = navData[currentPageKey];

  const hexAngleChange = 120;
  const initHexAngle = currentPageIndex * hexAngleChange;
  const initHexColor = currentPageData.colors;
  const initHexAltColor = currentPageData.altColors;
  const initHexThickness = 6;
  const initHexScale = 1.5;

  var [hexAngle, setHexAngle] = useState<number>(initHexAngle);
  var [hexAltAngle, setHexAltAngle] = useState<number>(initHexAngle);
  var [hexColors, setHexColors] = useState<string[]>(initHexColor);
  var [hexAltColors, setHexAltColors] = useState<string[]>(initHexAltColor);
  var [hexThickness, setHexThickness] = useState<number>(initHexThickness);
  var [hexAltScale, setHexAltScale] = useState<number>(initHexScale);

  return (
    <>
      <div className="relative py-10 md:py-0">
        <table
          className="sm:float-left md:float-right"
          onMouseLeave={() => {
            setHexAngle(initHexAngle);
            setHexAltAngle(initHexAngle);
            setHexColors(initHexColor);
            setHexAltColors(initHexAltColor);
            setHexThickness(initHexThickness);
            setHexAltScale(initHexScale);
          }}
        >
          <tbody>
            {/* {_.map(navData, (item, index) => { */}
            {_.map(navPages, (navPageKey, index) => {
              const navPageData = navData[navPageKey];
              return (
                <tr key={navPageKey} onMouseEnter={() => {}}>
                  <td
                    className={`md:text-right sm:text-left font-sans m-0 p-0 leading-normal ${
                      useIsActive(navPageData.href, navPageData.label)
                        ? 'font-extrabold text-white/90'
                        : 'font-medium text-white/50'
                    } umami--click--nav-${navPageKey}`}
                  >
                    {/* <button
                      onClick={() => {
                        setHexAngle(index * 60);
                      }}
                    >
                      {hexAngle}
                    </button> */}
                    <Link href={navPageData.href} scroll={false}>
                      <a
                        onMouseEnter={() => {
                          setHexAngle(index * hexAngleChange);
                          setHexAltAngle(index * hexAngleChange);
                          setHexColors(navPageData.colors);
                          setHexAltColors(navPageData.altColors);
                          setHexThickness(10);
                          setHexAltScale(1.6);
                        }}
                        onClick={() => {
                          // setHexAngle(initHexAngle);
                          // setHexColors(initHexColor);
                          // setHexAltColors(initHexAltColor);
                          // setHexThickness(initHexThickness);
                          // setHexAltScale(initHexScale);
                          setHexAngle(index * hexAngleChange + 30);
                          setHexAltAngle(index * hexAngleChange + 30);
                          setHexThickness(20);
                          setHexAltScale(1.6);
                          setTimeout(() => {
                            setHexAngle(index * hexAngleChange + 60);
                            setHexAltAngle(index * hexAngleChange + 60);
                            setHexThickness(initHexThickness);
                            setHexAltScale(initHexScale);
                          }, 300);
                        }}
                      >
                        {navPageData.label}
                        {/* {index} */}
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Hex
          angle={hexAltAngle}
          colors={hexAltColors}
          thickness={2}
          scale={hexAltScale}
          className="-z-20"
        />
        <Hex
          angle={hexAngle}
          colors={hexColors}
          thickness={hexThickness}
          scale={initHexScale}
          className="-z-10"
        />
      </div>
    </>
  );
};

export default Nav;
