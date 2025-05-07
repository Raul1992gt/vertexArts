"use client";
import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Botón de menú hamburguesa */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          &#9776; {/* Símbolo de menú hamburguesa */}
        </button>

        {/* Menú de navegación */}
        <ul className={`${styles.navList} ${menuActive ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Inicio</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={styles.navLink}>Nosotros</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contacto" className={styles.navLink}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
