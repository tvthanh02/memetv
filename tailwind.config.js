/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      // custom font
      fontFamily: {
        sans: ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#D11F22",
        second: "#913A3C",
        green: "#3C7C4E",
        lightGreen: "#1FD150",
        brown: "#523536",
        gray: "#5a5a5a",
        background: "#eeeeee",
      },
      gridTemplateColumns: {
        "1/3/1.5": "1fr 3fr 1.5fr",
      },
    },
  },
  plugins: [],
};
