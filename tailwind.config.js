/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        "4/10": "40.833%",
        "6/10": "59.167%",
      },
      colors: {
        "white-100": "#F5F5F5",
        "neutral-150": "#DDDDDD",
        "light-grey": "#858585",
        "light-pink": "#E9A0A0",
        "light-green": "#9BDD7C",
        "fade-green": "#98d89e",
        "fade-red": "#ee8484",
        "fade-yellow": "#f6dc7d",
      },
      fontFamily: {
        montserrat: ["Shantell Sans", "cursive"],
      },
      spacing: {
        7: "1.875rem",
        50: "10rem",
        76: "11.25rem",
        112: "28rem",
      },
      borderRadius: {
        xl: "10px",
        "3xl": "20px",
        "4xl": "30px",
      },
    },
  },
};
