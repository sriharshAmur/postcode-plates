import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        montserrat: ['var(--font-montserrat)'],
        caveat: ['var(--font-caveat)'],
        josefin_sans: ['var(--font-josefin-sans)'],
        comfortaa: ['var(--font-comfortaa)'],
      },
    },
  },
  plugins: [],
};
export default config;
