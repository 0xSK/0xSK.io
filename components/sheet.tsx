import usePageData from './usepagedata';
import { createElement } from 'react';

type SheetProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  Tag?: string;
  color: string;
};

const Sheet = ({
  children,
  className,
  id,
  Tag = 'div',
  color
}: SheetProps): JSX.Element => {
  const pageData = usePageData();

  const generatedClassName = `relative blurred-container w-full py-12 px-6 md:px-0 z-1 shadow-xl  mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28 shadow-[${pageData.colors[0]}] ${className}`;
  const style = {
    '--blurred-container-background': `${color}10`,
    '--blurred-container-background-fallback': `${color}10`,
  };

  return createElement(
    Tag,
    {
      className: generatedClassName,
      id: id,
      style: style as React.CSSProperties,
    },
    children
  );
};

export default Sheet;
