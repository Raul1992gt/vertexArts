"use client";

import { useState, useEffect } from 'react';
import styles from '../../styles/CategoryPage.module.css';
import Image from 'next/image';

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
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(3);
  
  // Hook para detectar el tamaño de pantalla y ajustar imágenes por página
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setImagesPerPage(1); // Móvil: 1 imagen
      } else if (window.innerWidth <= 900) {
        setImagesPerPage(2); // Tablet: 2 imágenes  
      } else {
        setImagesPerPage(3); // Desktop: 3 imágenes
      }
    };

    // Ejecutar al cargar
    handleResize();
    
    // Escuchar cambios de tamaño
    window.addEventListener('resize', handleResize);
    
    // Limpiar listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(imagenes.length / imagesPerPage);
  
  // Reiniciar página actual si es necesario cuando cambia imagesPerPage
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [imagesPerPage, totalPages, currentPage]);
  
  // Calcular las imágenes a mostrar en la página actual
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = imagenes.slice(startIndex, endIndex);
  
  const abrirLightbox = (localIdx) => {
    const globalIdx = startIndex + localIdx;
    setLightbox({ open: true, index: globalIdx });
  };
  const cerrarLightbox = () => setLightbox({ open: false, index: 0 });
  const prevImg = () => setLightbox(l => ({ open: true, index: (l.index - 1 + imagenes.length) % imagenes.length }));
  const nextImg = () => setLightbox(l => ({ open: true, index: (l.index + 1) % imagenes.length }));
  
  const goToPrevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToNextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <h1>{titulo}</h1>
        <p className={styles.description}>{descripcion}</p>
      </div>

              <div className={styles.galleryContainer}>
          {/* Contenedor con flechas laterales */}
          <div className={styles.imageNavigationContainer}>
            {/* Flecha izquierda */}
            {totalPages > 1 && (
              <button 
                className={styles.arrowButton} 
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                aria-label="Página anterior"
              >
                ←
              </button>
            )}
            
            {/* Grid de 3 imágenes */}
            <div className={styles.projectsGrid}>
              {currentImages.map((img, i) => (
                <div key={startIndex + i} className={styles.projectCard} onClick={() => abrirLightbox(i)}>
                  <div className={styles.projectImgWrapper}>
                    <Image 
                      src={`/images/${carpeta}/${img}`} 
                      alt={`${titulo} ${startIndex + i + 1}`} 
                      fill 
                      className={styles.projectImg}
                      quality={95}
                      priority={i < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Flecha derecha */}
            {totalPages > 1 && (
              <button 
                className={styles.arrowButton} 
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                aria-label="Página siguiente"
              >
                →
              </button>
            )}
          </div>
          
          {/* Contador discreto abajo */}
          <div className={styles.photoCounter}>
            {imagenes.length} fotos
          </div>
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