import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Mobiliario de Resina Epoxi Madrid | Muebles Artesanales | VertexArt",
  description: "VertexArt Madrid: mobiliario artesanal único con resina epoxi y materiales reciclados. Encimeras, mesas, suelos y decoración sostenible en Madrid. Especialistas en mobiliario personalizado.",
  keywords: [
    "muebles de resina epoxi Madrid",
    "encimeras resina epoxi Madrid",
    "mobiliario artesanal Madrid",
    "muebles artesanales Madrid",
    "mobiliario sostenible Madrid",
    "decoración con resina epoxi Madrid",
    "diseño de interiores sostenible Madrid",
    "muebles personalizados Madrid",
    "arte en resina epoxi Madrid",
    "mobiliario hecho a mano Madrid",
    "VertexArt Madrid",
    "muebles reciclados Madrid",
    "encimeras personalizadas Madrid",
    "suelos resina epoxi Madrid",
    "decoración ecológica Madrid",
    "mesas de río resina epoxi Madrid",
    "mobiliario contemporáneo Madrid",
    "artesanos resina epoxi Madrid",
    "ebanistería sostenible Madrid",
    "diseño de muebles Madrid",
  ],
  // Configuración de iconos y favicon
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/images/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  // Open Graph para redes sociales y Google
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://vertexarts.es',
    siteName: 'VertexArt',
    title: 'Mobiliario de Resina Epoxi y Reciclado | VertexArt',
    description: 'VertexArt crea mobiliario único y sostenible con resina epoxi y materiales reciclados. Descubre piezas de arte funcionales y ecológicas para tu hogar.',
    images: [
      {
        url: '/images/mobiliario/mesa_rio_mia_web.png',
        width: 1200,
        height: 630,
        alt: 'Mesa de río con resina epoxi - VertexArt',
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@vertexart',
    title: 'Mobiliario de Resina Epoxi y Reciclado | VertexArt',
    description: 'VertexArt crea mobiliario único y sostenible con resina epoxi y materiales reciclados.',
    images: ['/images/mobiliario/mesa_rio_mia_web.png'],
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VertexArt",
    "description": "Empresa especializada en mobiliario artesanal y decoración con resina epoxi y materiales reciclados en Madrid",
    "url": "https://vertexarts.es",
    "telephone": "+34-XXX-XXX-XXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Madrid",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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