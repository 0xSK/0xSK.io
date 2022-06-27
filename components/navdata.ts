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
    colors: [colors.red['200'], colors.pink['400']],
    altColors: [colors.pink['300'], colors.rose['400']],
  },
  projects: {
    href: '/projects',
    label: 'Projects',
    colors: [colors.fuchsia['300'], colors.pink['400'],],
    altColors: [colors.fuchsia['200'], colors.fuchsia['400']],
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
    colors: [colors.fuchsia['300'], colors.pink['400'],],
    altColors: [colors.fuchsia['200'], colors.fuchsia['400']],
  },
};

export default navData;

const navPages = _.map(navData, (item, key) => key)
export {navPages}
