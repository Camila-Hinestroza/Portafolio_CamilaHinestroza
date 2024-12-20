import React, { useEffect, useState } from 'react';
import '../../../styles/Habilidades.css';
import { fetchWeather } from '../../../services/Api';

const Habilidades = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        // Coordenadas de Medellín
        const latitude = 6.2442;
        const longitude = -75.5812;
        
        // Obtener el clima
        const weatherData = await fetchWeather(latitude, longitude);
        setWeather(weatherData);
      } catch (error) {
        setError('No se pudo obtener el clima');
      }
    };

    getWeather();
  }, []);

  return (
    <section className="habilidades" id="habilidades">
      <h1>HABILIDADES</h1>
      <div className="habilidades-content">
        <div className="habilidades-list">
          <div>
            <h2>Desarrollo Front-end en proceso</h2>
            <p>creación de interfaces de usuario intuitivas y responsivas utilizando tecnologías como HTML, CSS, JavaScript</p>
            <p></p>
          </div>
          <div>
            <h2>Resolución de Problemas</h2>
            <p> Habilidad para analizar y solucionar problemas, optimizar el rendimiento de aplicaciones y desarrollando soluciones.</p>
          </div>
          <div>
            <h2>Desarrollo de Aplicaciones CRUD</h2>
            <p> Competencia en la creación de aplicaciones que permitan realizar operaciones básicas de bases de datos.</p>
          </div>
        </div>
        <div className="clima">
          <h2>Clima Actual <br/>
           Medellin</h2>
          <img className="clima-icon" src="https://cdn-icons-png.flaticon.com/512/6183/6183015.png" width="200%" height="200%" alt="Icono de clima" />
          {weather ? (
            <p>Temperatura: <br/>
            {weather.temperature}°C <br/>
            Viento: <br/>
            {weather.windspeed} km/h</p>
          ) : (
            <p>{error || 'Cargando...'}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;

