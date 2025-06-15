import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoGroup}>
        <Link href="/">
          <Image src="/vertexArts/images/logo.png" alt="VertexArt Logo" width={40} height={40} priority />
        </Link>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>VertexArt</span>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/" className={styles.brandMenu}>Inicio</Link></li>
        <li><Link href="/about" className={styles.brandMenu}>Nosotros</Link></li>
        <li><Link href="/categorias" className={styles.brandMenu}>Categorías</Link></li>
        <li><Link href="/contacto" className={styles.brandMenu}>Contacto</Link></li>
      </ul>
    </nav>
  );
} 