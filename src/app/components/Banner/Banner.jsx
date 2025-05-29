'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import styles from './Banner.module.css';

const slideItems = [
  {
    type: 'video',
    src: '/videos/vertexArt.mp4',
  },
  {
    type: 'image',
    href: '/decoracion',
    imgSrc: '/images/decoracion.webp',
    altText: 'Proyectos de decoración',
  },
  {
    type: 'image',
    href: '/encimeras',
    imgSrc: '/images/encimeras.webp',
    altText: 'Proyectos de encimeras',
  },
  {
    type: 'image',
    href: '/suelo',
    imgSrc: '/images/suelos.webp',
    altText: 'Proyectos de suelos',
  },
];

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
      {slideItems.map((item, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          {item.type === 'video' ? (
            <div className={styles.videoWrapper}>
              <video
                className={styles.slideVideo}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ) : (
            <Link href={item.href} aria-label={item.altText}>
              <div
                className={styles.slideImage}
                style={{ backgroundImage: `url('${item.imgSrc}')` }}
              />
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
