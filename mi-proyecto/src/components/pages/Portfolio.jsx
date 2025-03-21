import React from 'react';

function Portfolio() {
  const projects = [
    { name: 'E-commerce React', description: 'Tienda online con filtros dinámicos.' },
    { name: 'Galería Unsplash', description: 'Galería de imágenes con API de Unsplash.' },
    { name: 'Clon de Pinterest', description: 'Interfaz de galería tipo Pinterest.' },
    { name: 'Portafolio Personal', description: 'Presentación profesional con proyectos destacados.' },
  ];

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">Portafolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio; 