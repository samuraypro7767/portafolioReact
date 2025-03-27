import React from 'react';
import { Navbar } from '../Navbar/Navbar.jsx';
import './Header.css'; 

export const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <img src="/icon.png" alt="icon" width="50" />
        <h1><span>Porta</span>Folio</h1>
      </div>
      
      <Navbar />
    </header>
  );
};