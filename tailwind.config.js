/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
  },
    extend: {
      colors: {
        lightbeige: "#F1EBDC",
        beige: "#DFCFB0",
        pink: "#EFCDB9",
        greenish: "#B6D2C1",
        black: "#100F0D"

    },
      fontFamily: {
        sans: ["var(--font-rubik)"],
        mono: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};