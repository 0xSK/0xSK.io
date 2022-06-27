/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      serif: ['scotch-display', 'serif'],
      mono: ['Space Mono', 'monospace'],
      hindi: ['Teko', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
