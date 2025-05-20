import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import '../CSS/Checkout.css';

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nName: ${form.name}\nAddress: ${form.address}\nMobile: ${form.mobile}\nEmail: ${form.email}\nPayment: ${form.paymentMethod}`);
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="checkout-items-preview">
        <h4>Items in Your Cart:</h4>
        <ul>
          {cartItems.map(item => (
            <li key={`${item.id}-${item.size}`} className="checkout-item">
              <img src={item.image} alt={item.title} className="checkout-item-img" />
              <div>
                <strong>{item.title}</strong> (x{item.quantity})
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} />
        <input type="text" name="address" placeholder="Shipping Address" required value={form.address} onChange={handleChange} />
        <input type="tel" name="mobile" placeholder="Mobile Number" required value={form.mobile} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />

        <div className="payment-methods">
          <label><input type="radio" name="paymentMethod" value="cod" checked={form.paymentMethod === 'cod'} onChange={handleChange} /> Cash on Delivery</label>
          <label><input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={handleChange} /> Credit/Debit Card</label>
          <label><input type="radio" name="paymentMethod" value="upi" checked={form.paymentMethod === 'upi'} onChange={handleChange} /> UPI</label>
        </div>

        <div className="order-summary">
          <p><strong>Total Items:</strong> {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
          <p><strong>Total Amount:</strong> ${totalPrice.toFixed(2)}</p>
        </div>

        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
