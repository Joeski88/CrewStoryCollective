/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
       colors: {
          sage: {
            100: '#E6E4D8',
            500: '#B2AC88',
            800: '#7A7551',
          },
          olive: {
            100: '#E2E6D4',
            500: '#708238',
            800: '#4C5A27',
          },
          terracotta: {
            100: '#FBEDE9',
            500: '#E2725B',
            800: '#C2543C',
          },
          midnight: {
            100: '#2E2F36',
            500: '#1E1F26',
            800: '#121318',
          },
          cream: {
            100: '#FFFDF4',
            500: '#FFFDD0',
            800: '#E6E4AF',
          },
        },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

