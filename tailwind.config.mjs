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
        yellow: "#E0BB07",
      },
    },
    fontSize: {
      sm: "11px",
      base: '40px',
      l: '75px',
      xl: '160px',
    },
    rotate: {
      'm5': "-5deg",
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
