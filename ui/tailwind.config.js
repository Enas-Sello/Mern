/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#14532d",
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
