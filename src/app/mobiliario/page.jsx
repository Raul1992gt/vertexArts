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
const MobiliarioPage = () => {
  const proyectoPrincipal = {
    images: [
      { src: '/vertexArts/images/mobiliario/ajedrez_web.webp', alt: 'Ajedrez' },
      { src: '/vertexArts/images/mobiliario/mesa de rio.webp', alt: 'Mesa de rio' },
      { src: '/vertexArts/images/mobiliario/mesa_grande.webp', alt: 'Mesa grande' },
      { src: '/vertexArts/images/mobiliario/mesa_rio_mia_web.webp', alt: 'Mesa rio' },
      { src: '/vertexArts/images/mobiliario/mobiliario_3.webp', alt: 'Mobiliario' },
      { src: '/vertexArts/images/mobiliario/mobiliario3.webp', alt: 'Mobiliario' },
      { src: '/vertexArts/images/mobiliario/tabla_corte3.webp', alt: 'Tabla de corte' },
      { src: '/vertexArts/images/mobiliario/vertexArt.webp', alt: 'Vertex Art' },
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
              <img src={image.src} alt={image.alt} className={styles.sliderImage} />
            </SwiperSlide>
          ))}
        </Swiper>
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
      </div>

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
