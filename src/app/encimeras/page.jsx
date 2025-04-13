'use client';

import React, { useState } from 'react';
import styles from '../estilosCategorias/categoriasEstyle.module.css'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const EncimerasPage = () => {
  const proyectoPrincipal = {
    title: 'Proyectos',
    bannerImage: '/images/encimeras/portada/encimeras.webp',
    mainImage: '/images/encimeras/proyectos/proyecto1.webp', 
    images: [
      { src: '/images/encimeras/proyectos/proyecto1.webp', alt: 'Imagen 1 Proyecto 1', text: 'Texto para Imagen 1 Proyecto 1' },
      { src: '/images/encimeras/proyectos/proyecto2.webp', alt: 'Imagen 2 Proyecto 1', text: 'Texto para Imagen 2 Proyecto 1' },
      { src: '/images/encimeras/proyectos/proyecto3.webp', alt: 'Imagen 3 Proyecto 1', text: 'Texto para Imagen 3 Proyecto 1' },
      { src: '/images/encimeras/proyectos/proyecto4.webp', alt: 'Imagen 4 Proyecto 2', text: 'Texto para Imagen 4 Proyecto 2' },
    ],
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setSelectedProject(proyectoPrincipal);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Header />
      <div className={styles.imageContainer}>
        <img src={proyectoPrincipal.bannerImage} alt="Imagen Principal" className={styles.topImage} />
        <h2 className={styles.overlayTitle}>Encimeras</h2>
      </div>

      <div className={styles.aboutContainer}>
        <h1>Vertex Art Encimeras</h1>
        <p>
          En Vertex Art, somos especialistas en la fabricación de encimeras de cocina y baño elaboradas con resina epoxi, diseñadas para combinar funcionalidad, durabilidad y estilo único. Cada pieza es cuidadosamente personalizada, adaptándose a las necesidades y preferencias de nuestros clientes.
          La resina epoxi nos permite crear superficies lisas y resistentes, ideales para soportar el uso diario y la exposición a la humedad, el calor y los productos de limpieza. Además, su versatilidad nos permite jugar con colores, texturas y efectos, creando acabados que van desde lo minimalista hasta diseños más artísticos y personalizados.
          </p>
          <p>
          Nuestras encimeras destacan no solo por su estética, sino también por su sostenibilidad. Apostamos por procesos responsables y la integración de materiales reciclados siempre que es posible, asegurando que cada creación sea tanto hermosa como respetuosa con el medio ambiente.
          Ya sea para un diseño moderno o rústico, en Vertex Art trabajamos contigo para transformar tus espacios en algo verdaderamente excepcional, con encimeras únicas que combinan innovación, arte y calidad superior.
        </p>
        <div className={styles.gallery}>
          {/* Card principal */}
          <div className={styles.card} onClick={openModal}>
            <img src={proyectoPrincipal.mainImage} alt={proyectoPrincipal.title} className={styles.cardImage} />
            <h3>{proyectoPrincipal.title}</h3>
          </div>
        </div>
      </div>

      {/* Modal para ver el carrusel de imágenes */}
      {selectedProject && (
  <div className={styles.modal} onClick={closeModal}>
    <div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro
    >
      <button className={styles.modalButton} onClick={prevImage}>
        &lt;
      </button>
      <img
        src={selectedProject.images[currentImageIndex].src}
        alt={selectedProject.images[currentImageIndex].alt}
        className={styles.modalImage}
      />
      <button className={styles.modalButton} onClick={nextImage}>
        &gt;
      </button>
      <div className={styles.imageIndex}>
        {currentImageIndex + 1} / {selectedProject.images.length}
      </div>
      {/* Contenedor de texto fuera de la imagen */}
      <div className={styles.textContainer}>
        <p className={styles.imageText}>{selectedProject.images[currentImageIndex].text}</p>
      </div>
    </div>
  </div>
)}



      <div className={styles.categoriesLinks}>
        <h2>Otras Categorías</h2>
        <div className={styles.linksContainer}>
          <Link href="/mobiliario" className={styles.categoryLink}>Mobiliario</Link>
          <Link href="/suelo" className={styles.categoryLink}>Suelos</Link>
          <Link href="/decoracion" className={styles.categoryLink}>Decoración</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EncimerasPage;
