// src/Sidebar.js
import React from 'react';
import './styles/Sidebar.css'; // Make sure to create a corresponding CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Add your menu items here */}
      <a href="#dashboard" className="sidebar-item">Dashboard</a>
      <a href="#reports" className="sidebar-item">Reports</a>
      <a href="#settings" className="sidebar-item">Settings</a>
      {/* Add more links as needed */}
    </div>
  );
};

export default Sidebar;
