"use client";

import { useState } from 'react';
import styles from '../../styles/MaterialesContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useStaggeredIntersection, useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function MaterialesContent() {
  const { targetRef: titleRef, hasIntersected: titleVisible } = useIntersectionObserver({ threshold: 0.3 });
  const { targetRef: subtitleRef, hasIntersected: subtitleVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: resinRef, hasIntersected: resinVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: woodRef, hasIntersected: woodVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { targetRef: metalRef, hasIntersected: metalVisible } = useIntersectionObserver({ threshold: 0.2 });

  const { targetRef: processRef, hasIntersected: processVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { containerRef, visibleItems } = useStaggeredIntersection(4); // 4 elementos en el grid
  
  // Estados para controlar la expansión de cada material
  const [isResinExpanded, setIsResinExpanded] = useState(false);
  const [isWoodExpanded, setIsWoodExpanded] = useState(false);
  const [isMetalExpanded, setIsMetalExpanded] = useState(false);

  return (
    <div className={styles.materialesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 
            ref={titleRef}
            className={`scroll-reveal-scale ${titleVisible ? 'visible' : ''}`}
          >
            "La excelencia en cada creación comienza con la selección de los mejores materiales. Combinamos innovación, sostenibilidad y calidad para dar vida a piezas únicas."
          </h1>
        </div>
      </section>

      {/* Resina Epoxi Section */}
      <section 
        ref={resinRef}
        className={`${styles.materialSection} scroll-reveal-left ${resinVisible ? 'visible' : ''}`}
      >
        <div className={styles.materialRow}>
          <div className={styles.materialImage}>
            <Image 
              src="/images/materiales/Resina_epoxi.png" 
              alt="Resina Epoxi en encimera" 
              width={500} 
              height={350} 
              className={styles.materialImg}
            />
          </div>
          <div className={styles.materialContent}>
            <h2>Resina Epoxi</h2>
            <p className={styles.materialDescription}>
              <strong>¿Qué es la resina epoxi?</strong>
            </p>
            <p className={styles.materialDescription}>
              La resina epoxi es un tipo de <strong>plástico termoestable</strong> que se forma al mezclar dos componentes: una resina base y un endurecedor (o catalizador). Químicamente, la mayoría de resinas epoxi derivan de la reacción entre bisfenol A y epiclorohidrina, que al combinarse con el endurecedor inician un proceso de curado químico. Durante este proceso, el material pasa de líquido viscoso a un sólido rígido mediante enlaces cruzados entre moléculas, en lugar de simplemente secarse por evaporación.
              Una vez endurecida, la resina epoxi <strong>no puede fundirse de nuevo con calor</strong> ni modificarse su forma, lo que le confiere gran estabilidad y resistencia. Esto la diferencia de los plásticos termoplásticos tradicionales y significa que se debe trabajar con cuidado en la mezcla, ya que solo endurece una vez.
              En resumen, la resina epoxi es un <strong>polímero muy versátil y adhesivo</strong>. Combina moléculas con grupos epoxi (de ahí su nombre) que reaccionan con el agente endurecedor (a menudo aminas) para formar una estructura tridimensional rígida. El resultado es un material transparente o ligeramente ámbar, de acabado brillante, con excelentes propiedades mecánicas y de aislamiento.
              Gracias a su <strong>naturaleza adhesiva</strong>, la resina epoxi se pega fuertemente a superficies como madera, metal, vidrio o cerámica, lo que la hace ideal tanto como pegamento de alta resistencia como para recubrir y proteger otros materiales.
            </p>
            
            <div className={`${styles.expandableContent} ${isResinExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                
                <h3>¿Por qué elegimos resina epoxi?</h3>
                <ul>
                  <li><strong>Durabilidad excepcional:</strong> Resistente a golpes, rayones y desgaste diario.</li>
                  <li><strong>Impermeabilidad total:</strong> No absorbe líquidos, ideal para cocinas y baños.</li>
                  <li><strong>Resistencia química:</strong> Soporta ácidos, aceites y productos de limpieza.</li>
                  <li><strong>Versatilidad estética:</strong> Permite crear efectos únicos: madera, piedra, mármol.</li>
                  <li><strong>Mantenimiento mínimo:</strong> Fácil limpieza con productos básicos.</li>
                  <li><strong>Personalización total:</strong> Colores, texturas y efectos completamente personalizables.</li>
                </ul>
              </div>

              <div className={styles.technicalInfo}>
                <h3>Características técnicas</h3>
                <p>Nuestra resina epoxi ofrece una resistencia térmica de hasta 120°C, una dureza Shore D superior a 80, y una resistencia a la compresión de más de 100 MPa. Estas propiedades la convierten en el material perfecto para aplicaciones que requieren máxima durabilidad.</p>
                
                <div className={styles.downloadSection}>
                  <a 
                    href="/pdf/Especificaciones-Materiales-VertexArts.pdf" 
                    download="Especificaciones-Materiales-VertexArts.pdf"
                    className={styles.specificationsButton}
                  >
                    🔬 Especificaciones Detalladas
                  </a>
                </div>
              </div>
            </div>
            
            <button 
              className={styles.materialExpandButton}
              onClick={() => setIsResinExpanded(!isResinExpanded)}
              aria-label={isResinExpanded ? "Ver menos" : "Ver más detalles"}
            >
              {isResinExpanded ? '↑ Ver menos' : '↓ Ver más detalles'}
            </button>
          </div>
        </div>
      </section>

      {/* Madera Section */}
      <section 
        ref={woodRef}
        className={`${styles.materialSection} scroll-reveal-right ${woodVisible ? 'visible' : ''}`}
      >
        <div className={styles.materialRow}>
          <div className={styles.materialContent}>
            <h2>Maderas de primera calidad</h2>
            <p className={styles.materialDescription}>
              <strong>Maderas seleccionadas: nobleza, carácter y sostenibilidad</strong>
            </p>
            <p className={styles.materialDescription}>
              En Vertex Arts trabajamos con <strong>maderas de primera calidad</strong>, cuidadosamente seleccionadas por su belleza, resistencia y singularidad. Utilizamos especies nobles, exóticas y exclusivas que aportan carácter a cada pieza, con vetas únicas y texturas que convierten nuestros diseños en verdaderas obras de arte funcional.
            </p>
            
            <div className={`${styles.expandableContent} ${isWoodExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                
                <p className={styles.materialDescription}>
                  Además, apostamos por la <strong>recuperación de maderas previamente utilizadas</strong>, dándoles una segunda vida a través de un proceso de tratamiento artesanal que respeta su esencia y potencia su estética. Este enfoque sostenible no solo reduce el impacto ambiental, sino que añade historia y autenticidad a cada creación.
                </p>
                <p className={styles.materialDescription}>
                  <strong>Cada tabla, cada corte, cada nudo cuenta una historia</strong>. Nosotros nos encargamos de escucharla, preservarla y convertirla en parte de tu espacio.
                </p>
              </div>
            </div>
            
            <button 
              className={styles.materialExpandButton}
              onClick={() => setIsWoodExpanded(!isWoodExpanded)}
              aria-label={isWoodExpanded ? "Ver menos" : "Ver más detalles"}
            >
              {isWoodExpanded ? '↑ Ver menos' : '↓ Ver más detalles'}
            </button>
          </div>
          <div className={styles.materialImage}>
            <Image 
              src="/images/materiales/Maderas_exclusivas.png" 
              alt="Mesa con madera reciclada" 
              width={500} 
              height={350} 
              className={styles.materialImg}
            />
          </div>
        </div>
      </section>

      {/* Hierro y Metales Section */}
      <section 
        ref={metalRef}
        className={`${styles.materialSection} scroll-reveal-left ${metalVisible ? 'visible' : ''}`}
      >
        <div className={styles.materialRow}>
          <div className={styles.materialImage}>
            <Image 
              src="/images/materiales/Hierros_metales.png" 
              alt="Estructura de hierro reciclado" 
              width={500} 
              height={350} 
              className={styles.materialImg}
            />
          </div>
          <div className={styles.materialContent}>
            <h2>Hierros, metales reciclados y elementos externos</h2>
            <p className={styles.materialDescription}>
              <strong>Hierro y metales: fuerza, carácter y diseño con alma</strong>
            </p>
            <p className={styles.materialDescription}>
              En Vertex Arts integramos <strong>hierro y metales reciclados</strong> en nuestros diseños para aportar solidez, estilo y una estética única que fusiona lo industrial con lo artesanal. Recuperamos y transformamos pletinas, ángulos, tubos y piezas metálicas en bruto, dándoles nueva vida como estructuras funcionales y elementos decorativos con personalidad propia.
            </p>
            
            <div className={`${styles.expandableContent} ${isMetalExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                
                <p className={styles.materialDescription}>
                  Cada elemento metálico es tratado con cuidado para conservar su esencia y adaptarlo al diseño final, generando <strong>contrastes elegantes</strong> con la calidez de la madera o la sutileza de la resina epoxi. También incorporamos otros materiales y elementos externos que enriquecen cada proyecto, aportando texturas y detalles que marcan la diferencia.
                </p>
                <p className={styles.materialDescription}>
                  El resultado: <strong>piezas con alma, resistentes, estéticas y totalmente personalizadas</strong>, capaces de transformar cualquier espacio.
                </p>
              </div>
            </div>
            
            <button 
              className={styles.materialExpandButton}
              onClick={() => setIsMetalExpanded(!isMetalExpanded)}
              aria-label={isMetalExpanded ? "Ver menos" : "Ver más detalles"}
            >
              {isMetalExpanded ? '↑ Ver menos' : '↓ Ver más detalles'}
            </button>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section 
        ref={processRef}
        className={`${styles.processSection} scroll-reveal-scale ${processVisible ? 'visible' : ''}`}
      >
        <div className={styles.processContent}>
          <h2>Nuestro Proceso de Trabajo</h2>
          <p>Cada material pasa por un proceso de selección, preparación y tratamiento especializado para garantizar la máxima calidad en el producto final.</p>
          
          <div className={styles.processSteps}>
            <div className={`${styles.processStep} stagger-item`} style={{ animationDelay: '0.1s' }}>
              <div className={styles.stepNumber}>1</div>
              <h3>Selección</h3>
              <p>Elegimos cuidadosamente cada material por su calidad, historia y potencial estético.</p>
            </div>
            
            <div className={`${styles.processStep} stagger-item`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.stepNumber}>2</div>
              <h3>Preparación</h3>
              <p>Limpieza, lijado y tratamiento específico para cada tipo de material.</p>
            </div>
            
            <div className={`${styles.processStep} stagger-item`} style={{ animationDelay: '0.3s' }}>
              <div className={styles.stepNumber}>3</div>
              <h3>Integración</h3>
              <p>Combinamos los materiales con técnicas tradicionales y avanzadas.</p>
            </div>
            
            <div className={`${styles.processStep} stagger-item`} style={{ animationDelay: '0.4s' }}>
              <div className={styles.stepNumber}>4</div>
              <h3>Acabado</h3>
              <p>Pulido y tratamiento final para obtener la superficie perfecta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Tienes un material especial?</h2>
          <p>Si tienes madera, metal u otros materiales con valor sentimental, podemos integrarlos en tu proyecto personalizado.</p>
          <Link href="/contacto" className={styles.ctaButton}>Consulta tu Proyecto</Link>
        </div>
      </section>
    </div>
  );
} 