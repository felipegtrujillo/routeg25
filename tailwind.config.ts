// tailwind.config.js

/* import { inter, playfairDisplaySC, montserrat } from ('./src/app/ui/fonts'); // Asegúrate de la ruta correcta */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',      // Ejemplo de breakpoint personalizado para dispositivos pequeños
      },
      maxWidth: {
        '3xl': '48rem',  // Ejemplo de tamaño personalizado (si ya existe en tu versión)
        '4xl': '56rem',  // Tamaño mayor personalizado
        '5xl': '64rem',  // Otro tamaño mayor personalizado
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display SC', 'serif'],
        montserrat: ['Montserrat', 'serif']
      },
      colors: {
        'custom-gray': '#54545E',
        'custom-gray-footer': '#EAEAFD',
        'custom-yellow': '#eed000', /* '#FFD015' */ 
        'custom-green': "#2d6234", /* '#378c52' */
        'custom-red': '#B52800', /* '#FFD015' */ 
        'custom-rojo': '#79341F',
        'brown': '#594949',
        'beige': '#FEF4E9',
        'dark': '#4C4C4C',
        "rojo": '#79341F'
      },
      backgroundImage: {
        "logo-bw" : "url('/assets/img/lacalchona.svg')",
        "hero": "url('/assets/img/front/home_front.jpg')",
        "restaurant": "url('/assets/img/restaurant/restaurant.jpg')",
        "carta": "url('/assets/img/restaurant/bar.jpg')",
        "cabanas": "url('/assets/img/front/la_calchona.jpg')",
        "about": "url('/assets/img/front/about2.jpg')",
        "fondo": "url('/assets/img/front/piscina.jpg')",
        "tabla": "url('/assets/img/front/tabla_nav.png')",
      },
      borderWidth: {
        '0.2': '0.2px',
      }
    },
  },
  plugins: [],
};
