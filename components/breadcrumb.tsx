import navData from './navdata';
import GradientText from '../components/gradienttext';
import usePageData from './usepagedata';
import { css } from '@emotion/react';

const Breadcrumb = (): JSX.Element => {
  const pageData = usePageData();
  return (
    <h3>
      Shreyas&nbsp;Kishore{' '}
      <span
        css={css`
          writing-mode: vertical-lr;
        `}
      >
        &#x2191;
      </span>
      <GradientText
        colors={pageData.colors}
        hoverColors={pageData.altColors}
        initialAnimation
      >
        {' '}
        {pageData.label}
      </GradientText>
    </h3>
  );
};

export default Breadcrumb;
