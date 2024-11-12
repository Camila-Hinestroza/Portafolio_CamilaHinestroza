import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export const fetchWeather = async (latitude, longitude) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude: latitude,
        longitude: longitude,
        current_weather: true,
      },
    });
    return response.data.current_weather;
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    throw error;
  }
};
