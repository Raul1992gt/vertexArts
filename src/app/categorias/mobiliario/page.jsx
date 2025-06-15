import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Mobiliario de Resina Epoxi | VertexArt",
  description: "Muebles únicos de resina epoxi y materiales reciclados. Mesas, estanterías y piezas decorativas irrepetibles que se convierten en el punto focal de cualquier espacio.",
  keywords: ["muebles resina epoxi", "mobiliario reciclado", "mesas resina", "muebles personalizados", "mesa río epoxi"],
};

const imagenes = [
  'vertexArt.webp',
  'tabla_corte3.webp',
  'mobiliario3.webp',
  'mobiliario_3.webp',
  'mesa_rio_mia_web.webp',
  'mesa_grande.webp',
  'mesa de rio.webp',
  'ajedrez_web.webp',
];

export default function MobiliarioPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo="Mobiliario"
          descripcion="Creamos muebles únicos que fusionan arte y funcionalidad. Nuestras mesas, estanterías y piezas decorativas están hechas con resina epoxi y materiales reciclados, resultando en piezas irrepetibles que se convierten en el punto focal de cualquier espacio. Cada mueble cuenta una historia y está diseñado para durar generaciones."
          carpeta="mobiliario"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 