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

const SueloPage = () => {
  const proyectoPrincipal = {
    images: [
      { src: '/vertexArts/images/suelo/aplicacion suelos_1.webp', alt: 'Aplicacion de suelos' },
      { src: '/vertexArts/images/suelo/cockteleria_2.webp', alt: 'Cockteleria' },
      { src: '/vertexArts/images/suelo/suelos_4.webp', alt: 'Suelos' },
      { src: '/vertexArts/images/suelo/suelos2_5.webp', alt: 'Suelos' },
      { src: '/vertexArts/images/suelo/terminacion blanca_6.webp', alt: 'Terminacion blanca' },
      { src: '/vertexArts/images/suelo/terminacion granito_7.webp', alt: 'Terminacion granito' },
      { src: '/vertexArts/images/suelo/terminacion marmolizado_8.webp', alt: 'Terminacion marmolizado' },
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
