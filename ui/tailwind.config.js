/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // main: "#708090",
        // primary: "#b1454a",
        // secondary: "#121221",
        creamson: "#fff0de",
        main: "rgb(8 51 68 / 1)",
        primary: "rgb(21 94 117 / 1)",
        secondary: "rgb(14 116 144 / 1)",
        // secondary: "#042c54",
        text: "#81AFDD",
        subtext: "#FF8A71",
      },
      gridTemplateColumns: {
        view: "max-content 1fr",
      },
      gridTemplateRows: {
        view: "max-content 1fr max-content",
      },
    },
  },

  plugins: [],
}
