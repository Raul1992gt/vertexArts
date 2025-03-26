import React from 'react';
import Header from './components/Header/Header'; // Actualizado
import Banner from './components/Banner/Banner'; // Actualizado
import Categories from './components/Categories/Categories'; // Actualizado
import Footer from './components/Footer/Footer'; // Actualizado

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
}