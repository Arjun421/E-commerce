// src/Pages/Support.js
import React from 'react';
import '../CSS/Support.css'; // You can reuse FAQ.css or create a separate Support.css

const Support = () => {
  return (
    <main className="support-wrapper">
      <div className="support-content">
        <h1>Customer Support</h1>

        <section>
          <h2>How can I get help?</h2>
          <p>
            You can contact our support team via email at <a href="mailto:support@example.com">support@example.com</a> or call us at <strong>+1-800-123-4567</strong>. Our support hours are Monday to Friday, 9 AM to 6 PM.
          </p>
        </section>

        <section>
          <h2>Live Chat</h2>
          <p>
            For instant assistance, use the live chat feature available on the bottom right of the website during business hours.
          </p>
        </section>

        <section>
          <h2>Help Center</h2>
          <p>
            Visit our <a href="/faq">FAQ page</a> for answers to common questions and troubleshooting tips.
          </p>
        </section>

        <section>
          <h2>Report a Problem</h2>
          <p>
            If you encounter any issues with your order or the website, please let us know by submitting a message on our <a href="/contact">Contact page</a>.
          </p>
        </section>

        <footer>
          <p>
            We’re here to help! Reach out anytime and we’ll get back to you as soon as possible.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Support;
