'use client';

import React, { useState } from 'react';
import styles from '../estilosCategorias/categoriasEstyle.module.css'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const decoracionPage = () => {
  const proyectoPrincipal = {
    title: 'Proyectos',
    bannerImage: '/vertexArts/images/decoracion/portada/decoracion.webp',
    mainImage: '/vertexArts/images/decoracion/proyectos/proyecto1.webp', 
    images: [
      { src: '/vertexArts/images/decoracion/proyectos/proyecto1.webp', alt: 'Imagen 1 Proyecto 1', text: 'Texto para Imagen 1 Proyecto 1' },
      { src: '/vertexArts/images/decoracion/proyectos/proyecto2.webp', alt: 'Imagen 2 Proyecto 1', text: 'Texto para Imagen 2 Proyecto 1' },
      { src: '/vertexArts/images/decoracion/proyectos/proyecto3.webp', alt: 'Imagen 3 Proyecto 1', text: 'Texto para Imagen 3 Proyecto 1' },
      { src: '/vertexArts/images/decoracion/proyectos/proyecto4.webp', alt: 'Imagen 4 Proyecto 2', text: 'Texto para Imagen 4 Proyecto 2' },
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
      </div>

      <div className={styles.aboutContainer}>
        <h1>Vertex Art Decoración</h1>
        <p>
          Diseño con impacto para grandes espacios.
          En Vertex Art llevamos nuestra experiencia en materiales reciclados y diseño sostenible al siguiente nivel, especializándonos en la decoración de grandes espacios como restaurantes, hoteles, pubs y discotecas. Creamos ambientes únicos que combinan funcionalidad, estética y respeto por el medio ambiente.
        </p>
        <p>
          Entendemos que cada espacio tiene una identidad propia, por eso trabajamos de forma personalizada en cada proyecto, adaptando nuestras encimeras, revestimientos y mobiliario a las necesidades del cliente y del entorno. Nuestro enfoque une creatividad, materiales nobles reciclados y acabados exclusivos, logrando resultados que destacan por su originalidad y carácter.
          Ya sea un restaurante que busca una atmósfera acogedora, un hotel que quiere ofrecer una experiencia memorable, o una discoteca que desea un diseño vibrante y moderno, en Vertex Art transformamos ideas en espacios que inspiran.
        </p>
      </div>

      <div className={styles.categoriesLinks}>
        <h2>Otras Categorías</h2>
        <div className={styles.linksContainer}>
          <Link href="/mobiliario" className={styles.categoryLink}>Mobiliario</Link>
          <Link href="/encimeras" className={styles.categoryLink}>Encimeras</Link>
          <Link href="/suelo" className={styles.categoryLink}>Suelos</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default decoracionPage;
