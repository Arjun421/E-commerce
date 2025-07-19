import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import "../CSS/ShopCategory.css";

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const ShopCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('default');

  const { addToCart } = useContext(CartContext);

  // Fetch products
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setOriginalProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // Filter and Search products
  useEffect(() => {
    let filtered = [...originalProducts];

    if (category) {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortType === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  }, [category, originalProducts, searchTerm, sortType]);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setSelectedSize(null);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ ...selectedProduct, size: selectedSize, quantity: 1 });
    alert(`Added ${selectedProduct.title} (Size: ${selectedSize}) to cart!`);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div className="shopcategory-container">Loading products...</div>;
  }

  if (error) {
    return <div className="shopcategory-container">{error}</div>;
  }

  return (
    <div className="shopcategory-container">
      <h1>🛍️ Store Products</h1>

      <div className="shopcategory-indexSort">
        {/* Search Input */}
        <div className="search-section">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="shopcategory-search"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="sort-section">
          <p><span>Sort By:</span></p>
          <select className="shopcategory-sort" onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="shopcategory-products">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              className="shopcategory-card"
              key={product.id}
              onClick={() => openProductDetail(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.title} />
              <div className="title">{product.title}</div>
              <div className="price">${product.price}</div>
              <div className="description">{product.description.slice(0, 100)}...</div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeProductDetail}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProductDetail}>✖</button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" />
            <h2>{selectedProduct.title}</h2>
            <h3>${selectedProduct.price}</h3>
            <p>{selectedProduct.description}</p>

            <div className="size-selector">
              <p>Select Size:</p>
              <div className="sizes">
                {sizes.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="add-to-cart-btn"
              disabled={!selectedSize}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
