import React, { useState } from 'react';
import './FAQ.css';

function FAQAccordion() {
  const faqs = [
    {
      question: 'How do I schedule a photo session for my pet?',
      answer: 'Scheduling a photo session with Pawshoot is easy! Simply visit our "Contact" page and fill out the booking form. We\'ll get back to you to arrange a date and time that works best for you and your furry friend.'
    },
    {
      question: 'What should I bring to the photo session?',
      answer: 'We recommend bringing your pet\'s favorite toys, treats, and any props you\'d like to include in the photos. Don\'t forget to have plenty of patience and love!'
    },
    {
      question: 'Can I include multiple pets in the same photo session?',
      answer: 'Absolutely! We love capturing the bond between pets. Just let us know how many pets you\'d like to include when scheduling the session, and we can plan accordingly. Please note that including multiple pets may incur an additional fee to ensure we provide the best experience for all your furry friends.'
    },
    {
      question: 'How long does it take to receive the edited photos?',
      answer: 'The turnaround time for edited photos may vary depending on the complexity of the session. Generally, you can expect to receive your beautifully edited pet photos within 2-3 weeks.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section id='faq'>
        <div className="container">
          <div className="row test justify-content-center">
            <div className="faq-col col-md-8">
              <div className="faq-accordion">
                <h2 className="mb-4 text-center">Frequently asked</h2>
                {faqs.map((faq, index) => (
                  <div key={index} className={`accordion ${index === activeIndex ? 'show' : ''}`}>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${index === activeIndex ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}>
                          {faq.question}
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${index === activeIndex ? 'show' : ''}`}>
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQAccordion;
