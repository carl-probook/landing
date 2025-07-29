import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'probook-red': '#C40000',
        'probook-blue': '#005DC4',
        'probook-dark-blue': '#002D5E',
        'probook-white': '#FFFFFF',
        'probook-light-grey': '#D6D6D6',
        'probook-dark-grey': '#454545',
        'probook-black': '#000000',
      },
      fontFamily: {
        'sans': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-source-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;