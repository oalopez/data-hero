// Name: Dashboard.js
// Desc: Dashboard component. This is the component that will display the cards.
// Path: src/Dashboard.js

import React, { useContext, useEffect } from 'react';
import Card from './Card';
import './styles/Dashboard.css'; // Assuming you have a corresponding Dashboard CSS
import { CardStatusContext } from './CardStatusContext';
import io from 'socket.io-client';


const Dashboard = () => {
  const { cardStatuses, setCardStatuses } = useContext(CardStatusContext);

  const cardData = [
    {
        id: 'superfinanciera',
        title: 'Superfinanciera',
        lastRun: null,
    },
    {
        id: 'medicinal-legal',
        title: 'Medicina Legal',
        lastRun: null,
    },
    // ... more card data
  ];

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('message', (message) => {
      const { cardId, status } = message;
      console.log(`Received update for card ${cardId} with status ${status}`);

      setCardStatuses((prevStatuses) => ({
        ...prevStatuses,
        [cardId]: status,
      }));
    });

    return () => {
      socket.disconnect();
    };
  }, [setCardStatuses]);

  // print the cardStatuses to the console
  console.log(cardStatuses);

  return (
    <div className="dashboard">
        {cardData.map((data) => (
            <Card key={data.id} {...data} status={cardStatuses[data.id]} />
        ))}
    </div>
  );
};

export default Dashboard;