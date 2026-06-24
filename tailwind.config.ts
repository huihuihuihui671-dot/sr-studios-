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
        background: "#F8F6F0",
        primary: "#111111",
        accent: {
          DEFAULT: "#7A956B",
          light: "#AFC59A",
        },
        highlight: "#E8F0DF",
      },
    },
  },
  plugins: [],
};
export default config;