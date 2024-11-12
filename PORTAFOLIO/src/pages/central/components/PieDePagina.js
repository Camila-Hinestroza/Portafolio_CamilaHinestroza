// src/pages/PieDePagina.js
import React from 'react';
import '../../../styles/PieDePagina.css';

const PieDePagina = () => {
  return (
    <section id="pie-de-pagina" className="pie-de-pagina">
      <div className="contacto">
        <h1>Contáctame</h1>
        <form>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu email" />
          <textarea placeholder="Tu mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="redes-sociales">
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://github.com">GitHub</a>
      </div>
    </section>
  );
};

export default PieDePagina;
