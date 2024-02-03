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
        main: "#040C18",
        primary : "#031B34",
        secondary: "#042c54",
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
};
