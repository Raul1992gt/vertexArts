import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <Hero />
      </PageTransition>
      <Footer />
    </>
  );
}