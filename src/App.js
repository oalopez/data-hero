// Name: App.js
// Desc: Main app component
// Path: src/App.js

import React from 'react';
import './styles/App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app-container">
        <Dashboard />
    </div>
  );
}

export default App;
