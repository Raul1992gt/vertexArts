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
  'suelos01.png',
  'suelos3.png',
  'suelos4.png',
  'suelos5.png',
  'suelos6.png',
  'Suelos7.png',
  'suelos9.png',
  'suelos11.png',
];

export default function SuelosPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <CategoryPage 
          titulo='"Transforma cualquier espacio con resistencia y diseño"'
          descripcion="Durabilidad, diseño y carácter bajo tus pies
            En Vertex Arts, los suelos no son solo una superficie: son una declaración de estilo. Especialistas en suelos de resina epoxi, ofrecemos soluciones únicas que combinan resistencia industrial, acabados exclusivos y un marcado sentido estético. Cada suelo que diseñamos transforma espacios residenciales, comerciales o industriales con personalidad y funcionalidad.
            Desde efectos marmoleados, metálicos, minimalistas o con acabados artísticos, nuestras resinas permiten una personalización total, adaptándose a cualquier estilo y necesidad. La alta resistencia a impactos, humedad, productos químicos y el desgaste diario, los convierte en una elección práctica, duradera y visualmente sorprendente.
            Utilizamos materiales reciclados siempre que es posible y aplicamos técnicas precisas que garantizan un acabado impecable, continuo y fácil de mantener. Ya sea para una vivienda moderna, un local comercial o un entorno creativo, creamos superficies que no solo soportan el tiempo, sino que lo redefinen con arte.
            Vertex Arts. Pisos con diseño, alma y resistencia."
          carpeta="suelo"
          imagenes={imagenes}
        />
      </PageTransition>
      <Footer />
    </>
  );
} 