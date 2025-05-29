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

const EncimerasPage = () => {
  const proyectoPrincipal = {
    images: [
      { src: '/vertexArts/images/encimeras/cockteleria.webp', alt: 'Cockteleria' },
      { src: '/vertexArts/images/encimeras/efecto madera_web2.webp', alt: 'Efecto madera' },
      { src: '/vertexArts/images/encimeras/efecto_marmol_web.webp', alt: 'Efecto madera' },
      { src: '/vertexArts/images/encimeras/efecto_piedra_web.webp', alt: 'Efecto piedra' },
      { src: '/vertexArts/images/encimeras/encimera_granito.webp', alt: 'Encimera granito' },
      { src: '/vertexArts/images/encimeras/encimera_madera.webp', alt: 'Encimera madera' },
      { src: '/vertexArts/images/encimeras/vertido_encimera.webp', alt: 'Vertido encimera' },
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
        <h1>Vertex Art Encimeras</h1>
        <p>
          En Vertex Art, somos especialistas en la fabricación de encimeras de cocina y baño elaboradas con resina epoxi, diseñadas para combinar funcionalidad, durabilidad y estilo único. Cada pieza es cuidadosamente personalizada, adaptándose a las necesidades y preferencias de nuestros clientes.
          La resina epoxi nos permite crear superficies lisas y resistentes, ideales para soportar el uso diario y la exposición a la humedad, el calor y los productos de limpieza. Además, su versatilidad nos permite jugar con colores, texturas y efectos, creando acabados que van desde lo minimalista hasta diseños más artísticos y personalizados.
          </p>
          <p>
          Nuestras encimeras destacan no solo por su estética, sino también por su sostenibilidad. Apostamos por procesos responsables y la integración de materiales reciclados siempre que es posible, asegurando que cada creación sea tanto hermosa como respetuosa con el medio ambiente.
          Ya sea para un diseño moderno o rústico, en Vertex Art trabajamos contigo para transformar tus espacios en algo verdaderamente excepcional, con encimeras únicas que combinan innovación, arte y calidad superior.
        </p>
      </div>

      <div className={styles.categoriesLinks}>
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
