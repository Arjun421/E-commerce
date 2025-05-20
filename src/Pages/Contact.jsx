import React from 'react';
import '../CSS/Contact.css'; // Optional for styling

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    alert('Thank you! Your message has been submitted.');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
