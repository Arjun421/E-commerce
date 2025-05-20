// src/Pages/FAQ.js
import React from 'react';
import '../CSS/FAQ.css'; // Match the design with Return.css

const FAQ = () => {
  return (
    <main className="faq-wrapper">
      <div className="faq-content">
        <h1>Frequently Asked Questions</h1>

        <section>
          <h2>1. How can I track my order?</h2>
          <p>
            After placing an order, go to the “My Orders” section under your account. There, you can view tracking details once your order is shipped.
          </p>
        </section>

        <section>
          <h2>2. What is your return policy?</h2>
          <p>
            We accept returns within 7 days of delivery. Items must be unused and in original packaging. Please see our <a href="/returns">Return Policy</a> page for full details.
          </p>
        </section>

        <section>
          <h2>3. Do you offer exchanges?</h2>
          <p>
            We currently do not offer direct exchanges. You may return the item for a refund and place a new order separately.
          </p>
        </section>

        <section>
          <h2>4. What payment methods do you accept?</h2>
          <p>
            We accept UPI, credit/debit cards, net banking, and cash on delivery (COD) at select locations.
          </p>
        </section>

        <section>
          <h2>5. Is my personal information secure?</h2>
          <p>
            Absolutely. We use advanced encryption and security protocols to protect your data. Please refer to our Privacy Policy for more.
          </p>
        </section>

        <section>
          <h2>6. How do I contact customer support?</h2>
          <p>
            You can reach us via our <a href="/contact">Contact</a> page or email us at support@example.com. Our team typically responds within 24 hours.
          </p>
        </section>

        <footer>
          <p>Still have questions? <a href="/contact">Reach out to us</a> — we’re here to help!</p>
        </footer>
      </div>
    </main>
  );
};

export default FAQ;
