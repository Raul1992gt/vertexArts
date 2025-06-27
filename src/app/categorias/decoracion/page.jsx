import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Decoración con Resina Epoxi Madrid | Espacios Comerciales | VertexArt",
  description: "Decoración única con resina epoxi en Madrid para restaurantes, hoteles y espacios comerciales. Paneles artísticos y elementos arquitectónicos personalizados en Madrid.",
  keywords: [
    "decoración con resina epoxi Madrid",
    "paneles decorativos Madrid",
    "arte resina Madrid", 
    "decoración comercial Madrid",
    "elementos arquitectónicos Madrid",
    "decoración restaurantes Madrid",
    "decoración hoteles Madrid",
    "ambientación espacios Madrid",
    "interiorismo resina epoxi Madrid",
    "diseño decorativo Madrid"
  ],
};

const imagenes = [
  'restaurante.webp',
  'discoteca.webp',
  'decoracion.webp',
];

export default function DecoracionPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo='"Decoración de grandes espacios con ambientes únicos personalizados y sostenibles"'
          descripcion="Transformamos espacios con elementos decorativos únicos que van más allá de lo convencional. Desde paneles artísticos hasta elementos arquitectónicos personalizados, cada pieza está diseñada para crear ambientes inolvidables. Perfectos para restaurantes, hoteles, discotecas y espacios comerciales que buscan diferenciarse con un diseño original y sofisticado."
          carpeta="decoracion"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 