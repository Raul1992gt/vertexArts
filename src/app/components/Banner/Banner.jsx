'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import styles from './Banner.module.css';

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 4500 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className={styles.slider}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.slideVideo}
            src="/vertexArts/videos/vertexArt.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </SwiperSlide>
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
