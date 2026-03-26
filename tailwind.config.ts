import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f7fe',
          100: '#b3e7fc',
          200: '#80d7fb',
          300: '#4dc7f9',
          400: '#1ab7f8',
          500: '#00adee', // Main brand color
          600: '#008cbe',
          700: '#006a8f',
          800: '#00495f',
          900: '#002730',
          950: '#001418',
        },
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
    },
  },
} satisfies Config
