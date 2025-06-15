import styles from '../../styles/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image src="/images/mobiliario/mesa_rio_mia_web.webp" alt="Mesa de resina" fill priority className={styles.heroImage} />
        <div className={styles.overlay}></div>
        <div className={styles.textContent}>
          <h1>Arte Funcional, Diseño Único</h1>
          <p>VertexArt: Mobiliario y decoración en resina epoxi y materiales reciclados.</p>
          <Link href="/categorias" className={styles.button}>Ver Proyectos</Link>
        </div>
      </div>
    </section>
  );
} 