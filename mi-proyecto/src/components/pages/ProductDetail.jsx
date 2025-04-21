import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/productService';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from URL params
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="product-detail-container not-found">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe o no está disponible.</p>
        <Link to="/products" className="back-button">Volver a Productos</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link to="/products" className="back-button">&larr; Volver a Productos</Link>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="price-info-detail">
            <span className="current-price-detail">${product.price}</span>
            {product.originalPrice && (
              <span className="original-price-detail">${product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="discount-detail">-{product.discount}% OFF</span>
            )}
          </div>
          {/* Add more details or actions as needed */}
          <button className="add-to-cart-button">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 