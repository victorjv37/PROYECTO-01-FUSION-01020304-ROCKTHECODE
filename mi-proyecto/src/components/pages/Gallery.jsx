import React, { useState, useEffect } from 'react';

function Gallery() {
  const [searchTerm, setSearchTerm] = useState('nature');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&per_page=24`
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

  const openModal = (image, e) => {
    if (e) e.preventDefault();
    console.log("Abriendo modal para:", image.id);
    setModalImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    console.log("Cerrando modal");
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };

  // Para manejar el cierre del modal con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modalImage) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImage]);

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
      
      <div className="pinterest-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-card">
            <div 
              className="gallery-item"
              onClick={(e) => openModal(image, e)}
            >
              <img 
                src={image.urls.regular} 
                alt={image.alt_description || 'Imagen de Unsplash'} 
                className="gallery-image"
              />
              <div className="gallery-item-overlay">
                <a 
                  href={image.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-button"
                  title="Ver en Unsplash"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visitar
                </a>
              </div>
            </div>
            <div className="gallery-info">
              <div className="user-info">
                <img 
                  src={image.user.profile_image.small} 
                  alt={image.user.name} 
                  className="user-avatar" 
                />
                <p className="user-name">{image.user.name}</p>
              </div>
              <a 
                href={`${image.links.download}&force=true`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
                title="Descargar imagen"
              >
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img 
              src={modalImage.urls.regular} 
              alt={modalImage.alt_description || 'Imagen a tamaño completo'} 
              className="modal-image"
            />
            <div className="modal-footer">
              <div className="modal-user-info">
                <img 
                  src={modalImage.user.profile_image.medium} 
                  alt={modalImage.user.name} 
                  className="modal-user-avatar" 
                />
                <div className="modal-user-details">
                  <p className="modal-user-name">{modalImage.user.name}</p>
                  {modalImage.user.instagram_username && (
                    <p className="modal-user-social">@{modalImage.user.instagram_username}</p>
                  )}
                </div>
              </div>
              <div className="modal-actions">
                <a 
                  href={`${modalImage.links.download}&force=true`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-download-button"
                >
                  Descargar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 