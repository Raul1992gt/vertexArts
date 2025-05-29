'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from '../estilosCategorias/categoriasEstyle.module.css';

const decoracionPage = () => {
  const proyectoPrincipal = {
    images: [
      { src: '/images/decoracion/decoracion.webp', alt: 'Decoracion' },
      { src: '/images/decoracion/discoteca.webp', alt: 'Discoteca' },
      { src: '/images/decoracion/restaurante.webp', alt: 'Restaurante' },
    ],
  };

  return (
    <div>
      <Header />
      <div className={styles.imageContainer}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className={styles.slider}
        >
          {proyectoPrincipal.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} className={styles.slider} />
            </SwiperSlide>
          ))}
        </Swiper>
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
