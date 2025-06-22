import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Encimeras de Resina Epoxi | VertexArt",
  description: "Encimeras de resina epoxi personalizadas con efectos únicos de madera, piedra y mármol. Resistentes, impermeables y completamente personalizables para tu hogar.",
  keywords: ["encimeras resina epoxi", "encimeras personalizadas", "encimeras cocina", "resina epoxi madera"],
};

const imagenes = [
  'baño.png',
  'cocina_piedra.png',
  'Encimera de isla.png',
  'Encimeras.png',
  'granito1.png',
  'granito2.png',
  'madera2.png',
  'marmol1.png',
  'marmol2.png',
  'marmol3.png',
  'marmol4.png',
  'marmol6.png',
  'onyx1.png',
  'onyx2.jpg'
];

export default function EncimerasPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo='"Encimeras personalizadas, estilo, funcionalidad y sostenibilidad en cada detalle"'
          descripcion="Diseño a medida, elegancia sin límites
            En Vertex Arts transformamos tu cocina o baño en un espacio único, creando encimeras artesanales con resina epoxi de alta calidad y acabados que imitan a la perfección materiales nobles como el mármol, el granito, la madera o el ónix. Cada proyecto es una pieza exclusiva: no hay dos iguales.
            La resina epoxi nos permite lograr superficies continuas, brillantes y resistentes, que no solo deslumbran por su estética, sino que garantizan durabilidad frente a la humedad, el calor o el uso diario. Gracias a nuestra técnica y experiencia, fusionamos arte y funcionalidad en cada encimera.
            Ya sea que busques un estilo moderno, natural o sofisticado, te ofrecemos soluciones totalmente personalizadas que elevan tu espacio con carácter, diseño y sostenibilidad.
            Vertex Arts. Donde cada encimera es una obra irrepetible."
          carpeta="encimeras"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 