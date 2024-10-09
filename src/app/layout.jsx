
import localFont from "next/font/local";
import "./globals.css";
import ClientTransitionWrapper from '../components/clientComponents/ClientTransitionWrapper';
import MiLayout from '../components/layout/MiLayout'

import { montserrat } from '../app/ui/fonts'
import Footer from "../components/common/Footer";

export const metadata = {
  title: "La Calchona",
  description: "Restaurant, hospedaje, alojamiento y cabañas en el Cajón del Maipo",
  icons: {
    icon: "/assets/img/lacalchona.svg", // Define el ícono aquí
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="relative" lang="en">
      <body className={`${montserrat.className} antialiased`}>
              {/* El contenido que se animará está envuelto en un componente cliente */}
 
                {children}

      </body>

    </html>
  );
}
