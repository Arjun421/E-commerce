import React, { useState, useEffect } from 'react';
import "../CSS/ShopCategory.css";

const ShopCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products once
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setOriginalProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // Filter products based on exact category match
  useEffect(() => {
    if (category) {
      const filteredProducts = originalProducts.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProducts);
    } else {
      setProducts(originalProducts);
    }
  }, [category, originalProducts]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    if (value === 'low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
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
        <p><span>Sort By:</span></p>
        <select className="shopcategory-sort" onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="shopcategory-products">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="shopcategory-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="title">{product.title}</div>
              <div className="price">${product.price}</div>
              <div className="description">{product.description.slice(0, 100)}...</div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      <div className="shopcategory-loadmore">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
