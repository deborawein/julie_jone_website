/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundAttachment: {
        parallax: 'fixed',
      },
      perspective: {
        1000: '1000px',
      },
      translate: {
        'parallax-hover': '-20px',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        hargita: ['Hargita', 'sans-serif'],
      },
      colors: {
        'green-deep': '#136f5f',  // Modify the default 'primary' color
        'orange-neon': '#f57925', // Modify the default 'secondary' color
      },
    },

      plugins: [
        require('@tailwindcss/aspect-ratio'), // Add if you need aspect utilities
      ]
    },
  }
