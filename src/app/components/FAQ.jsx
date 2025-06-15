"use client";

import { useState } from 'react';
import styles from '../../styles/FAQ.module.css';

const faqs = [
  {
    pregunta: "¿Cuánto dura una encimera de resina epoxi?",
    respuesta: "Una encimera de resina epoxi de calidad puede durar más de 20 años con el cuidado adecuado. Es extremadamente resistente al desgaste, golpes y productos químicos domésticos."
  },
  {
    pregunta: "¿Trabajáis con materiales del cliente?",
    respuesta: "¡Por supuesto! Nos encanta trabajar con maderas, metales u otros materiales que tengan valor sentimental para ti. Evaluamos cada caso para asegurar el mejor resultado."
  },
  {
    pregunta: "¿Cuánto tiempo tarda un proyecto personalizado?",
    respuesta: "Dependiendo de la complejidad, un proyecto puede tardar entre 2-6 semanas. Esto incluye diseño, preparación de materiales, fabricación y curado completo de la resina."
  },
  {
    pregunta: "¿La resina epoxi es segura para uso alimentario?",
    respuesta: "Sí, utilizamos resinas epoxi certificadas para contacto alimentario una vez completamente curadas. Son seguras para encimeras de cocina y superficies donde se prepare comida."
  },
  {
    pregunta: "¿Hacéis proyectos en toda España?",
    respuesta: "Trabajamos principalmente en la comunidad de Madrid y alrededores para proyectos de instalación. Para piezas de mobiliario, podemos enviar a toda España."
  },
  {
    pregunta: "¿Cómo se mantiene la resina epoxi?",
    respuesta: "El mantenimiento es muy simple: limpieza con agua y jabón neutro. Evitar productos abrasivos y objetos muy calientes directamente sobre la superficie."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>        
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.pregunta}</span>
                <span className={styles.faqIcon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 