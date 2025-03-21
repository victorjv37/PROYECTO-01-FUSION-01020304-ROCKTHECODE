import React, { useState, useEffect } from 'react';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('nature');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&per_page=12`
      );
      if (!response.ok) {
        throw new Error('Error al cargar las imágenes');
      }
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Error al cargar las imágenes. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImages();
  };

  return (
    <div className="gallery">
      <h2 className="gallery-title">Galería de Imágenes</h2>
      <form onSubmit={handleSubmit} className="gallery-search">
        <input 
          type="text" 
          placeholder="Buscar imágenes..." 
          value={searchTerm} 
          onChange={handleSearch}
          className="gallery-search-input"
        />
        <button type="submit" className="gallery-search-button">Buscar</button>
      </form>
      
      {loading && <div className="gallery-loading">Cargando...</div>}
      {error && <div className="gallery-error">{error}</div>}
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.urls.small} 
              alt={image.alt_description || 'Imagen de Unsplash'} 
              className="gallery-image"
            />
            <div className="gallery-item-overlay">
              <p className="gallery-item-author">Por {image.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery; 