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
        red: "#E22C2C",
        orange: "#FF7335",
        pink: "#FCB0A6",
        purple: "#5F5789",
        yellow: "#E0BB07",
      },
    },
    fontSize: {
      sm: "22px",
      base: '40px',
      xl: '100px',
    },
    rotate: {
      '25': '25deg',
    }
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
};
