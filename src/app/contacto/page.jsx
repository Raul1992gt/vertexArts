"use client";

import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

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
    
    const response = await fetch("https://formspree.io/f/mqkngbek", {
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
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contacto;
