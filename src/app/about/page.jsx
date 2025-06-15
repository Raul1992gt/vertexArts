import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

export const metadata = {
  title: "Sobre Nosotros - VertexArt",
  description: "VertexArt: Arte funcional y diseño sostenible. Creamos piezas únicas combinando resina epoxi y materiales reciclados. Cada proyecto cuenta una historia única.",
  keywords: ["VertexArt", "arte funcional", "diseño sostenible", "taller artesanal", "proceso creativo"],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <AboutSection />
        <Testimonials />
      </PageTransition>
      <Footer />
    </>
  );
}
