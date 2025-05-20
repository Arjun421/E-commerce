import React from 'react';
import '../CSS/Return.css'; 

const ReturnPolicy = () => {
  return (
    <main className="return-wrapper">
      <div className="return-content">
        <h1>Return Policy</h1>

        <p>
          At <span className="brand">ShopEase</span>, we want you to be completely satisfied with your purchase. If for any reason you are not happy, please review our return policy below.
        </p>

        <section>
          <h2>1. Return Eligibility</h2>
          <p>
            Items must be returned within 7 days of delivery. Products should be unused, in their original packaging, and with all tags intact.
          </p>
        </section>

        <section>
          <h2>2. Non-Returnable Items</h2>
          <p>
            Due to hygiene reasons, we cannot accept returns on jewelry items once worn or any clearance/sale items unless defective.
          </p>
        </section>

        <section>
          <h2>3. Return Process</h2>
          <p>
            To initiate a return, please contact our customer service team within 7 days of receiving your order. Provide your order number and reason for return.
          </p>
        </section>

        <section>
          <h2>4. Refunds</h2>
          <p>
            Refunds will be processed within 5-7 business days after we receive and inspect the returned items. Refunds will be made to the original payment method.
          </p>
        </section>

        <section>
          <h2>5. Exchanges</h2>
          <p>
            We currently do not offer direct exchanges. Please return the unwanted item for a refund and place a new order.
          </p>
        </section>

        <section>
          <h2>6. Shipping Costs</h2>
          <p>
            Customers are responsible for return shipping costs unless the return is due to a defect or error on our part.
          </p>
        </section>

        <footer>
          <p>If you have questions about our return policy, please <a href="/contact">contact us</a>.</p>
        </footer>
      </div>
    </main>
  );
};

export default ReturnPolicy;
