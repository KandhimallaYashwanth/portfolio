/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#ccdffd',
          200: '#99bffb',
          300: '#669ef8',
          400: '#337ef6',
          500: '#005ef5',
          600: '#004bc4',
          700: '#003893',
          800: '#002562',
          900: '#001331',
        },
        secondary: {
          50: '#eafff9',
          100: '#d5fff3',
          200: '#abffe7',
          300: '#81fedb',
          400: '#57fecf',
          500: '#2efec3',
          600: '#25cb9c',
          700: '#1c9875',
          800: '#13654e',
          900: '#093227',
        },
        accent: {
          50: '#fff2e5',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#ff8000',
          600: '#cc6600',
          700: '#994d00',
          800: '#663300',
          900: '#331a00',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};