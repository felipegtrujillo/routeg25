import './globals.css';

import { montserrat } from '../app/ui/fonts';

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
      <head>
      <link rel="icon" type="image/svg+xml" href="/assets/img/lacalchona.svg" /> 
      </head>
      <body className={`${montserrat.className} antialiased`}>
              {/* El contenido que se animará está envuelto en un componente cliente */}
 
                {children}

      </body>

    </html>
  );
}
