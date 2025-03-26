import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mobiliario de Resina Epoxi y Reciclado | Project-Art",
  description: "Project-Art crea mobiliario único y sostenible con resina epoxi y materiales reciclados. Descubre piezas de arte funcionales y ecológicas para tu hogar.",
  keywords: [
    "mobiliario resina epoxi",
    "muebles reciclados",
    "diseño sostenible",
    "arte resina epoxi",
    "muebles únicos",
    "decoración ecológica",
    "mobiliario artesanal",
    "reciclaje creativo",
    "mobiliario personalizado",
    "project-art",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}