"use client";

import { useState } from 'react';
import styles from '../../styles/Gallery.module.css';
import Image from 'next/image';

const categorias = [
  {
    nombre: 'Encimeras',
    carpeta: 'encimeras',
    imagen: '/vertexArts/images/encimeras/efecto_piedra_web.webp',
  },
  {
    nombre: 'Mobiliario',
    carpeta: 'mobiliario',
    imagen: '/vertexArts/images/mobiliario/mesa de rio.webp',
  },
  {
    nombre: 'Suelos',
    carpeta: 'suelo',
    imagen: '/vertexArts/images/suelo/suelos_4.webp',
  },
  {
    nombre: 'Decoración',
    carpeta: 'decoracion',
    imagen: '/vertexArts/images/decoracion/restaurante.webp',
  },
];

const imagenesPorCategoria = {
  encimeras: [
    'vertido_encimera.webp',
    'encimera_madera.webp',
    'encimera_granito.webp',
    'efecto_piedra_web.webp',
    'efecto_marmol_web.webp',
    'efecto madera_web2.webp',
    'cockteleria.webp',
  ],
  mobiliario: [
    'vertexArt.webp',
    'tabla_corte3.webp',
    'mobiliario3.webp',
    'mobiliario_3.webp',
    'mesa_rio_mia_web.webp',
    'mesa_grande.webp',
    'mesa de rio.webp',
    'ajedrez_web.webp',
  ],
  suelo: [
    'terminacion marmolizado_8.webp',
    'terminacion granito_7.webp',
    'terminacion blanca_6.webp',
    'suelos2_5.webp',
    'suelos_4.webp',
    'garaje_3.webp',
    'cockteleria_2.webp',
    'aplicacion suelos_1.webp',
  ],
  decoracion: [
    'restaurante.webp',
    'discoteca.webp',
    'decoracion.webp',
  ],
};

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

function ModalGaleria({ open, onClose, categoria, carpeta, imagenes }) {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  if (!open) return null;

  const abrirLightbox = (idx) => setLightbox({ open: true, index: idx });
  const cerrarLightbox = () => setLightbox({ open: false, index: 0 });
  const prevImg = () => setLightbox(l => ({ open: true, index: (l.index - 1 + imagenes.length) % imagenes.length }));
  const nextImg = () => setLightbox(l => ({ open: true, index: (l.index + 1) % imagenes.length }));

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h3>{categoria}</h3>
        <div className={styles.modalGrid}>
          {imagenes.map((img, i) => (
            <div key={i} className={styles.modalImgWrapper} onClick={() => abrirLightbox(i)}>
              <Image src={`/vertexArts/images/${carpeta}/${img}`} alt={img} fill className={styles.modalImg} />
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
    </div>
  );
}

export default function Gallery() {
  const [modal, setModal] = useState({ open: false, categoria: '', carpeta: '', imagenes: [] });

  const abrirModal = (cat) => {
    setModal({ open: true, categoria: cat.nombre, carpeta: cat.carpeta, imagenes: imagenesPorCategoria[cat.carpeta] });
  };
  const cerrarModal = () => setModal({ open: false, categoria: '', carpeta: '', imagenes: [] });

  return (
    <section className={styles.categoriasSection}>
      <div className={styles.presentacion}>
        <h2>Nuestros Proyectos</h2>
        <p>
          Cada pieza está hecha a medida, con mimo y dedicación. Fusionamos arte, sostenibilidad y funcionalidad para crear proyectos únicos que transforman cualquier espacio.
        </p>
      </div>
      <div className={styles.categoriasGrid}>
        {categorias.map((cat) => (
          <div key={cat.nombre} className={styles.categoriaCard} onClick={() => abrirModal(cat)}>
            <div className={styles.categoriaImgWrapper}>
              <Image src={cat.imagen} alt={cat.nombre} fill className={styles.categoriaImg} />
              <div className={styles.categoriaOverlay}>
                <span>{cat.nombre}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalGaleria open={modal.open} onClose={cerrarModal} categoria={modal.categoria} carpeta={modal.carpeta} imagenes={modal.imagenes} />
    </section>
  );
} 