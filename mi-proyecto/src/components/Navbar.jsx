import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Fusion Web</h1>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/gallery">Galería</Link>
          <Link to="/portfolio">Portafolio</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 