import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: "url('/images/banner.webp')" }}
    >
      <div className={styles.textContainer}> {/* Contenedor para el texto */}
        <h2>Mobiliario único con Resina Epoxi</h2>
        <p>Dale un toque sofisticado a tu espacio con nuestros muebles personalizados.</p>
      </div>
    </section>
  );
};

export default Banner;