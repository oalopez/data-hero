// src/Card.js
import React from 'react';
import './styles/Card.css'; // Make sure to create a corresponding CSS file

const Card = ({ title, url, status, lastRun, period }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-status">{status}</div>
        {lastRun && (
          <div className="card-last-run">
            Última descarga terminada en: {lastRun}
            <br />
            Período: {period}
          </div>
        )}
        <div className="card-actions">
          <button className="card-button">Ejecutar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
