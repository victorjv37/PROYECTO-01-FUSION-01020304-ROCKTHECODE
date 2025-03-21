import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Bienvenido a Fusion Web</h2>
      <p className="home-description">Una plataforma que combina productos, galería de imágenes y tu portafolio en un solo lugar.</p>
      <div className="home-sections">
        <div className="section-card">
          <div className="section-image products-image"></div>
          <div className="section-content">
            <h3>Productos</h3>
            <p>Explora una amplia gama de productos dinámicos.</p>
            <a href="/products" className="section-button">Ver productos</a>
          </div>
        </div>
        <div className="section-card">
          <div className="section-image gallery-image"></div>
          <div className="section-content">
            <h3>Galería</h3>
            <p>Descubre imágenes sorprendentes con la API de Unsplash.</p>
            <a href="/gallery" className="section-button">Explorar galería</a>
          </div>
        </div>
        <div className="section-card">
          <div className="section-image portfolio-image"></div>
          <div className="section-content">
            <h3>Portafolio</h3>
            <p>Conoce mis proyectos y experiencias profesionales.</p>
            <a href="/portfolio" className="section-button">Ver portafolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 