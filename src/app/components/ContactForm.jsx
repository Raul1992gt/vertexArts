import styles from '../../styles/ContactForm.module.css';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ContactForm() {
  const { targetRef: titleRef, hasIntersected: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { targetRef: formRef, hasIntersected: formVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: imageRef, hasIntersected: imageVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`scroll-reveal-scale ${titleVisible ? 'visible' : ''}`}
        >
          ¿Tienes un proyecto en mente?
        </h2>
        <p className={styles.subtitle}>
          Cuéntanos tu idea y te ayudamos a hacerla realidad con materiales únicos y diseño personalizado.
        </p>
        
        <div className={styles.contactContent}>
          <div 
            ref={formRef}
            className={`${styles.formContainer} scroll-reveal-left ${formVisible ? 'visible' : ''}`}
          >
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+34 xxx xxx xxx"
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="project">Tipo de Proyecto</label>
                <select id="project" name="project">
                  <option value="">Selecciona una opción</option>
                  <option value="encimera">Encimera de Cocina/Baño</option>
                  <option value="mesa">Mesa (Comedor/Río/Centro)</option>
                  <option value="suelo">Suelo Decorativo</option>
                  <option value="mobiliario">Mobiliario Personalizado</option>
                  <option value="decoracion">Elemento Decorativo</option>
                  <option value="otro">Otro (especificar en mensaje)</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="budget">Presupuesto Estimado</label>
                <select id="budget" name="budget">
                  <option value="">Selecciona un rango</option>
                  <option value="500-1000">500€ - 1.000€</option>
                  <option value="1000-2500">1.000€ - 2.500€</option>
                  <option value="2500-5000">2.500€ - 5.000€</option>
                  <option value="5000+">Más de 5.000€</option>
                  <option value="consultar">Prefiero consultar</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message">Describe tu proyecto *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Cuéntanos en detalle qué tienes en mente: dimensiones, colores, estilo, ubicación, materiales específicos que quieras incluir..."
                  rows="6"
                ></textarea>
              </div>
              
              <div className={styles.inputGroup}>
                <label className={styles.checkbox}>
                  <input type="checkbox" required />
                  <span className={styles.checkmark}></span>
                  Acepto la política de privacidad y el tratamiento de mis datos
                </label>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Enviar Consulta
              </button>
            </form>
          </div>
          
          <div 
            ref={imageRef}
            className={`${styles.imageContainer} scroll-reveal-right ${imageVisible ? 'visible' : ''}`}
          >
            <Image 
              src="/vertexArts/images/contacto.webp" 
              alt="Taller de VertexArt con proyectos de resina epoxi en proceso" 
              width={600} 
              height={800} 
              className={styles.contactImage}
            />
            <div className={styles.contactInfo}>
              <h3>Información de Contacto</h3>
              <div className={styles.contactItem}>
                <strong>📧 Email:</strong>
                <span>info@vertexart.es</span>
              </div>
              <div className={styles.contactItem}>
                <strong>📱 Teléfono:</strong>
                <span>+34 xxx xxx xxx</span>
              </div>
              <div className={styles.contactItem}>
                <strong>📍 Ubicación:</strong>
                <span>Barcelona, España</span>
              </div>
              <div className={styles.contactItem}>
                <strong>⏰ Horario:</strong>
                <span>Lun-Vie: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 