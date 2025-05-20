import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../CSS/Cart.css';
import cart from "../assets/cart.png";

const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    clearCart,
    totalPrice,
  } = useContext(CartContext);

  const hasItems = cartItems.length > 0;
  const navigate = useNavigate(); // <-- used for routing

  if (!hasItems) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart</h2>
        <img className='img-cart' src={cart} alt="Empty Cart" />
        <p style={{ textAlign: 'center' }}>Your bag is empty! Let’s fill it up shall we?</p>
      </div>
    );
  }

  return (
    <div className="cart-container has-items">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={`${item.id}-${item.size}`} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <strong>{item.title}</strong> (Size: {item.size})
            </div>
            <div className="cart-item-controls">
              <button onClick={() => removeFromCart(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeItemCompletely(item)} className="remove-btn">Remove</button>
            </div>
            <div className="cart-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <p><strong>Total Items:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p><strong>Total Amount:</strong> ${totalPrice.toFixed(2)}</p>
      </div>

      <div className="cart-actions">
        <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        <button onClick={() => navigate('/checkout')} className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
