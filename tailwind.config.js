/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'text-base': '15px'
    },
    extend: {
      colors: {
        'ef-text': '#050505',
        'ef-bg': '#fafafa',
        'ef-primary': '#8fb3ff',
        'ef-secondary': '#ccdbff',
        'ef-accent': '#e11e72'
      }
    }
  },
  plugins: []
}
