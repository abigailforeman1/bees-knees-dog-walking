/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#50B175",
        blue: "#9DCBFF",
        red: "#e84242",
        orange: "#FF7335",
        pink: "#FCB0A6",
        purple: "#5F5789",
        yellow: "rgb(249 255 94)",
      },
    },
    fontSize: {
      xs: "11px",
      sm: "26px",
      base: '21px',
      l: '33px',
      xl: '60px',
      "2xl": "70px",
      "3xl": "90px"
    },
    rotate: {
      'm5': "-5deg",
      '3': "3deg",
      '5': "5deg",
      '10': "10deg",
      '15': '15deg',
      '25': '25deg',
    }
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
};
