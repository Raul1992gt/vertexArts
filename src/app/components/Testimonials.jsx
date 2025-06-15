import styles from '../../styles/Testimonials.module.css';

const testimonios = [
  {
    nombre: "María González",
    proyecto: "Encimera de Cocina",
    testimonio: "La encimera de resina epoxi superó todas mis expectativas. Es resistente, hermosa y completamente única. El efecto madera es espectacular.",
    ubicacion: "Madrid"
  },
  {
    nombre: "Carlos Ruiz",
    proyecto: "Mesa Río de Nogal",
    testimonio: "Transformaron una vieja viga de mi casa familiar en una mesa increíble. El proceso fue profesional y el resultado, simplemente arte funcional.",
    ubicacion: "Barcelona"
  },
  {
    nombre: "Ana Martín",
    proyecto: "Suelo de Garaje",
    testimonio: "Mi garaje pasó de ser un espacio olvidado a mi lugar favorito de la casa. El suelo de resina es duradero y fácil de mantener.",
    ubicacion: "Valencia"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsHeader}>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Cada proyecto es una historia de transformación y satisfacción</p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          {testimonios.map((testimonio, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>
                <span className={styles.quoteIcon}>"</span>
                <p>{testimonio.testimonio}</p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorInfo}>
                  <h4>{testimonio.nombre}</h4>
                  <span className={styles.authorProject}>{testimonio.proyecto}</span>
                  <span className={styles.authorLocation}>{testimonio.ubicacion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 