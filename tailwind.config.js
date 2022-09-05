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
      },
      fontFamily: {
        nunito: ["Nunito"],
        archivo: ["Archivo"],
      },
    },
  },
  plugins: [],
};
