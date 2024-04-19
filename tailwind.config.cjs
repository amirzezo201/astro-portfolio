/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        secondary: "#6CD5CB",
        gray: colors.gray,
      },
      fontFamily: {
        Barlow: ["Barlow"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
