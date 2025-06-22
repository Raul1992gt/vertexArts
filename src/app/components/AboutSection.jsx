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
          "Empresa especializada en diseño y tratamiento de encimeras y mobiliario exclusivo"
        </h2>
        <div 
          ref={textRef}
          className={`${styles.content} scroll-reveal ${textVisible ? 'visible' : ''}`}
        >
        </div>
      </div>

      {/* --- PRIMERA FILA --- */}
      <div 
        ref={row1Ref}
        className={`${styles.row} scroll-reveal-left ${row1Visible ? 'visible' : ''}`}
      >
        <div className={styles.imageContainer}>
          <Image src="/vertexArts/images/mezcla_logo.png" alt="Taller de VertexArt con herramientas y proyectos de resina epoxi en proceso de creación" width={400} height={250} className={styles.bnw} />
        </div>
        <div className={styles.textContainer}>
          <h3>Nuestra Historia</h3>
          <p>
            Pasión por crear. Compromiso con cada detalle.
            En Vertex Arts nacimos con una idea clara: transformar materiales nobles como la resina epoxi y maderas de primera calidad en piezas únicas que combinen arte, funcionalidad y durabilidad. 
          </p>
          <p>
            Cada proyecto refleja nuestra dedicación, desde la elección del material hasta el último acabado.
          </p>
          <p>            
            No fabricamos en serie. Trabajamos cada encimera, mueble o revestimiento como una obra exclusiva, cuidando cada detalle y escuchando las necesidades reales de nuestros clientes. Nuestro compromiso es con la calidad, la estética y el servicio cercano.        
            Vertex Arts es esfuerzo, diseño y pasión por lo bien hecho
          </p>
        </div>
      </div>

      {/* --- SEGUNDA FILA --- */}
      <div 
        ref={row2Ref}
        className={`${styles.row} scroll-reveal-right ${row2Visible ? 'visible' : ''}`}
      >
        <div className={styles.imageContainer}>
          <Image src="/vertexArts/images/about.png" alt="Artesano de VertexArt trabajando con resina epoxi y madera reciclada en el proceso de creación" width={400} height={250} className={styles.bnw} />
        </div>
        <div className={styles.textContainer}>
          <h3>Nuestro Proceso</h3>
          <p>
          Cada creación nace de una conversación, una idea, un sueño compartido. Elegimos con precisión maderas excepcionales y metales de carácter, combinándolos con la elegancia y versatilidad de la resina epoxi.
          </p>
          <p>
          Nuestro método artesanal comienza con un análisis exhaustivo de las necesidades y gustos de cada cliente. Estudiamos el espacio, la funcionalidad requerida y el estilo deseado para crear un diseño completamente personalizado que supere las expectativas.
          </p>
          <p>
          En nuestro taller, cada material pasa por un riguroso proceso de preparación: selección manual, lijado preciso, tratamiento específico y curado controlado. La combinación con resina epoxi se realiza con técnicas avanzadas que garantizan la máxima adherencia y durabilidad.
          </p>
          <p>
          Con manos expertas, moldeamos, pulimos y perfeccionamos cada pieza hasta convertirla en una obra única. No solo embellecen los espacios, sino que transmiten emociones, cuentan historias y reflejan la esencia de quien las imagina.
          </p>
        </div>
      </div>
    </section>
  );
}