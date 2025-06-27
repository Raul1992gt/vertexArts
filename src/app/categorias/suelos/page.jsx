import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CategoryPage from '../../components/CategoryPage';
import PageTransition from '../../components/PageTransition';

export const metadata = {
  title: "Suelos de Resina Epoxi Madrid | Pavimentos Industriales | VertexArt", 
  description: "Suelos de resina epoxi duraderos en Madrid para hogares, garajes y espacios comerciales. Pavimentos industriales decorativos y resistentes. Instalación profesional en Madrid.",
  keywords: [
    "suelos resina epoxi Madrid",
    "pavimentos industriales Madrid", 
    "suelos garaje Madrid",
    "resina epoxi decorativa Madrid",
    "pavimentos decorativos Madrid",
    "suelos industriales Madrid",
    "instalación suelos resina Madrid",
    "pavimentos comerciales Madrid",
    "suelos continuos Madrid",
    "acabados resina epoxi Madrid"
  ],
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