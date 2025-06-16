"use client";

import { useState } from 'react';
import styles from '../../styles/CategoryPage.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Lightbox({ open, imagen, onClose, onPrev, onNext }) {
  if (!open) return null;
  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
        <button className={styles.lightboxClose} onClick={onClose}>&times;</button>
        <button className={styles.lightboxPrev} onClick={onPrev} aria-label="Anterior">&#8592;</button>
        <div className={styles.lightboxImgWrapper}>
          <Image src={imagen} alt="Imagen ampliada" fill className={styles.lightboxImg} />
        </div>
        <button className={styles.lightboxNext} onClick={onNext} aria-label="Siguiente">&#8594;</button>
      </div>
    </div>
  );
}

export default function CategoryPage({ titulo, descripcion, carpeta, imagenes }) {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const abrirLightbox = (idx) => setLightbox({ open: true, index: idx });
  const cerrarLightbox = () => setLightbox({ open: false, index: 0 });
  const prevImg = () => setLightbox(l => ({ open: true, index: (l.index - 1 + imagenes.length) % imagenes.length }));
  const nextImg = () => setLightbox(l => ({ open: true, index: (l.index + 1) % imagenes.length }));

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <Link href="/categorias" className={styles.backButton}>
          ← Volver
        </Link>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </div>

      <div className={styles.projectsGrid}>
        {imagenes.map((img, i) => (
          <div key={i} className={styles.projectCard} onClick={() => abrirLightbox(i)}>
            <div className={styles.projectImgWrapper}>
              <Image 
                src={`/images/${carpeta}/${img}`} 
                alt={`${titulo} ${i + 1}`} 
                fill 
                className={styles.projectImg} 
              />
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightbox.open}
                        imagen={`/images/${carpeta}/${imagenes[lightbox.index]}`}
        onClose={cerrarLightbox}
        onPrev={prevImg}
        onNext={nextImg}
      />
    </div>
  );
} 