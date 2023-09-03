import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <main>
      <h5>Pricing</h5>
      <h2>Two simple packages</h2>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {/* Free Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">100€<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
