'use client';

import React, { useState } from 'react';
import styles from '../estilosCategorias/categoriasEstyle.module.css'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const MobiliarioPage = () => {
  const proyectoPrincipal = {
    title: 'Proyectos',
    bannerImage: '/images/mobiliario/portada/mobiliario.webp',
    mainImage: '/images/mobiliario/proyectos/proyecto1.webp', 
    images: [
      { src: '/images/mobiliario/proyectos/proyecto1.webp', alt: 'Imagen 1 Proyecto 1', text: 'Texto para Imagen 1 Proyecto 1' },
      { src: '/images/mobiliario/proyectos/proyecto2.webp', alt: 'Imagen 2 Proyecto 1', text: 'Texto para Imagen 2 Proyecto 1' },
      { src: '/images/mobiliario/proyectos/proyecto3.webp', alt: 'Imagen 3 Proyecto 1', text: 'Texto para Imagen 3 Proyecto 1' },
      { src: '/images/mobiliario/proyectos/proyecto4.webp', alt: 'Imagen 4 Proyecto 2', text: 'Texto para Imagen 4 Proyecto 2' },
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
        <h2 className={styles.overlayTitle}>Mobiliario</h2>
      </div>

      <div className={styles.aboutContainer}>
        <h1>Vertex Art Mobiliario</h1>
        <p>
          En Vertex Art, nos especializamos en la creación de muebles únicos elaborados con materiales reciclados como madera y hierro, combinando sostenibilidad, diseño artesanal y durabilidad. Cada pieza que fabricamos cuenta una historia, al dar una nueva vida a materiales que han sido cuidadosamente seleccionados y transformados con dedicación y creatividad.
          La madera recuperada aporta carácter, textura y un encanto natural a nuestros diseños, mientras que el hierro reciclado añade fuerza, estilo industrial y modernidad. La fusión de estos materiales crea muebles que destacan por su autenticidad y funcionalidad, perfectos para quienes buscan soluciones responsables sin comprometer la estética.
          </p>
          <p>
          Nuestro enfoque artesanal nos permite personalizar cada proyecto según las necesidades y gustos de nuestros clientes. Ya sea una mesa, un armario o una estantería, nos aseguramos de que cada pieza sea única, reflejando tanto nuestro compromiso con la calidad como el valor del diseño sostenible.
          En Vertex Art, creemos que los muebles no solo deben embellecer un espacio, sino también contar una historia de respeto por el medio ambiente y el trabajo duro. Transformamos materiales reciclados en obras de arte funcionales, creando piezas que marcan la diferencia tanto en tu hogar como en el planeta.
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
          <Link href="/encimeras" className={styles.categoryLink}>Encimeras</Link>
          <Link href="/suelo" className={styles.categoryLink}>Suelos</Link>
          <Link href="/decoracion" className={styles.categoryLink}>Decoración</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobiliarioPage;
