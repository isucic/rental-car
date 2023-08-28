/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortea': ['"Comfortaa"', 'sans'],
        // 'comfortaa-nes': ['"Comfortaa"', 'sans-serif', '700'],
        'passion-one': ['"Passion One"', 'cursive']
      },
      colors: {
        'rent-black': '#0D0E11',
        'rent-red': '#B30B10',
        'rent-light-red': '#DF6060',
        'rent-white': '#FFFFFF',
        'rent-grey': '#F5F5F5'
      }
    },
  },
  plugins: [],
}
