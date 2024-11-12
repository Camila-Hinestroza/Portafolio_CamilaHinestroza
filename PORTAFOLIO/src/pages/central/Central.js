import React from 'react';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import '../../styles/Central.css'; 

function Central() {
  return (
    <div className="app">
      <SobreMi />
      <Habilidades />
      <Galeria />
      <Footer />
    </div>
  );
}

export default Central;
