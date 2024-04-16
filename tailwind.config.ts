import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightBlue': '#89bee1',
        'darkBlue': '#05162c',
        'midGray': '#949494',
        'softWhite': '#ffffff',
        'deepBlue': '#5891b2',
        'lightGray': '#ececec',
        'coolGray': '#cfd6db',
      },
    },
  },
  plugins: [],
};
export default config;
