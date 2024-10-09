// Importa las fuentes desde Google Fonts
import { Inter, Playfair_Display_SC, Montserrat} from 'next/font/google';

// Configura las fuentes que ya tienes
export const inter = Inter({ subsets: ['latin'] });
// Agrega la configuración para Playfair Display SC
export const playfairDisplaySC = Playfair_Display_SC({
  weight: ['400', '700'], // Puedes ajustar los pesos según tus necesidades
  subsets: ['latin'],
  display: "swap", // Esto asegura que el texto no se bloquee mientras se carga la fuente
});

export const montserrat = Montserrat ({
    weight: ['400', '700'], // Puedes ajustar los pesos según tus necesidades
    subsets: ['latin'],
    display: "swap", // Esto asegura que el texto no se bloquee mientras se carga la fuente
  });