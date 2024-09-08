import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        skills: {
          words: [
            'Junior Web Developer',
            'Python Developer',
            'Machine Learning Engineer',
            'Data Analytics',
            'Graphic Designer'
          ],
          delay: 0
        }
      }
    })
  ],
});

export default config;
