import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // ✅ You missed this import
import "./Navbar.css";
import logo from "../../assets/logowebp.png";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img className="img1"src={logo} alt="Logo" height="50px" />
                <p>Grabsy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to="/">Home</Link>
                    {menu === "home" && <hr />}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to="/womens">Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => { setMenu("jeweller") }}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to="/jewelery">Jewellery</Link>
                    {menu === "jewelery" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="Cart" height="40px" /></Link>
            </div>
        </div>
    );
};

export default Navbar;
