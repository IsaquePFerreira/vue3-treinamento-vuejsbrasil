/** @type {import('tailwindcss').Config} */
const palette = require("./palette");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: palette
    },
    fontFamily: {
      regular: ["RobotoRegular"],
      medium: ["RobotoMedium"],
      bold: ["RobotoBold"],
      black: ["RobotoBlack"]
    },
  },
  plugins: [],
}

