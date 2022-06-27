import colors from 'tailwindcss/colors';
import _ from 'lodash';

type NavItem = {
  href: string,
  label: string,
  colors: string[],
  altColors: string[],
};

const navData: { [key: string]: NavItem } = {
  home: {
    href: '/',
    label: 'Home',
    colors: [colors.pink['300'], colors.rose['400']],
    altColors: [colors.red['200'], colors.pink['400']],
  },
  about: {
    href: '/about',
    label: 'About',
    colors: [colors.pink['300'], colors.rose['400']],
    altColors: [colors.pink['300'], colors.red['400']],
  },
  projects: {
    href: '/projects',
    label: 'Projects',
    colors: [colors.blue['300'], colors.indigo['400'], colors.blue['100']],
    altColors: [colors.indigo['500'], colors.blue['300']],
  },
  thoughts: {
    href: '/thoughts',
    label: 'Thoughts',
    colors: [colors.red['300'], colors.yellow['400']],
    altColors: [colors.orange['300'], colors.amber['400']],
  },
  rants: {
    href: '/rants',
    label: 'Rants',
    colors: [colors.yellow['300'], colors.orange['400']],
    altColors: [colors.amber['300'], colors.red['400']],
  },
  resume: {
    href: '/resume',
    label: 'Résumé',
    colors: [colors.blue['300'], colors.indigo['400']],
    altColors: [colors.blue['300'], colors.purple['400']],
  },
};

export default navData;

const navPages = _.map(navData, (item, key) => key)
export {navPages}
