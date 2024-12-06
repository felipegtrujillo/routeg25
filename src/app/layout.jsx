import './globals.css';

import { montserrat } from '../app/ui/fonts';

export const metadata = {
  title: "La Calchona",
  description: "Restaurant, hospedaje, alojamiento y cabañas en el Cajón del Maipo",
  icons: {
    icon: "/lacalchona.svg", // Define el ícono aquí
  },
  openGraph: {
    title: "La Calchona",
    description: "Restaurant, hospedaje, alojamiento y cabañas en el Cajón del Maipo",
    url: "https://lacalchona.cl",
    siteName: "La Calchona",
    images: [
      {
        url: "/lacalchona.png", // Imagen para compartir
        width: 1200,
        height: 630,
        alt: "La Calchona - Cajón del Maipo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="relative" lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/lacalchona.svg" /> 
      </head>
      <body className={`${montserrat.className} antialiased`}>
              {/* El contenido que se animará está envuelto en un componente cliente */}
 
                {children}

      </body>

    </html>
  );
}
