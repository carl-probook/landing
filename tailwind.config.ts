import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'red': '#C40000',
            'blue': '#005DC4',
            'dark-blue': '#002D5E',
        },
            fontFamily: {
                'sans': ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
                'serif': ['var(--font-source-serif)', 'Georgia', 'serif'],
            },
    },
    plugins: [],
};

export default config;
