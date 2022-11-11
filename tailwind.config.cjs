/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
			green: colors.green,
		},
    extend: {},
  },
  plugins: [],
});
