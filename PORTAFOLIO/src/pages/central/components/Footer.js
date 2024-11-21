import React, { useState } from 'react';
import '../../../styles/Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    console.log(formData); // para ver que esta funcionando

    setTimeout(() => {
      alert('Formulario enviado con éxito!');
      setIsSubmitting(false);
      setFormData({ nombre: '', email: '', mensaje: '' }); 
    }, 2000);
  };

  return (
    <footer className="footer" id='footer'>
      <div className="footer-contenido">
        <div className="footer-titulo">
          <h2>CONTACTAME</h2>
        </div>
        <div className="footer-formulario">
          <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" value={formData.nombre} placeholder="Tu nombre" required onChange={handleChange}/>
            <input type="email" name="email" value={formData.email} placeholder="Tu email" required onChange={handleChange}/>
            <textarea name="mensaje" value={formData.mensaje} placeholder="Tu mensaje" required onChange={handleChange}></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
      <div className="footer-redes">
        <a href="https://www.linkedin.com/in/maria-camila-hinestroza-21a8ba30b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Camila-Hinestroza" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
