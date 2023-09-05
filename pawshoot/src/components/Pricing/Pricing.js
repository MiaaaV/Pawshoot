import React from 'react';
import './Pricing.css';
import './PricingQuery.css';
import basic from './images/basic.jpg';
import standard from './images/standard.jpg';
import premium from './images/premium.jpg';

const priceImgs = [
  {
    img: basic,
    alt: 'alt text'
  },
  {
    img: standard,
    alt: 'alt text'
  },
  {
    img: premium,
    alt: 'alt text'
  }
]

function Pricing() {

  return (
    <>
      <main id='pricing'>
        <div className='pricing-heading-div'>
          <h2 className="pricing-heading mb-3">Pricing Guide</h2>
        </div>
        <div className="pricing-container">
          <span className='vr' />
          <div className="pricing-column">
            <div className="pricing-card">
              <h2 className='price-h2'>Basic</h2>
              <ul className='pricing-list'>
                <li>Studio or Outdoor</li>
                <li>60 minute session</li>
                <li>15 high-resolution photos</li>
                <li>&nbsp;&nbsp;&nbsp;Basic editing included &nbsp;&nbsp;&nbsp;</li>
              </ul>
              <h2 id='price'>$100</h2>
            </div>
          </div>
          <span className='vr' />
          <div className="pricing-column">
            <div className="pricing-card">
              <h2 className='price-h2'>Standard</h2>
              <ul className='pricing-list'>
                <li>Location of your choice</li>
                <li>120 minute session</li>
                <li>30 high-resolution photos</li>
                <li>Standard editing included</li>
              </ul>
              <h2 id='price'>$200</h2>
            </div>
          </div>
          <span className='vr' />
          <div className="pricing-column">
            <div className="pricing-card">
              <h2 className='price-h2'>Premium</h2>
              <ul className='pricing-list'>
                <li>Multiple locations</li>
                <li>Full day coverage</li>
                <li>100 high-resolution photos</li>
                <li>Premium editing included</li>
              </ul>
              <h2 id='price'>$500</h2>
            </div>
          </div>
          <span className='vr' />
        </div>

        <div className="price-img-container mt-4">
          <div className='price-img-col'>
            {priceImgs.map((item, index) => (
              <div key={index}>
                <img className='price-img' alt={item.alt} src={item.img} />
              </div>
            ))}
          </div>
        </div>
        <h2 className='text-center m-0 pb-5 price-custom'>Get in touch for custom solutions</h2>
      </main>
    </>
  );
};

export default Pricing;
