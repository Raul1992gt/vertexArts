import styles from '../../styles/AboutSection.module.css';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2>Sobre Nosotros</h2>

      {/* --- PRIMERA FILA --- */}
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <Image src="/images/nosotros.webp" alt="Taller VertexArt" width={400} height={250} className={styles.bnw} />
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
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <Image src="/images/about.webp" alt="Creando arte" width={400} height={250} className={styles.bnw} />
        </div>
        <div className={styles.textContainer}>
          <h3>Nuestro Proceso</h3>
          <p>
            "Vertex Art" es una empresa especializada en el diseño y tratamiento de encimeras de cocina y muebles exclusivos, elaborados con materiales reciclados. Nos enfocamos en fusionar sostenibilidad y diseño innovador, transformando recursos reciclados en piezas únicas que destacan por su calidad y estilo.
          </p>
          <p>
            Nuestro proceso combina técnicas modernas, como el uso de resina epoxi, con un enfoque artesanal, asegurando acabados excepcionales que respetan el medio ambiente. En "Vertex Art", convertimos ideas en realidad, ofreciendo soluciones personalizadas para hogares y espacios que buscan un equilibrio entre funcionalidad, estética y responsabilidad ecológica.
          </p>
        </div>
      </div>
      
    </section>
  );
}