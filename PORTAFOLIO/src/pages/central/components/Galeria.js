import React from 'react';
import '../../../styles/Galeria.css'; 
import biblioteca from '../../../Imagenes/biblioteca.jpg';
import calculadora from '../../../Imagenes/calculadora.jpg';
import juego from '../../../Imagenes/juego.jpg';

const Galeria = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Gestion de Biblioteca",
      descripcion: "Pagina Web para gestion de libros y usuarios en una Biblioteca desarrollado en HTML, CSS Y JS.",
      imagen: biblioteca,
      link: "https://github.com/Camila-Hinestroza/Herramientas-de-Programacion-3/tree/main/Gestion_de_Biblioteca"
    },
    {
      id: 2,
      titulo: "Calculadora de notas",
      descripcion: "Su funcion es poder ayudar al manejo de las notas estudiantiles universitarias, desarrollada en C#.",
      imagen: calculadora,
      link: "https://github.com/Myva0512/HerramientasProgramacion3/tree/main/Calculadora_Notas_Estudiantes"
    },
    {
      id: 3,
      titulo: "Juego",
      descripcion: "Juego de Piedra, Papel y Tijera con interaccion entre usuario y consola desarrollado en C#.",
      imagen: juego,
      link: "https://github.com/Camila-Hinestroza/Herramientas-de-Programacion-3/tree/main/Piedra_Papel_Tijera"
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