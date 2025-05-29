import React from 'react';
import styles from './Categories.module.css';
import Link from 'next/link';

const categories = [
  {
    name: 'Encimeras',
    description: 'Diseños modernos y personalizados, perfectos para tu cocina o baño.',
    image: '/vertexArts//images/encimeras.webp',
    link: '/encimeras',
  },
  {
    name: 'Mobiliario',
    description: 'Detalles únicos para tu hogar, con piezas personalizadas para cada espacio.',
    image: '/vertexArts//images/mobiliario.webp',
    link: '/mobiliario',
  },
  {
    name: 'Suelos',
    description: 'Espacios elegantes y funcionales que combinan estilo y comodidad.',
    image: '/vertexArts//images/suelos.webp',
    link: '/suelo',
  },
  {
    name: 'Decoracion', 
    description: 'Servicio profesional de instalación y montaje para un acabado impecable.',
    image: '/vertexArts//images/decoracion.webp',
    link: '/decoracion',
  },
];

const Categories = () => {
  return (
    <div id='categorias' className={styles.categories}>
      <div className={styles['category-list']}>
        {categories.map((category, index) => (
          <Link href={category.link} key={index} className={styles['category-item']}>
            <img src={category.image} alt={category.name} className={styles['category-image']} />
            <h4>{category.name}</h4>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;