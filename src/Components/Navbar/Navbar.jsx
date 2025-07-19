import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/logowebp.png";
import cart_icon from "../../assets/cart_icon.png";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className='navbar'>
        <div className="nav-logo">
          <img className="img1" src={logo} alt="Logo" height="50px" />
          <p>Grabsy</p>
        </div>

        {/* Hamburger icon (mobile only) */}
        <div className="hamburger-icon" onClick={() => setIsDrawerOpen(true)}>
          ☰
        </div>

        {/* Desktop Nav Menu */}
        <ul className='nav-menu'>
          <li onClick={() => { setMenu("home") }}>
            <Link className="a" to="/">Home</Link>
            {menu === "home" && <hr />}
          </li>
          <li onClick={() => { setMenu("mens") }}>
            <Link className="a" to="/mens">Men</Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => { setMenu("womens") }}>
            <Link className="a" to="/womens">Women</Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => { setMenu("jewelery") }}>
            <Link className="a" to="/jewelery">Jewellery</Link>
            {menu === "jewelery" && <hr />}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart" className="cart-icon-wrapper">
            <img src={cart_icon} alt="Cart" height="40px" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </div>
      </div>

      {/* Slide-in Drawer (mobile only) */}
      <div className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="close-drawer" onClick={() => setIsDrawerOpen(false)}>×</div>
        <ul className="mobile-links">
          <li><Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
          <li><Link to="/mens" onClick={() => setIsDrawerOpen(false)}>Men</Link></li>
          <li><Link to="/womens" onClick={() => setIsDrawerOpen(false)}>Women</Link></li>
          <li><Link to="/jewelery" onClick={() => setIsDrawerOpen(false)}>Jewellery</Link></li>
          <li><Link to="/login" onClick={() => setIsDrawerOpen(false)}>Login</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
