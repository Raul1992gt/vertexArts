import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles['left-nav']}>
        <ul>
          <li>
            <Link href="/about">Quienes Somos</Link>
          </li>
          <li>
            <Link href="/compromiso">Compromiso</Link>
          </li>
        </ul>
      </nav>

      <Link href="/">
        <div className={styles.logo} style={{ backgroundImage: "url('/images/logo.png')" }}></div> {/* Ruta directa */}
      </Link>

      <nav className={styles['right-nav']}>
        <ul>
          <li>
            <Link href="/esfuerzo">Esfuerzo/Diseño</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;