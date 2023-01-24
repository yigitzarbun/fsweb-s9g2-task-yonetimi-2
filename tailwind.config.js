/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      lightOrange: "#f3d4b0",
      darkOrange: "#c8781a",
      black: "rgb(0 0 0 / 10%)",
      darkGrey: "#444",
      lightGrey: "#ccc",
      lessThan1: "#ffd9d4",
      moreThan3: "#d4d7ff",
    },
  },
  plugins: [],
};
