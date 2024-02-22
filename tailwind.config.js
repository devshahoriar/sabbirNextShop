/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '10px',
      screens: {
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    extend: {
      colors: {
        main: '#8aa600',
      },
    },
  },
  plugins: [],
}
