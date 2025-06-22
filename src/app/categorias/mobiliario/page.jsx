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
  'ajedrez_web.png',
  'mesa de rio.png',
  'mesa_grande.png',
  'mesa_resina.png',
  'mesa_rio_mia_web.png',
  'mesa_tambor.png',
  'mobiliario.png',
  'Mobiliario2.png',
  'tabla_corte3.jpg',
];

export default function MobiliarioPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo='"Mobiliario artesanal con materiales de primera calidad y reciclados para crear un diseño con historia"'
          descripcion='"Creamos muebles únicos que fusionan arte y funcionalidad. Nuestras mesas, estanterías y piezas decorativas están hechas con materiales de primera calidad, materiales reciclados y elementos externos, resultando en piezas irrepetibles que se convierten en el punto focal de cualquier espacio. Cada mueble cuenta una historia y está diseñado para durar generaciones."'
          carpeta="mobiliario"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 