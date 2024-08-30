// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>ReactTools</h1>
      </div>
      <div
        className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/perfil" onClick={toggleMenu}>Perfil</Link></li>
          <li><Link to="/todo" onClick={toggleMenu}>Tareas</Link></li>
          <li><Link to="/clock" onClick={toggleMenu}>Reloj</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/currency" onClick={toggleMenu}>Convertidor</Link></li>
          <li><Link to="/memory-game" onClick={toggleMenu}>Memory Game</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
