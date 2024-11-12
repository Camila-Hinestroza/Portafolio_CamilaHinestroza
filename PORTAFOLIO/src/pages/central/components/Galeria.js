import React from 'react';
import '../../../styles/Galeria.css'; 

const Galeria = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Proyecto 1",
      descripcion: "Descripción breve del proyecto 1.",
      imagen: "url_de_la_imagen_1",
      link: "https://github.com/usuario/proyecto1"
    },
    {
      id: 2,
      titulo: "Proyecto 2",
      descripcion: "Descripción breve del proyecto 2.",
      imagen: "url_de_la_imagen_2",
      link: "https://github.com/usuario/proyecto2"
    },
    {
      id: 3,
      titulo: "Proyecto 2",
      descripcion: "Descripción breve del proyecto 2.",
      imagen: "url_de_la_imagen_2",
      link: "https://github.com/usuario/proyecto2"
    },
    {
      id: 4,
      titulo: "Proyecto 2",
      descripcion: "Descripción breve del proyecto 2.",
      imagen: "url_de_la_imagen_2",
      link: "https://github.com/usuario/proyecto2"
    },
  ];

  return (
    <section className="galeria-seccion">
      <h2 className="galeria-titulo">GALERIA DE PROYECTOS</h2>
      <div className="galeria">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="tarjeta">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                Ver en GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;