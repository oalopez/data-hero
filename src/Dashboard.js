// Name: Dashboard.js
// Desc: Dashboard component
// Path: src/Dashboard.js

import React from 'react';
import Card from './Card';
import './styles/Dashboard.css'; // Assuming you have a corresponding Dashboard CSS
import Sidebar from './Sidebar';

const Dashboard = () => {
  // Your data probably comes from an API, but we'll use static data for this example
  const cardData = [
    {
        title: 'Superfinanciera',
        status: 'Sin ejecutar',
        lastRun: null,
    },
    {
        title: 'Medicina Legal',
        status: 'Sin ejecutar',
        lastRun: null,
    },
    // ... more card data
  ];

  return (
    <div className="dashboard">
        {cardData.map((data, index) => (
            <Card key={index} {...data} />
        ))}
    </div>
  );
};

export default Dashboard;
