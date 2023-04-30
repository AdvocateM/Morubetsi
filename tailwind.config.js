/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: { "100": "#212121", "200": "rgba(33, 33, 33, 0.5)" },
        lightgreen: "#70d775",
        darkslategray: "#333",
        limegreen: "#13d14b",
        paleturquoise: "rgba(180, 236, 222, 0.92)",
        lightblue: "#a0d8eb",
        mistyrose: "#f7dfe7",
        whitesmoke: { "100": "#e8e9ed", "200": "#e5eaee" },
        skyblue: "#4cbad8",
      },
      fontFamily: { montserrat: "Montserrat" },
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "26px",
      "4xl": "36px",
      "5xl": "100px",
      "6xl": "200px",
    },
  },
  corePlugins: { preflight: false },
};
