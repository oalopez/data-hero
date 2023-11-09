// Name: App.js
// Desc: Main app component
// Path: src/App.js

import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { CardStatusContext } from './CardStatusContext';
import Dashboard from './Dashboard';
import './styles/App.css';


function App() {
  const [cardStatuses, setCardStatuses] = useState({});
  const socket = io('http://localhost:3001');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('message', (update) => {
      setCardStatuses(prevStatuses => ({ ...prevStatuses, [update.cardId]: update.status }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <CardStatusContext.Provider value={{ cardStatuses, setCardStatuses }}>
      <Dashboard />
    </CardStatusContext.Provider>
  );
}

export default App;
