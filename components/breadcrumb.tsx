import navData from './navdata';
import GradientText from '../components/gradienttext';
import usePageData from './usepagedata';
import { css } from '@emotion/react';
import type { NavItem } from './navdata';

type BreadcrumbProps = {
  pageData: NavItem;
  className?: string;
};

const Breadcrumb = ({
  pageData,
  className = '',
}: BreadcrumbProps): JSX.Element => {
  return (
    <div className={className}>
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
    </div>
  );
};

export default Breadcrumb;
