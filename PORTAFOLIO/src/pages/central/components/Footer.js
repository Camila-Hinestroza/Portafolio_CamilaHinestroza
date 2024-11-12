import React from 'react';
import '../../../styles/Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <div className="footer-titulo">
          <h2>CONTACTAME</h2>
        </div>
        <div className="footer-formulario">
          <form action="#" method="POST">
            <input type="text" name="nombre" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu email" required />
            <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="footer-redes">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};
  

export default Footer;
