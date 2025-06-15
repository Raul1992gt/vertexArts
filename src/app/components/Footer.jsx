import styles from '../../styles/Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        © {new Date().getFullYear()} 
        <a href="https://www.linkedin.com/in/raul-garcia-torrejon/" target="_blank" rel="noopener noreferrer">
          _ Raul GT
        </a>
        . Todos los derechos reservados.
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><FaInstagram /></a>
      </div>
    </footer>
  );
} 