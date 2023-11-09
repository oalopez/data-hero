// Name: Card.js
// Desc: Card component
// Path: src/Card.js

import React, { useState } from 'react';
import './styles/Card.css';

const Card = ({ title, lastRun }) => {
  const [status, setStatus] = useState('Sin ejecutar');
  const [temperature, setTemperature] = useState(null);

  const fetchWeatherData = async () => {
    try {
      // Open-Meteo API URL with the coordinates for London, Ontario
      const url = "https://api.open-meteo.com/v1/forecast?latitude=42.9849&longitude=-81.2453&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching weather data');
      const data = await response.json();
      setTemperature(data.current.temperature_2m);
      setStatus('Done');
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      setStatus('Error');
    }
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-status">{status}</div>
        {lastRun && (
          <div className="card-last-run">
            Última descarga terminada en: {lastRun}
          </div>
        )}
        {temperature && (
          <div className="card-temperature">
            Temperatura: {temperature} °C
          </div>
        )}
        <div className="card-actions">
          <button className="card-button" onClick={fetchWeatherData}>Ejecutar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
