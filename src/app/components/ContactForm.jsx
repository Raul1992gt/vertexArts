import { useState } from 'react';
import styles from '../../styles/ContactForm.module.css';
import Image from 'next/image';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactRow}>
        <div className={styles.contactIntro}>
          <h2>¿Tienes una idea? ¡Hazla realidad!</h2>
          <p>
            Cuéntanos tu proyecto, por más original o ambicioso que sea. Nos apasiona convertir ideas en piezas únicas y personalizadas. ¡Juntos podemos crear algo extraordinario!
          </p>
        </div>
        <div className={styles.contactImageWrapper}>
          <Image src="/vertexArt/images/mobiliario.webp" alt="Proyecto VertexArt" width={500} height={350} className={styles.contactImage} />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="mensaje" placeholder="Mensaje" rows={4} required />
          <button type="submit">Enviar</button>
          {sent && <p className={styles.success}>¡Mensaje enviado! Nos pondremos en contacto pronto.</p>}
        </form>
      </div>
    </section>
  );
} 