// Name: Card.js
// Desc: Card component. This is the component that will display the card status.
// Path: src/Card.js

import React, { useState } from 'react';
import './styles/Card.css';

/**
 * A card component that displays weather data and allows the user to fetch new data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card.
 * @param {string} props.lastRun - The timestamp of the last data fetch.
 * @returns {JSX.Element} - The card component.
 */

const Card = ({ title, lastRun, status }) => {
  let iconClass = 'fa-regular fa-paper-plane fa-3x card-icon card-icon-blue';
  let statusText = 'Not executed';

  switch (status) {
    case 200:
      iconClass = 'fa-solid fa-check fa-3x card-icon card-icon-green';
      statusText = 'Finished';
      break;
    case 220:
      iconClass = 'fa-solid fa-arrows-rotate fa-3x card-icon card-icon-yellow';
      statusText = 'In process';
      break;
    case 250:
      iconClass = 'fa-regular fa-hourglass-half fa-3x card-icon card-icon-yellow';
      statusText = 'User input';
      break;
    case 500:
      iconClass = 'fa-solid fa-xmark fa-3x card-icon card-icon-red';
      statusText = 'Error';
      break;
    default:
      break;
  }

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-icon-placeholder">
          <i className={iconClass}></i>
          <div className="card-status">{statusText}</div>
        </div>
        {lastRun && (
          <div className="card-last-run">
            Última descarga terminada en: {lastRun}
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
