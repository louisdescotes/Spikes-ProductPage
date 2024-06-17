/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.03)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      animation: {
        grow: 'grow ease-in-out infinite',
      },
      colors: {
        Verdigris: '#3AA39F',
        MikadoYellow: '#FFC41F',
        SpaceCadet: '#17183B',
        CoolGrey: '#A2A3B1',
        FrenchGrey: '#D1D1D8',
        White: '#FFFFFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'semibold': 600,
        'bold': 700,
      },
    },
    
  },
  plugins: [],
}