'use client';

import React, { useState } from 'react';
import styles from './About.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
  const [active, setActive] = useState(null);

  const togglePanel = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className={styles.sliderContainer}>
      <img
        src="/images/about.webp"
        alt="Banner"
        className={styles.topImage}
      />
    </div>
      <div className={styles.aboutContainer}>
        <h1>Vertex Art</h1>
        <p>
          "Vertex Art" es una empresa especializada en el diseño y tratamiento de encimeras de cocina y muebles exclusivos,
          elaborados con materiales reciclados. Nos enfocamos en fusionar sostenibilidad y diseño innovador,
          transformando recursos reciclados en piezas únicas que destacan por su calidad y estilo.
        </p>
        <p>
          Nuestro proceso combina técnicas modernas, como el uso de resina epoxi, con un enfoque artesanal,
          asegurando acabados excepcionales que respetan el medio ambiente. En "Vertex Art", convertimos ideas en realidad,
          ofreciendo soluciones personalizadas para hogares y espacios que buscan un equilibrio entre funcionalidad,
          estética y responsabilidad ecológica.
        </p>

        {/* Acordeones */}
        <div className={styles.accordionContainer}>
          
          <button className={styles.accordion} onClick={() => togglePanel(1)}>
            Esfuerzo
          </button>
          <div className={`${styles.panel} ${active === 1 ? styles.show : ''}`}>
            <p>
              En Vertex Art, cada uno de nuestros proyectos refleja el compromiso y la pasión que ponemos en nuestro trabajo. Creemos que el éxito se construye con esfuerzo, y por eso, trabajamos arduamente en cada detalle, desde la concepción del diseño hasta el acabado final.
              Nuestra perseverancia nos impulsa a superar desafíos y alcanzar niveles de calidad que exceden las expectativas de nuestros clientes. Cada encimera, mueble o suelo de resina epoxi que fabricamos es una obra única, diseñada con precisión y esmero para garantizar resultados excepcionales.
              El diseño es el corazón de lo que hacemos. Nos inspiramos en la creatividad y las tendencias modernas para ofrecer soluciones que combinan funcionalidad y estética, adaptadas a las necesidades y gustos de cada cliente. Sin importar el estilo o la complejidad del proyecto, nos esforzamos por crear piezas que sean tanto prácticas como visualmente impresionantes.
              El acabado final es donde nuestro trabajo duro y dedicación se hacen visibles. Nos aseguramos de que cada superficie, cada textura y cada detalle refleje la excelencia que define a Vertex Art, creando resultados que no solo satisfacen, sino que inspiran.
            </p>
          </div>

          <button className={styles.accordion} onClick={() => togglePanel(0)}>
            Compromiso
          </button>
          <div className={`${styles.panel} ${active === 0 ? styles.show : ''}`}>
            <p>
              En Vertex Art, nuestro compromiso con el cliente y la sostenibilidad está en el centro de todo lo que hacemos. Creemos en construir relaciones basadas en la confianza, la transparencia y la atención personalizada, asegurándonos de que cada proyecto refleje tus necesidades, estilo y visión.
              Desde el primer contacto, nos dedicamos a entender tus ideas y convertirlas en realidad, ofreciendo soluciones a medida que combinen funcionalidad, diseño y calidad excepcional. Valoramos cada detalle y trabajamos arduamente para superar tus expectativas, entregando resultados que no solo sean prácticos, sino también inspiradores.
              Además, estamos profundamente comprometidos con la sostenibilidad. Utilizamos materiales reciclados como madera y hierro, y apostamos por procesos responsables que minimicen nuestro impacto ambiental. Al elegir Vertex Art, no solo estás adquiriendo piezas únicas y duraderas, sino que también estás contribuyendo a un futuro más sostenible.
              Nuestra misión es ofrecer productos que no solo embellezcan tus espacios, sino que también respeten el planeta y reflejen el valor de un trabajo ético y consciente. En Vertex Art, diseñamos con propósito, creamos con pasión y siempre ponemos a nuestros clientes y al medio ambiente en primer lugar.
            </p>
          </div>

          <button className={styles.accordion} onClick={() => togglePanel(2)}>
            Personalización
          </button>
          <div className={`${styles.panel} ${active === 2 ? styles.show : ''}`}>
            <p>
              En Vertex Art, creemos que cada proyecto es una oportunidad para crear algo verdaderamente único. Nos especializamos en ofrecer personalizaciones a medida, asegurándonos de que cada pieza que fabricamos refleje la personalidad y las necesidades específicas de nuestros clientes.
              Ya sea una encimera de cocina, un mueble reciclado o un suelo de resina epoxi, trabajamos mano a mano contigo para diseñar y desarrollar soluciones que se adapten perfectamente a tu espacio y estilo. Desde la selección de materiales hasta los colores, texturas y acabados, cada detalle es cuidadosamente considerado para garantizar que el resultado final sea tan funcional como estéticamente impresionante.
              Nuestro enfoque artesanal y nuestra pasión por el diseño nos permiten crear piezas irrepetibles. Cada proyecto se convierte en una obra de arte que combina creatividad, innovación y técnica. Desde diseños minimalistas y modernos hasta propuestas más audaces y artísticas, en Vertex Art todo está pensado para destacar.
              Con un compromiso inquebrantable con la calidad y la originalidad, nos aseguramos de que cada cliente reciba un producto único que transforme sus espacios en algo especial. En Vertex Art, no solo creamos productos; diseñamos experiencias que perduran.
            </p>
          </div>

          <button className={styles.accordion} onClick={() => togglePanel(3)}>
            Exclusividad en cada detalle
          </button>
          <div className={`${styles.panel} ${active === 3 ? styles.show : ''}`}>
            <p>
              En Vertex Art, no solo fabricamos encimeras y muebles; creamos piezas únicas que reflejan carácter, conciencia ambiental y diseño de vanguardia. Cada uno de nuestros productos nace de un proceso artesanal en el que seleccionamos cuidadosamente materiales reciclados de alta calidad, dándoles una nueva vida con acabados exclusivos y personalizados.
              No trabajamos en serie. Cada encimera o mueble es el resultado de un diseño individual, adaptado a las necesidades y gustos de nuestros clientes. Esta filosofía nos permite ofrecer productos irrepetibles, que no encontrarás en ningún otro lugar.
              Nuestra exclusividad no solo está en el diseño, sino en los valores que lo sostienen: sostenibilidad, innovación y compromiso con el detalle. Cuando eliges Vertex Art, eliges distinción con propósito.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
