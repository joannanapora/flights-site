
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage :{
        'clouds-image' : "url('https://cdn.pixabay.com/photo/2018/03/07/19/51/grass-3206938_960_720.jpg')"
       }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    }
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    plugin(function({ addBase, theme }) {
      addBase({
        'button': { background: theme('background.yellow') },
      })
    })
  ],
}
