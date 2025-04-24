'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';  // Asegúrate de importar Link
import styles from './Banner.module.css';

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className={styles.slider}
    >
      <SwiperSlide className={styles.slide}>
        <Link href="/decoracion">
          <div className={styles.slideImage} style={{ backgroundImage: "url('/vertexArts/images/decoracion.webp')" }} />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Link href="/encimeras">
          <div className={styles.slideImage} style={{ backgroundImage: "url('/vertexArts/images/encimeras.webp')" }} />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <Link href="/suelo">
          <div className={styles.slideImage} style={{ backgroundImage: "url('/vertexArts/images/suelos.webp')" }} />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
