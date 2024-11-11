// src/pages/contact/ContactForm.js
import React, { useState } from 'react';
import '../../styles/ContactForm.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validación en tiempo real
    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'phone') {
      validatePhone(value);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    setErrors({
      ...errors,
      email: regex.test(email) ? '' : 'Por favor ingrese un email válido.',
    });
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    setErrors({
      ...errors,
      phone: regex.test(phone) ? '' : 'El teléfono debe tener 10 dígitos.',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Activamos el estado de envío

    // Aquí agregaríamos la lógica para enviar el formulario, por ejemplo:
    // await sendForm(formData);

    // Simulamos el envío con un setTimeout para mostrar el efecto
    setTimeout(() => {
      alert('Formulario enviado con éxito!');
      setIsSubmitting(false); // Desactivamos el estado de envío
    }, 2000); // Simulamos 2 segundos de envío
  };

  return (
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={`submit-btn ${isSubmitting ? 'loading' : ''}`} // Añadimos la clase 'loading' cuando está enviando
          disabled={isSubmitting} // Desactivamos el botón mientras se envía
        >
          {isSubmitting ? (
            <span className="spinner"></span> // Spinner de carga
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </div>
  );
};

export default Contacto;
