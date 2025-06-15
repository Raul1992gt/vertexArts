import styles from '../../styles/AboutSection.module.css';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2>Sobre Nosotros</h2>

      {/* --- PRIMERA FILA --- */}
      <div className={styles.row}>
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
      <div className={styles.row}>
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