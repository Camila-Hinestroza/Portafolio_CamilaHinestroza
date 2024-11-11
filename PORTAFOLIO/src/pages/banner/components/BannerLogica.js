// src/pages/banner/components/BannerLogic.js
import React, { useState } from 'react';

const BannerLogica = ({ onScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToMain = () => {
    setIsScrolled(true);
    setTimeout(() => {
      onScroll(); // Llamar la función que pasa como prop
    }, 500); // Tiempo de animación antes de redirigir
  };

  return (
    <div className={`banner ${isScrolled ? 'slide-up' : ''}`}>
      <div className="banner-content">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Desarrolladora de Software - Creando soluciones elegantes y efectivas</p>
        <button className="scroll-button" onClick={handleScrollToMain}>
          ⬇
        </button>
      </div>
    </div>
  );
};

export default BannerLogica;
