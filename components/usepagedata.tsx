import { useRouter } from 'next/router';
import navData from './navdata';

const usePageData = () => {
  const { asPath } = useRouter();
  if (asPath === '/') {
    return navData.home;
  }
  const currentPage = asPath.split('/')[1];
  return navData[currentPage];
};

export default usePageData;
