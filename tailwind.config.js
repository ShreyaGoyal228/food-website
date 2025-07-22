/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      inter: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    container: {
      padding: {
        Default: "16px",
        sm: "20px",
        md: "40px",
        lg: "50px",
        xl: "80px",
        "2xl": "90px",
      },
    },
    extend: {},
  },
  plugins: [],
};
