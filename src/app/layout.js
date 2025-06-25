import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VertexArt",
    "description": "Empresa especializada en mobiliario y decoración con resina epoxi y materiales reciclados",
    "url": "https://vertexart.es",
    "telephone": "+34-XXX-XXX-XXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressRegion": "Madrid"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
            "image": "/images/logo.png",
    "priceRange": "€€",
    "serviceArea": "España",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios VertexArt",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Encimeras de Resina Epoxi",
            "description": "Encimeras personalizadas de resina epoxi resistentes e impermeables"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mobiliario de Resina y Madera Reciclada",
            "description": "Muebles únicos combinando resina epoxi con materiales reciclados"
          }
        }
      ]
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body className={`${inter.variable}`}> 
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}