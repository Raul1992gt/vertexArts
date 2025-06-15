import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Suelos de Resina Epoxi | VertexArt", 
  description: "Suelos de resina epoxi duraderos y estéticamente impactantes. Ideales para garajes, cocinas industriales y espacios comerciales. Resistentes y fáciles de limpiar.",
  keywords: ["suelos resina epoxi", "pavimentos industriales", "suelos garaje", "resina epoxi decorativa"],
};

const imagenes = [
  'terminacion marmolizado_8.webp',
  'terminacion granito_7.webp',
  'terminacion blanca_6.webp',
  'suelos2_5.webp',
  'suelos_4.webp',
  'garaje_3.webp',
  'cockteleria_2.webp',
  'aplicacion suelos_1.webp',
];

export default function SuelosPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo="Suelos"
          descripcion="Nuestros suelos de resina epoxi ofrecen una solución duradera y estéticamente impactante para cualquier espacio. Ideales para garajes, cocinas industriales, showrooms y espacios comerciales, proporcionan una superficie continua, resistente a químicos y fácil de limpiar. Disponibles en múltiples acabados: desde efectos marmolados hasta texturas granuladas."
          carpeta="suelo"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 