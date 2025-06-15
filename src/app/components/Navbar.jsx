import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoGroup}>
        <Link href="/">
          <Image src="/images/logo.png" alt="VertexArt Logo" width={40} height={40} priority />
        </Link>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>VertexArt</span>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/" className={styles.brandMenu}>Inicio</Link></li>
        <li><Link href="/about" className={styles.brandMenu}>Nosotros</Link></li>
        <li className={styles.dropdown}>
          <Link href="/categorias" className={styles.brandMenu}>
            Especialidades <span className={styles.dropdownArrow}>▼</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/categorias/encimeras" className={styles.dropdownLink}>Encimeras</Link></li>
            <li><Link href="/categorias/mobiliario" className={styles.dropdownLink}>Mobiliario</Link></li>
            <li><Link href="/categorias/suelos" className={styles.dropdownLink}>Suelos</Link></li>
            <li><Link href="/categorias/decoracion" className={styles.dropdownLink}>Decoración</Link></li>
          </ul>
        </li>
        <li><Link href="/materiales" className={styles.brandMenu}>Materiales</Link></li>
        <li><Link href="/contacto" className={styles.brandMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
} 