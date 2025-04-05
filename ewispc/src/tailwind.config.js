module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sarala': ['Sarala', 'sans-serif'],
        'exo': ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite alternate',
        'fadeIn': 'fadeIn 0.5s ease-in-out forwards',
        'cardFlip': 'cardFlip 0.6s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-20px) rotate(-5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        cardFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(90deg)' },
        }
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      }
    },
  },
  plugins: [],
}