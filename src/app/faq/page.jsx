import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import PageTransition from '../components/PageTransition';
import styles from './FAQ.module.css';

export const metadata = {
  title: "Preguntas Frecuentes - VertexArt",
  description: "Resuelve todas tus dudas sobre resina epoxi, procesos, mantenimiento y proyectos personalizados. Todo lo que necesitas saber sobre nuestros servicios.",
  keywords: ["FAQ VertexArt", "preguntas frecuentes", "resina epoxi dudas", "mantenimiento epoxi", "proceso trabajo"],
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <div className={styles.faqPageHeader}>
          <div className={styles.faqContainer}>
            <h1>Preguntas Frecuentes</h1>
            <p>Resuelve todas tus dudas sobre nuestros procesos, materiales y servicios</p>
          </div>
        </div>
        <FAQ />
      </PageTransition>
      <Footer />
    </>
  );
} 