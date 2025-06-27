import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Muebles Artesanales Madrid | Mobiliario Resina Epoxi | VertexArt",
  description: "Muebles artesanales únicos en Madrid con resina epoxi y materiales reciclados. Mesas de río, mobiliario personalizado y piezas decorativas irrepetibles. Creación artesanal en Madrid.",
  keywords: [
    "muebles artesanales Madrid",
    "mobiliario resina epoxi Madrid", 
    "mesas de río Madrid",
    "muebles personalizados Madrid",
    "mesa río epoxi Madrid",
    "mobiliario reciclado Madrid",
    "muebles hecho a mano Madrid",
    "ebanistería artesanal Madrid",
    "mesas resina Madrid",
    "mobiliario sostenible Madrid"
  ],
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