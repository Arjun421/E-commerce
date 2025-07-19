import React from 'react';
import '../CSS/Terms.css'; 

const Terms = () => {
  return (
    <main className="terms-wrapper">
      <div className="terms-content">
        <h1>Terms & Conditions</h1>

        <p>Welcome to <span className="brand">ShopEase</span>. By using our website, you agree to these terms and conditions. Please read them carefully before making a purchase.</p>

        <section>
          <h2>1. Use of Website</h2>
          <p>By accessing ShopEase, you agree to use our website for lawful purposes only. You shall not use it to violate any applicable laws or regulations.</p>
        </section>

        <section>
          <h2>2. Products</h2>
          <p>We offer a curated selection of clothing and jewelry. Product images and descriptions are as accurate as possible, but slight variations may occur.</p>
        </section>

        <section>
          <h2>3. Orders and Payment</h2>
          <p>All orders are subject to acceptance. Payments must be completed at checkout. We reserve the right to cancel orders at our discretion.</p>
        </section>

        <section>
          <h2>4. Shipping & Delivery</h2>
          <p>We aim to deliver your orders promptly but cannot guarantee exact delivery dates. Shipping policies may vary depending on your location.</p>
        </section>

        <section>
          <h2>5. Returns & Refunds</h2>
          <p>Returns are accepted within 7 days of delivery if items are unused and in original packaging. Please refer to our Return Policy for details.</p>
        </section>

        <section>
          <h2>6. Privacy & Security</h2>
          <p>Your privacy is important. Our Privacy Policy explains how we collect and use your information. All transactions are secured with industry-standard encryption.</p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>ShopEase reserves the right to update these Terms & Conditions at any time. Continued use of the site implies acceptance of updated terms.</p>
        </section>

        <footer>
          <p>If you have any questions about these terms, please <a href="/contact">contact us</a>.</p>
        </footer>
      </div>
    </main>
  );
};

export default Terms;
