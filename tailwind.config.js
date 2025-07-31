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
        "slide-out-to-bottom": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    animation: {
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
       "slide-in-from-bottom": "slide-in-from-bottom 300ms ease-out",
        "slide-out-to-bottom": "slide-out-to-bottom 300ms ease-in",
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
