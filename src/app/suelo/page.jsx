'use client';

import React, { useState } from 'react';
import styles from '../estilosCategorias/categoriasEstyle.module.css'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const SueloPage = () => {
  const proyectoPrincipal = {
    title: 'Proyectos',
    bannerImage: '/vertexArts/images/suelo/portada/suelos.webp',
    mainImage: '/vertexArts/images/suelo/proyectos/proyecto1.webp', 
    images: [
      { src: '/vertexArts/images/suelo/proyectos/proyecto1.webp', alt: 'Imagen 1 Proyecto 1', text: 'Texto para Imagen 1 Proyecto 1' },
      { src: '/vertexArts/images/suelo/proyectos/proyecto2.webp', alt: 'Imagen 2 Proyecto 1', text: 'Texto para Imagen 2 Proyecto 1' },
      { src: '/vertexArts/images/suelo/proyectos/proyecto3.webp', alt: 'Imagen 3 Proyecto 1', text: 'Texto para Imagen 3 Proyecto 1' },
      { src: '/vertexArts/images/suelo/proyectos/proyecto4.webp', alt: 'Imagen 4 Proyecto 2', text: 'Texto para Imagen 4 Proyecto 2' },
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
        <h1>Vertex Art Suelos</h1>
        <p>
          En Vertex Art, somos expertos en la creación de suelos de resina epoxi, una solución moderna y versátil que combina durabilidad, estética y funcionalidad. Nuestros suelos están diseñados para transformar cualquier espacio, aportando un acabado liso, brillante y resistente que se adapta tanto a entornos residenciales como comerciales.
          La resina epoxi es un material innovador que permite personalizar completamente los suelos. Desde acabados monocromáticos y minimalistas hasta diseños artísticos con efectos tridimensionales, marmoleados o metálicos, nuestras creaciones destacan por su exclusividad y atención al detalle. Además de su belleza, estos suelos ofrecen una gran resistencia al desgaste, 
          los impactos, la humedad y los productos químicos, convirtiéndolos en una opción práctica y duradera.
          </p>
          <p>
          En Vertex Art, utilizamos técnicas avanzadas y materiales de alta calidad para garantizar resultados impecables. Ya sea para renovar un hogar, una oficina, un local comercial o un espacio industrial, nuestros suelos de resina epoxi son la combinación perfecta de diseño contemporáneo y funcionalidad, ofreciendo una superficie que impresiona y perdura con el tiempo.
        </p>
      </div>


      <div className={styles.categoriesLinks}>
        <h2>Otras Categorías</h2>
        <div className={styles.linksContainer}>
          <Link href="/encimeras" className={styles.categoryLink}>Encimeras</Link>
          <Link href="/mobiliario" className={styles.categoryLink}>Mobiliario</Link>
          <Link href="/decoracion" className={styles.categoryLink}>Decoración</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SueloPage;
