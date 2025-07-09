const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-accent',
    'text-accent',
    'border-accent',
    'hover:bg-accent',
    'hover:text-accent',
    'hover:border-accent',
    // agrega aquí todas las variantes que necesites
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#CFC96E',
      secondary: '#A5CF6E',
      accent: '#CF996E',
      'primary-hover': '#BFB73F',
      light: '#F7F6D9',
      'text-main': '#171717',
      'text-secondary': '#555',
    },
  },
  plugins: [],
};