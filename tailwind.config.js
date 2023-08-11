/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        "gray-dark": "#7a7a7a",
        "gray-lighter": "#e6e6e6",
        primary: "#1597e4",
      },
    },
  },
  plugins: [],
};
