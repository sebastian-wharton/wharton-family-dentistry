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
        _brown: "#352C21",
        _teal: "#5D8778",
        _gd: "#ABA374",
        _gm: "#D9D3A4",
        _gl: "#DAD6B5",
        _light: "#F0EDDB",
        _black: "#010409",
        _gray: "#343434",
        _primary: "#f4540a",
        _secondary: "#f4540a",
      },
      fontFamily: {
        nunito: ["Nunito"],
        archivo: ["Archivo"],
      },
    },
  },
  plugins: [],
};
