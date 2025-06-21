"use client";

import styles from '../../styles/Gallery.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useStaggeredIntersection } from '../hooks/useIntersectionObserver';

const categorias = [
  {
    nombre: 'Encimeras',
    carpeta: 'encimeras',
    imagen: '/vertexArts/images/encimeras/efecto_piedra_web.webp',
    slug: 'encimeras',
    alt: 'Encimera de resina epoxi con efecto piedra natural, resistente y personalizada por VertexArt'
  },
  {
    nombre: 'Mobiliario',
    carpeta: 'mobiliario',
    imagen: '/vertexArts/images/mobiliario/mesa de rio.webp',
    slug: 'mobiliario',
    alt: 'Mesa río de resina epoxi transparente y madera reciclada, mobiliario único artesanal'
  },
  {
    nombre: 'Suelos',
    carpeta: 'suelo',
    imagen: '/vertexArts/images/suelo/suelos_4.webp',
    slug: 'suelos',
    alt: 'Suelo de resina epoxi industrial decorativo, pavimento duradero y fácil mantenimiento'
  },
  {
    nombre: 'Decoración',
    carpeta: 'decoracion',
    imagen: '/images/decoracion/restaurante.webp',
    slug: 'decoracion',
    alt: 'Decoración interior de restaurante con elementos de resina epoxi y diseño personalizado'
  },
];

export default function Gallery() {
  const { containerRef, visibleItems } = useStaggeredIntersection(categorias.length);

  return (
    <section className={styles.categoriasSection}>
      <div className={styles.presentacion}>
        <h2>Servicios</h2>
        <p>
          Cada pieza está hecha a medida, con mimo y dedicación. Fusionamos arte, sostenibilidad y funcionalidad para crear proyectos únicos que transforman cualquier espacio.
        </p>
      </div>
      <div 
        ref={containerRef}
        className={`${styles.categoriasGrid} scroll-stagger-container`}
      >
        {categorias.map((cat, index) => (
          <Link 
            key={cat.nombre} 
            href={`/categorias/${cat.slug}`} 
            className={`${styles.categoriaCard} scroll-stagger-item ${visibleItems.has(index) ? 'visible' : ''}`}
            data-index={index}
          >
            <div className={styles.categoriaImgWrapper}>
              <Image src={cat.imagen} alt={cat.alt} fill className={styles.categoriaImg} />
              <div className={styles.categoriaOverlay}>
                <span>{cat.nombre}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 