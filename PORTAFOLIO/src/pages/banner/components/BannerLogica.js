import React, { useState } from 'react';

const BannerLogica = ({ onScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToMain = () => {
    setIsScrolled(true);
    setTimeout(() => {
      onScroll(); 
    }, 500); 
  };

  return (
    <div className={`banner ${isScrolled ? 'slide-up' : ''}`}>
      <div className="banner-content">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Desarrolladora de Software </p>
        <button className="scroll-button" onClick={handleScrollToMain}>
          ⬇
        </button>
      </div>
    </div>
  );
};

export default BannerLogica;
