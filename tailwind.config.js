/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      noto: ["Noto Sans", "sans-serif"],
    },
    keyframes: {
      ping: {
        "75%, 100%": {
          transform: "scale(1.4)",
          opacity: 0,
        },
      },
    },
    animation: {
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
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
        DEFAULT: "18px",
        sm: "20px",
        md: "40px",
        lg: "50px",
        xl: "140px",
        "2xl": "162px",
      },
    },
    extend: {},
  },
  plugins: [],
};
