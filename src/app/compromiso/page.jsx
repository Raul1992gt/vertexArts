import React from 'react';
import styles from './Compromiso.module.css'; // Importa los estilos
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Compromiso = () => {
  return (
    <div>
      <Header />
      <div className={styles.imageContainer}>
        <img src="/images/compromiso.webp" alt="Compromiso de Project Art" className={styles.backgroundImage} />
        <h2 className={styles.overlayTitle}>Compromiso</h2>
      </div>
      <div className={styles.compromisoContainer}> {/* Usa los estilos importados */}
        <h1>Project Art Compromiso</h1>
        <p>
          En Project Art, nuestro compromiso con el cliente y la sostenibilidad está en el centro de todo lo que hacemos. Creemos en construir relaciones basadas en la confianza, 
          la transparencia y la atención personalizada, asegurándonos de que cada proyecto refleje tus necesidades, estilo y visión.
        </p>
        <p>
          Desde el primer contacto, nos dedicamos a entender tus ideas y convertirlas en realidad, ofreciendo soluciones a medida que combinen funcionalidad, diseño y calidad excepcional. 
          Valoramos cada detalle y trabajamos arduamente para superar tus expectativas, entregando resultados que no solo sean prácticos, sino también inspiradores.
        </p>
        <p>
          Además, estamos profundamente comprometidos con la sostenibilidad. Utilizamos materiales reciclados como madera y hierro, y apostamos por procesos responsables que minimicen nuestro impacto ambiental. 
          Al elegir Project Art, no solo estás adquiriendo piezas únicas y duraderas, sino que también estás contribuyendo a un futuro más sostenible.
        </p>
        <p>
          Nuestra misión es ofrecer productos que no solo embellezcan tus espacios, sino que también respeten el planeta y reflejen el valor de un trabajo ético y consciente. 
          En Project Art, diseñamos con propósito, creamos con pasión y siempre ponemos a nuestros clientes y al medio ambiente en primer lugar.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Compromiso;