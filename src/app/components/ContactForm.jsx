"use client";

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
          ¿Tienes una idea?
        </h2>
        <p className={styles.subtitle}>
          Cuéntanos tu proyecto y te ayudamos a hacerlo realidad
        </p>
        
        <div className={styles.contactContent}>
          <div 
            ref={imageRef}
            className={`${styles.imageContainer} scroll-reveal-left ${imageVisible ? 'visible' : ''}`}
          >
            <Image 
              src="/vertexArts/images/mobiliario/ajedrez_web.webp" 
              alt="Tablero de ajedrez de resina epoxi y madera artesanal creado por VertexArt" 
              width={500} 
              height={350} 
              className={styles.contactImage}
            />
          </div>
          
          <div 
            ref={formRef}
            className={`${styles.formContainer} scroll-reveal-right ${formVisible ? 'visible' : ''}`}
          >
            <form className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Nombre" 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <textarea 
                  name="message" 
                  placeholder="Cuéntanos tu idea..." 
                  rows="5"
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 