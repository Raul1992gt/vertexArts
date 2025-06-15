import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

export const metadata = {
  title: "Especialidades - Proyectos de Resina Epoxi | VertexArt",
  description: "Descubre nuestras especialidades: encimeras, mobiliario, suelos y decoración con resina epoxi. Cada pieza es única, sostenible y hecha a medida para transformar espacios.",
  keywords: ["especialidades VertexArt", "proyectos resina epoxi", "categorías", "encimeras mobiliario suelos decoración"],
};

export default function CategoriasPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Gallery />
      </PageTransition>
      <Footer />
    </>
  );
} 