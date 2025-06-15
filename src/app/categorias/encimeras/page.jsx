import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';

export const metadata = {
  title: "Encimeras de Resina Epoxi | VertexArt",
  description: "Encimeras de resina epoxi personalizadas con efectos únicos de madera, piedra y mármol. Resistentes, impermeables y completamente personalizables para tu hogar.",
  keywords: ["encimeras resina epoxi", "encimeras personalizadas", "encimeras cocina", "resina epoxi madera"],
};

const imagenes = [
  'vertido_encimera.webp',
  'encimera_madera.webp',
  'encimera_granito.webp',
  'efecto_piedra_web.webp',
  'efecto_marmol_web.webp',
  'efecto madera_web2.webp',
  'cockteleria.webp',
];

export default function EncimerasPage() {
  return (
    <>
      <Navbar />
      <CategoryPage 
        titulo="Encimeras"
        descripcion="Nuestras encimeras combinan la durabilidad de la resina epoxi con diseños únicos que imitan texturas naturales como madera, piedra y mármol. Cada encimera es resistente, fácil de mantener y completamente personalizable para adaptarse a tu estilo de vida. Perfectas para cocinas, baños y espacios comerciales donde la funcionalidad se encuentra con el arte."
        carpeta="encimeras"
        imagenes={imagenes}
      />
      <Footer />
    </>
  );
} 