import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MaterialesContent from '../components/MaterialesContent';
import PageTransition from '../components/PageTransition';

export const metadata = {
  title: "Materiales - Resina Epoxi y Reciclados | VertexArt",
  description: "Conoce los materiales que utilizamos: resina epoxi de alta calidad y materiales reciclados como madera noble e hierro. Sostenibilidad y durabilidad en cada proyecto.",
  keywords: ["resina epoxi", "materiales reciclados", "madera reciclada", "hierro reciclado", "sostenibilidad", "materiales ecológicos"],
};

export default function MaterialesPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <MaterialesContent />
      </PageTransition>
      <Footer />
    </>
  );
} 