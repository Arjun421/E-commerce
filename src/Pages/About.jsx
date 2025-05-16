import React from 'react';
import '../CSS/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About <span className="highlight">ShopEase</span></h2>
        <p>
          At <span className="highlight">ShopEase</span>, we bring fashion to your fingertips. Specializing in stylish clothing and elegant jewelry, our mission is to make you look and feel your best—effortlessly.
        </p>
        <p>
          We carefully curate collections that combine quality, comfort, and trend — from everyday wear to special occasion outfits, and from timeless classics to modern accessories.
        </p>
        <p>
          With a customer-first approach, secure shopping, and fast delivery, <span className="highlight">ShopEase</span> is your trusted companion in fashion.
        </p>
      </div>

      <div className="about-metrics">
        <div className="metric-box">
          <h3>10K+</h3>
          <p>Fashion-Lovers Served</p>
        </div>
        <div className="metric-box">
          <h3>1.5K+</h3>
          <p>Unique Styles</p>
        </div>
        <div className="metric-box">
          <h3>4.9★</h3>
          <p>Customer Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;
