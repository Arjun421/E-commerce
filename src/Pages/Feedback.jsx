import React, { useState } from 'react';
import '../CSS/Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send this to a backend or service here
    console.log('Feedback submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="feedback-container">
      <h2>We value your feedback</h2>
      <p>Let us know what you think about our website or service!</p>

      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for your feedback! ❤️</h3>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your feedback here..."
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
