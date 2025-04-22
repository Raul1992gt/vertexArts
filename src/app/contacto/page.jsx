"use client";

import React, { useState } from 'react';
import styles from './Contacto.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState("");  
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSuccess(true);
      setStatusMessage("✅ ¡Tu mensaje ha sido enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setIsSuccess(false);
      setStatusMessage("❌ Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };
  

  return (
    <div>
      <Header />
      <div className={styles.contactContainer}>
        <div className={styles.imageSection}>
          <img src="/vertexArts/images/logo2.png" alt="Imagen Impactante" className={styles.image} />
        </div>
        <div className={styles.formSection}>
          <h1 className={styles.title}>¡Contáctanos!</h1>
          <p className={styles.subtitle}>Nos encantaría saber de ti, ¿en qué podemos ayudarte?</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={styles.input} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={styles.input} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Mensaje</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className={styles.textarea} 
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>Enviar</button>

            {/* Agregamos el mensaje de éxito/error*/}
            {statusMessage && (
              <p className={isSuccess ? styles.successMessage : styles.errorMessage}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
