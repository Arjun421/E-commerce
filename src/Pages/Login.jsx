import React, { useState } from 'react';
import "../CSS/LoginSignup.css"; 

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }


    alert(`Logged in as ${email}`);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Welcome Back</h1>

        <form className="loginsignup-fields" onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email Address" 
            aria-label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <input 
            type="password" 
            placeholder="Password" 
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit" className="primary-btn">Login</button>
        </form>

        <p className="loginsignup-login">
          Don't have an account? <span className="link-text">Sign up here</span>
        </p>
      </div>
    </div>
  );
};