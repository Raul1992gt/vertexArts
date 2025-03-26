import React from 'react';
import styles from './Categories.module.css';
import Link from 'next/link';

const categories = [
  {
    name: 'Encimeras',
    description: 'Diseños modernos y personalizados, perfectos para tu cocina o baño.',
    image: '/images/encimeras.webp',
    link: '/encimeras',
  },
  {
    name: 'Mobiliario',
    description: 'Detalles únicos para tu hogar, con piezas personalizadas para cada espacio.',
    image: '/images/mobiliario.webp',
    link: '/mobiliario',
  },
  {
    name: 'Suelos',
    description: 'Espacios elegantes y funcionales que combinan estilo y comodidad.',
    image: '/images/suelos.webp',
    link: '/suelo',
  },
];

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2>Nuestras Categorías</h2>
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