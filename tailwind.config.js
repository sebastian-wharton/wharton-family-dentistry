/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#352C21",
        teal: "#5D8778",
        gd: "#ABA374",
        gm: "#D9D3A4",
        gl: "#DAD6B5",
        light: "#F0EDDB",
        black: "#010409",
        gray: "#343434",
        primary: "#f4540a",
        secondary: "#f4540a",
      },
      fontFamily: {
        nunito: ["Nunito"],
        archivo: ["Archivo"],
      },
    },
  },
  plugins: [],
};
