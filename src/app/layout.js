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
  title: "Mobiliario de Resina Epoxi y Reciclado | VertexArt",
  description: "VertexArt crea mobiliario único y sostenible con resina epoxi y materiales reciclados. Descubre piezas de arte funcionales y ecológicas para tu hogar.",
  keywords: [
    "muebles de resina epoxi",
    "mobiliario reciclado artesanal",
    "diseño de interiores sostenible",
    "decoración ecológica",
    "muebles personalizados de resina",
    "arte en resina epoxi",
    "mobiliario hecho a mano",
    "resina epoxi ecológica",
    "muebles sostenibles",
    "VertexArt",
    "muebles reciclados de diseño",
    "mobiliario ecológico personalizado",
    "decoración con materiales reciclados",
    "muebles artesanales sostenibles",
    "diseño de muebles con resina",
    "mobiliario artístico ecológico",
    "muebles de diseño sostenible",
    "resina epoxi reciclada",
    "mobiliario contemporáneo ecológico",
    "muebles únicos y sostenibles",
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