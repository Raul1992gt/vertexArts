"use client";

import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoGroup}>
        <Link href="/" onClick={closeMenu} className={styles.logoLink}>
          <Image src="/images/logo.png" alt="VertexArt Logo" width={60} height={60} priority className={styles.logo} />
        </Link>
        <Link href="/" onClick={closeMenu} className={styles.brandLink}>
          <span className={styles.brandName}>VertexArts</span>
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
        onClick={toggleMenu}
        aria-label="Menú de navegación"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menú de navegación */}
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li className={styles.socialIcon}>
          <a href="https://www.instagram.com/vertexartsdesign?utm_source=qr&igsh=cHkwdTdsMDJzNDgz" target="_blank" rel="noopener" aria-label="Instagram" className={styles.instagramNavIcon}>
            <FaInstagram />
          </a>
        </li>
        <li><Link href="/" className={styles.brandMenu} onClick={closeMenu}>Inicio</Link></li>
        <li><Link href="/about" className={styles.brandMenu} onClick={closeMenu}>Nosotros</Link></li>
        <li className={styles.dropdown}>
          <div className={styles.dropdownContainer}>
            <Link 
              href="/categorias" 
              className={`${styles.brandMenu} ${styles.dropdownMainLink}`}
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <button 
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
              aria-label="Mostrar subcategorías"
            >
              <span className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.dropdownArrowOpen : ''}`}>▼</span>
            </button>
          </div>
          <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
            <li><Link href="/categorias/encimeras" className={styles.dropdownLink} onClick={closeMenu}>Encimeras</Link></li>
            <li><Link href="/categorias/mobiliario" className={styles.dropdownLink} onClick={closeMenu}>Mobiliario</Link></li>
            <li><Link href="/categorias/suelos" className={styles.dropdownLink} onClick={closeMenu}>Suelos</Link></li>
            <li><Link href="/categorias/decoracion" className={styles.dropdownLink} onClick={closeMenu}>Decoración</Link></li>
          </ul>
        </li>
        <li><Link href="/materiales" className={styles.brandMenu} onClick={closeMenu}>Materiales</Link></li>
        <li><Link href="/contacto" className={styles.brandMenu} onClick={closeMenu}>Contacto</Link></li>
      </ul>

      {/* Overlay para cerrar menú en móvil */}
      {isMenuOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}
    </nav>
  );
} 