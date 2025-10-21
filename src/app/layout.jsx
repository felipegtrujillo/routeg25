import "./globals.css";

import { montserrat } from "../app/ui/fonts";

export const metadata = {
  title: "Route G25",
  description:
    "Restaurant, hospedaje, alojamiento y cabañas en el Cajón del Maipo",
  icons: {
    icon: "/g25.svg", // Define el ícono aquí
  },
  openGraph: {
    title: "Route G25",
    description:
      "Restaurant, hospedaje, alojamiento y cabañas en el Cajón del Maipo",
    url: "https://routeg24restaurant.cl",
    siteName: "Route G25 ",
    images: [
      {
        url: "/g25.png", // Imagen para compartir
        width: 1200,
        height: 630,
        alt: " Route G25 Restaurant- Cajón del Maipo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="relative" lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/g25.svg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {/* El contenido que se animará está envuelto en un componente cliente */}

        {children}
      </body>
    </html>
  );
}
