/** @type {import('tailwindcss').Config} */
module.exports = {
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
        fundo: "#1f1d2b",
        fundocard: "#221e39",
      },
      fontFamily: {
        poppins: "var(--font-poppins)"
      },
      screens: {
        "lg": "1200px"
      }
    },
  },
  plugins: [],
};
