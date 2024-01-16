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
        blue: "#38bdf8",
        darkBlue: "#0c4a6e",
      },
      fontFamily: {
        inter: ["Inter"],
        fasthand: ["Fasthand"],
        handlee: ["Handlee"],
        oswald: ["Oswald"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
