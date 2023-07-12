/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      mdd: "500px",
      md: "670px",
      base: "600px",
      normal: "780px",
      lg: "970px",
      xl: "1080px",
    },
  },
  extend: {},
  plugins: [require("tailwindcss-animate")],
};
