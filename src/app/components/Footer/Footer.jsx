import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        {/* Redes Sociales */}
        <div className={styles['footer-column']}>
          <h4>Síguenos</h4>
          <div className={styles['footer-social']}>
            <a href="https://www.instagram.com/vertexartsdesign/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Enlaces útiles */}
        <div className={styles['footer-column']}>
          <h4>Enlaces</h4>
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className={styles['footer-column']}>
          <h4>Contacto</h4>
          <p>Email: projectartandesign3d@gmail.com</p>
          <p>Teléfono: 608 63 28 43</p>
        </div>

        <div className={`${styles['footer-column']} ${styles['footer-logo']}`} style={{ backgroundImage: "url('/vertexArts/images/logo.png')" }}>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/raul-garcia-torrejon/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles['linkedin-link']}
        >
          Raúl García
        </a>
        . Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;