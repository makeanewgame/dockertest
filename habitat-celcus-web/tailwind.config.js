const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--source-sans-pro-font)", ...fontFamily.sans],
      serif: ["var(--yeseva-font)", ...fontFamily.serif],
    },
    colors: {
      gray: colors.gray,
      black: "#313131",
      primary: {
        100: "#fdd2d6",
        200: "#eda3a2",
        300: "#e3817e",
        400: "#ed665e",
        500: "#f35c48",
        600: "#e45346",
        700: "#d14a3f",
        800: "#c44439",
        900: "#b43c2f",
      },
      white: "#fff",
    },
    container: {
      center: true,
    },
    screens: {
      lg: "1240px",
      xl: "1240px",
      "2xl": "1240px",
    },
    extend: {},
  },
  plugins: [],
};
