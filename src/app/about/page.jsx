import React from 'react';
import styles from './About.module.css'; // Importa los estilos
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.imageContainer}> {/* Contenedor para la imagen y el título */}
        <img src="/images/nosotros.webp" alt="Imagen Superior" className={styles.topImage} />
        <h2 className={styles.overlayTitle}>Nosotros</h2>
      </div>
      <div className={styles.aboutContainer}> 
        <h1>Project Art</h1>
        <p>
          "Project Art" es una empresa especializada en el diseño y tratamiento de encimeras de cocina y muebles exclusivos,
          elaborados con materiales reciclados. Nos enfocamos en fusionar sostenibilidad y diseño innovador,
          transformando recursos reciclados en piezas únicas que destacan por su calidad y estilo.
        </p>
        <p>
          Nuestro proceso combina técnicas modernas, como el uso de resina epoxi, con un enfoque artesanal,
          asegurando acabados excepcionales que respetan el medio ambiente. En "Project Art", convertimos ideas en realidad,
          ofreciendo soluciones personalizadas para hogares y espacios que buscan un equilibrio entre funcionalidad,
          estética y responsabilidad ecológica.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;