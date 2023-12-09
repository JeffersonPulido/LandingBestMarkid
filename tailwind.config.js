/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': {'200': '#ffc9a8', '500': '#ff5a23', '800': '#9e1b0e',},
        'lightOrange': {'50': '#fff9f6',},
        'green': {'100': '#d0fbe8', '200': '#a4f6d6', '600': '#00b288', '900': '#045042',},
        'whiteGreen': {'50': '#fcfefe',},
        'lightGreen': {'50': '#e5faf1',},
        'gray': {'200': '#e4e4e4', '600': '#818181', '950': '#282828',},
      },
      fontFamily: {
        fontGeneral: ['Quicksand', 'sans-serif'],
        fontTitleRegular: ['FontSpringRegular', 'serif'],
        fontTitleBold: ['FontSpringBold', 'serif'],
      }
      ,
      screens: {
        'mobile': '500px',
        // => @media (min-width: 640px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
    
      },
    },
  },
    // Nuevas clases personalizadas
    corePlugins: {
      // ...
      backgroundOpacity: false, // Desactiva backgroundOpacity para no duplicar clases
    },
    plugins: [
      function ({ addUtilities, theme, variants }) {
        const newUtilities = {};
  
        // Añadir clases para fondo rojo con diferentes opacidades
        for (let opacity = 10; opacity <= 90; opacity += 10) {
          newUtilities[`.bg-red-${opacity}`] = { backgroundColor: `rgba(${theme('colors.red.500')}, ${opacity / 100})` };
        }
  
        addUtilities(newUtilities, variants('backgroundOpacity'));
      },
    ],
}