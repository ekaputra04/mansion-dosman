/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      colors: {
        primary: "#eab308",
        hover: "#694736",
        dark: "#0f172a",
        secondary: "#64748b",
        blue: "#4395ba",
      },
    },
  },
  plugins: [],
};
