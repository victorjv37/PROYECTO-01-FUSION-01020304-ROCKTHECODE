import React, { useState, useEffect } from 'react';
import { products } from '../../services/productService';

const Products = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showModal, setShowModal] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000
  });
  const [appliedPriceRange, setAppliedPriceRange] = useState({
    min: 0,
    max: 1000
  });

  useEffect(() => {
    filterProducts();
  }, [searchInput, appliedPriceRange]);

  const filterProducts = () => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesPrice = product.price >= appliedPriceRange.min && product.price <= appliedPriceRange.max;
      return matchesSearch && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePriceRangeChange = (type, value) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: Number(value)
    }));
  };

  const applyPriceFilter = () => {
    setAppliedPriceRange(priceRange);
    setShowModal(false);
  };

  const resetFilters = () => {
    setSearchInput('');
    const resetRange = { min: 0, max: 1000 };
    setPriceRange(resetRange);
    setAppliedPriceRange(resetRange);
  };

  return (
    <div className="products-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={() => setShowModal(true)} className="filter-button">
          Filtrar por precio
        </button>
        <button onClick={resetFilters} className="reset-button">
          Restablecer
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content price-filter">
            <div className="range-group">
              <label>Precio mínimo:</label>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                className="number-input"
                min="0"
              />
              <input
                type="range"
                value={priceRange.min}
                onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                className="range-input"
                min="0"
                max="1000"
              />
            </div>
            <div className="range-group">
              <label>Precio máximo:</label>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                className="number-input"
                min="0"
              />
              <input
                type="range"
                value={priceRange.max}
                onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                className="range-input"
                min="0"
                max="1000"
              />
            </div>
            <div className="button-group">
              <button onClick={applyPriceFilter} className="apply">Aplicar</button>
              <button onClick={() => setShowModal(false)} className="cancel">Cerrar</button>
            </div>
          </div>
        </div>
      )}

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-info">
                  <span className="current-price">${product.price}</span>
                  <span className="original-price">${product.originalPrice}</span>
                  <span className="discount">-{product.discount}%</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
            <p>Intenta con otros criterios de búsqueda...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;