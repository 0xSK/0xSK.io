import colors from 'tailwindcss/colors';
import _ from 'lodash';

type NavItem = {
  href: string,
  label: string,
  colors: string[],
  altColors: string[],
};

const navData: { [key: string]: NavItem } = {
  // home: {
  //   href: '/',
  //   label: 'Home',
  //   colors: [colors.pink['300'], colors.rose['400']],
  //   altColors: [colors.red['200'], colors.pink['400']],
  // },
  home: {
    href: '/',
    label: 'Home',
    colors: [colors.red['200'], colors.pink['400']],
    altColors: [colors.pink['300'], colors.rose['400']],
  },
  projects: {
    href: '/projects',
    label: 'Projects',
    colors: [colors.blue['300'], colors.indigo['400'],],
    altColors: [colors.indigo['200'], colors.blue['400']],
  },
  thoughts: {
    href: '/thoughts',
    label: 'Thoughts',
    colors: [colors.lime['200'], colors.emerald['400']],
    altColors: [colors.emerald['400'], colors.emerald['200']],
  },
  rants: {
    href: '/rants',
    label: 'Rants',
    colors: [colors.red['400'], colors.orange['400']],
    altColors: [colors.red['200'], colors.orange['400']],
  },
  doggos: {
    href: '/doggos',
    label: 'Doggos',
    colors: [colors.amber['200'], colors.yellow['400']],
    altColors: [colors.amber['200'], colors.orange['400']],
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
