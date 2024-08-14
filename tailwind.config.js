/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: false,
      padding: "3rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "100%",
      },
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
        lightBackground: "F5F5F5",
        background: "#eeeeee",
      },
      gridTemplateColumns: {
        "1/3/1.5": "1fr 3fr 1.5fr",
        "3/7": "2fr 8fr",
        "3/1": "2fr 1fr",

        autoFillMin300: "repeat(auto-fill, minmax(30rem, 1fr))",
        autoFillMin248: "repeat(auto-fill, minmax(22.4rem, 1fr))",
        autoFillMin382: "repeat(auto-fill, minmax(38.2rem, 1fr))",
        autoFillMin416: "repeat(auto-fill, minmax(41.6rem, 1fr))",
        autoFillMin180: "repeat(auto-fill, minmax(18.5rem, 1fr))",
      },
      boxShadow: {
        header: "0 4px 20px 0 rgba(0, 0, 0, .08)",
        sidebar: "0 5px 20px rgba(0, 0, 0, .1)",
        gameCard: "0 10px 20px rgba(209, 31, 34, .5)",
        tag: "0 0 10px rgba(209, 31, 34, .8)",
        rankIcon: "0 0 8px rgba(31, 209, 80, .8)",
      },
      spacing: {
        a: "calc(100vh - 6rem - 4rem)",
        b: "calc(383px - 48px)",
      },
      backgroundImage: {
        banner: "url('src/assets/img/banner-new.png')",
      },
    },
  },
  plugins: [],
};
