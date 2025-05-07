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
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
          <p>Email: contacto@empresa.com</p>
          <p>Teléfono: +34 600 123 456</p>
          <p>Dirección: Calle Falsa 123, Esquivias</p>
        </div>

        <div className={`${styles['footer-column']} ${styles['footer-logo']}`} style={{ backgroundImage: "url('/vertexArts/images/logo.png')" }}>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        © {new Date().getFullYear()} Raúl García Torrejón. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;