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
              src="/vertexArts/images/materiales/Resina_epoxi.png" 
              alt="Resina Epoxi en encimera" 
              width={500} 
              height={350} 
              className={styles.materialImg}
            />
          </div>
          <div className={styles.materialContent}>
            <h2>Resina Epoxi</h2>
            <p className={styles.materialDescription}>
              La <strong>resina epoxi</strong> es nuestro material estrella, un polímero termoestable que se cura mediante una reacción química, creando una superficie extremadamente dura y duradera.
            </p>
            <p className={styles.materialDescription}>
              Este material revolucionario nos permite crear <strong>encimeras, mesas y superficies</strong> con acabados únicos que imitan perfectamente la madera, piedra natural, mármol o efectos artísticos personalizados. Su versatilidad es incomparable, ya que podemos incorporar elementos decorativos, crear efectos de transparencia y lograr cualquier color o textura imaginable.
            </p>
            <p className={styles.materialDescription}>
              Ideal para <strong>cocinas, baños, oficinas y espacios comerciales</strong>, la resina epoxi soporta el uso intensivo diario sin perder su brillo ni resistencia. No requiere selladores adicionales y mantiene sus propiedades durante décadas.
            </p>
            
            <div className={`${styles.expandableContent} ${isResinExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                <h3>¿Por qué elegimos resina epoxi?</h3>
                <ul>
                  <li><strong>Durabilidad excepcional:</strong> Resistente a golpes, rayones y desgaste diario</li>
                  <li><strong>Impermeabilidad total:</strong> No absorbe líquidos, ideal para cocinas y baños</li>
                  <li><strong>Resistencia química:</strong> Soporta ácidos, aceites y productos de limpieza</li>
                  <li><strong>Versatilidad estética:</strong> Permite crear efectos únicos: madera, piedra, mármol</li>
                  <li><strong>Mantenimiento mínimo:</strong> Fácil limpieza con productos básicos</li>
                  <li><strong>Personalización total:</strong> Colores, texturas y efectos completamente personalizables</li>
                </ul>
              </div>

              <div className={styles.technicalInfo}>
                <h3>Características técnicas</h3>
                <p>Nuestra resina epoxi ofrece una resistencia térmica de hasta 120°C, una dureza Shore D superior a 80, y una resistencia a la compresión de más de 100 MPa. Estas propiedades la convierten en el material perfecto para aplicaciones que requieren máxima durabilidad.</p>
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
              Seleccionamos exclusivamente <strong>maderas nobles de primera calidad</strong> con criterios extremadamente rigurosos: densidad superior, vetas excepcionales y ausencia total de defectos. Solo las piezas que han demostrado resistencia durante décadas pasan nuestra selección.
            </p>
            <p className={styles.materialDescription}>
              La <strong>maduración natural y el secado controlado</strong> dotan a estas maderas de una dureza excepcional y una belleza incomparable. Cuando las combinamos con resina epoxi, el resultado son piezas únicas que expresan la sofisticación de la naturaleza en su máximo esplendor.
            </p>
            
            <div className={`${styles.expandableContent} ${isWoodExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                <h3>Características de nuestras maderas:</h3>
                <ul>
                  <li><strong>Historia y carácter:</strong> Cada pieza cuenta una historia única</li>
                  <li><strong>Vetas naturales:</strong> Patrones únicos imposibles de replicar</li>
                  <li><strong>Durabilidad probada:</strong> Maderas que han resistido décadas</li>
                  <li><strong>Sostenibilidad:</strong> Reducimos la tala de árboles nuevos</li>
                  <li><strong>Variedad de especies:</strong> Roble, castaño, pino, eucalipto y maderas exóticas</li>
                </ul>
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
              src="/vertexArts/images/materiales/Maderas_exclusivas.png" 
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
              src="/vertexArts/images/materiales/Hierros_metales.png" 
              alt="Estructura de hierro reciclado" 
              width={500} 
              height={350} 
              className={styles.materialImg}
            />
          </div>
          <div className={styles.materialContent}>
            <h2>Hierros, metales reciclados y elementos externos</h2>
            <p className={styles.materialDescription}>
              Transformamos <strong>estructuras metálicas</strong> industriales, herramientas antiguas y elementos arquitectónicos en componentes estructurales y decorativos únicos.
            </p>
            <p className={styles.materialDescription}>
              Incorporamos <strong>hierro forjado, acero corten, latón, cobre y aluminio</strong> recuperado de demoliciones, fábricas antiguas y construcciones industriales. Cada metal aporta su propia textura, color y historia, desde la pátina natural del hierro oxidado hasta el brillo noble del cobre envejecido.
            </p>
            <p className={styles.materialDescription}>
              Estos elementos metálicos proporcionan <strong>resistencia estructural y carácter industrial</strong> a nuestras creaciones, creando contrastes fascinantes cuando se combinan con la calidez de la madera y la transparencia de la resina epoxi.
            </p>
            
            <div className={`${styles.expandableContent} ${isMetalExpanded ? styles.expanded : ''}`}>
              <div className={styles.benefitsList}>
                <h3>Ventajas del metal reciclado:</h3>
                <ul>
                  <li><strong>Resistencia estructural:</strong> Capacidad de carga excepcional</li>
                  <li><strong>Pátina natural:</strong> Efectos de oxidación controlada únicos</li>
                  <li><strong>Versatilidad de formas:</strong> Moldeable para cualquier diseño</li>
                  <li><strong>Bajo impacto ambiental:</strong> Evitamos la extracción de nuevos metales</li>
                  <li><strong>Combinación perfecta:</strong> Se integra armoniosamente con resina y madera</li>
                </ul>
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