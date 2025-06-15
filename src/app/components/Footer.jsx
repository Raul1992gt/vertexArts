import styles from '../../styles/Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © <a href="https://www.linkedin.com/in/raul-garcia-torrejon/" target="_blank" rel="noopener noreferrer">
          Raul GT {new Date().getFullYear()}
        </a>                  
        . Todos los derechos reservados.
      </div>
      <div className={styles.socials}>
        <Link href="/faq" className={styles.faqLink}>FAQ</Link>
        <a href="https://www.instagram.com/vertexartsdesign?utm_source=qr&igsh=cHkwdTdsMDJzNDgz" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </footer>
  );
} 