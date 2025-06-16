"use client";

import styles from '../../styles/AboutSection.module.css';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function AboutSection() {
  const { targetRef: titleRef, hasIntersected: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { targetRef: textRef, hasIntersected: textVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: row1Ref, hasIntersected: row1Visible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: row2Ref, hasIntersected: row2Visible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`scroll-reveal-scale ${titleVisible ? 'visible' : ''}`}
        >
          ¿Quiénes somos?
        </h2>
        <div 
          ref={textRef}
          className={`${styles.content} scroll-reveal ${textVisible ? 'visible' : ''}`}
        >
          <p>
            En <strong>VertexArt</strong>, somos especialistas en la creación de <strong>piezas únicas de resina epoxi</strong> y materiales reciclados. 
            Nuestro compromiso va más allá de lo estético: combinamos <strong>arte, sostenibilidad y funcionalidad</strong> 
            para transformar espacios con diseños personalizados que perduran en el tiempo.
          </p>
          
          <p>
            Cada proyecto es una oportunidad para dar vida a tus ideas más creativas. Desde <strong>encimeras de cocina</strong> 
            hasta <strong>mesas río</strong>, <strong>suelos decorativos</strong> y <strong>elementos de decoración únicos</strong>, 
            trabajamos contigo para crear piezas que reflejen tu personalidad y se adapten perfectamente a tu espacio.
          </p>
          
          <p>
            Nos especializamos en técnicas avanzadas de resina epoxi que nos permiten lograr efectos visuales espectaculares: 
            desde <strong>texturas de piedra natural</strong> hasta <strong>diseños translúcidos</strong> que juegan con la luz. 
            Todo esto con la garantía de la máxima durabilidad y resistencia.
          </p>
        </div>
      </div>

      {/* --- PRIMERA FILA --- */}
      <div 
        ref={row1Ref}
        className={`${styles.row} scroll-reveal-left ${row1Visible ? 'visible' : ''}`}
      >
        <div className={styles.imageContainer}>
          <Image src="/vertexArts/images/nosotros.webp" alt="Taller de VertexArt con herramientas y proyectos de resina epoxi en proceso de creación" width={400} height={250} className={styles.bnw} />
        </div>
        <div className={styles.textContainer}>
          <h3>Nuestra Historia</h3>
          <p>
            VertexArt nace de la pasión por el arte funcional y el diseño sostenible. Creamos piezas únicas combinando resina epoxi y materiales reciclados, fusionando creatividad y respeto por el medio ambiente.
          </p>
          <p>
            Cada proyecto es una obra de arte hecha a mano, pensada para transformar espacios y contar historias a través de la materia.
          </p>
        </div>
      </div>

      {/* --- SEGUNDA FILA --- */}
      <div 
        ref={row2Ref}
        className={`${styles.row} scroll-reveal-right ${row2Visible ? 'visible' : ''}`}
      >
        <div className={styles.imageContainer}>
          <Image src="/vertexArts/images/about.webp" alt="Artesano de VertexArt trabajando con resina epoxi y madera reciclada en el proceso de creación" width={400} height={250} className={styles.bnw} />
        </div>
        <div className={styles.textContainer}>
          <h3>Nuestro Proceso</h3>
          <p>
            Cada creación comienza con una conversación, una idea, un sueño. Seleccionamos cuidadosamente maderas con historia y metales que han vivido, dándoles nueva vida a través de la magia de la resina epoxi.
          </p>
          <p>
            Nuestras manos moldean, pulen y perfeccionan cada detalle hasta crear piezas únicas que no solo decoran, sino que cuentan historias y despiertan emociones.
          </p>
        </div>
      </div>
    </section>
  );
}