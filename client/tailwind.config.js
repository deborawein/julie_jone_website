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

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
