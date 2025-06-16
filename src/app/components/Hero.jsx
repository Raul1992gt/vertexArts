import styles from '../../styles/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Hero() {
  const { targetRef: titleRef, hasIntersected: titleVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: subtitleRef, hasIntersected: subtitleVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: descRef, hasIntersected: descVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image src="/vertexArts/images/mobiliario/mesa_rio_mia_web.webp" alt="Mesa de resina" fill priority className={styles.heroImage} />
        <div className={styles.overlay}></div>
        <div className={styles.textContent}>
          <h1 
            ref={titleRef}
            className={`scroll-reveal-left ${titleVisible ? 'visible' : ''}`}
          >
            <span className={styles.accent}>Vertex</span>Art
          </h1>
          <p 
            ref={subtitleRef}
            className={`${styles.subtitle} scroll-reveal ${subtitleVisible ? 'visible' : ''}`}
          >
            Especialistas en resina epoxi
          </p>
          <p 
            ref={descRef}
            className={`${styles.description} scroll-reveal-right ${descVisible ? 'visible' : ''}`}
          >
            Transformamos espacios con piezas únicas de resina epoxi. Diseño, arte y funcionalidad en perfecta armonía.
          </p>
          <Link href="/categorias" className={styles.button}>Ver Especialidades</Link>
        </div>
      </div>
    </section>
  );
} 