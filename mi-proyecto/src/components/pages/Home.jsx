import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h2 className="home-title">¡Explora el Mundo <span className="accent">Fusion!</span></h2>
        <p className="home-description">Descubre una experiencia única donde productos exclusivos, fotografías impactantes y proyectos creativos se fusionan en un solo espacio.</p>
      </div>
      <div className="home-sections">
        <div className="section-card">
          <div className="section-image products-image"></div>
          <div className="section-content">
            <h3>Productos</h3>
            <p>Explora una amplia gama de productos dinámicos.</p>
            <Link to="/products" className="section-button">Ver productos</Link>
          </div>
        </div>
        <div className="section-card">
          <div className="section-image gallery-image"></div>
          <div className="section-content">
            <h3>Galería</h3>
            <p>Descubre imágenes sorprendentes con la API de Unsplash.</p>
            <Link to="/gallery" className="section-button">Explorar galería</Link>
          </div>
        </div>
        <div className="section-card">
          <div className="section-image portfolio-image"></div>
          <div className="section-content">
            <h3>Portafolio</h3>
            <p>Conoce mis proyectos y experiencias profesionales.</p>
            <Link to="/portfolio" className="section-button">Ver portafolio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 