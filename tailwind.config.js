import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Italian Plate No2 Expanded', 'system-ui', 'sans-serif'],
        heading: ['Italian Plate No2 Expanded', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        input: 'var(--input)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
