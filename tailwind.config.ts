import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/purple-airbrush.png')",
        bg: "url('/bg.png')",
      },
      fontFamily: {
        sans: ['var(--font-lato)'],
      },
      colors: {
        'dark-indigo': '#280E5E',
        'mid-indigo': '#4B36B5',
        'light-indigo': '#6453F3',
        'light-purple': '#ACA2FC',
      },
    },
  },
  plugins: [],
};
export default config;
