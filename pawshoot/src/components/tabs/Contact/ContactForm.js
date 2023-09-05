import React from 'react';
import './ContactForm.css';
import './ContactFormQuery.css';

const ContactForm = () => {
  return (
    <>
      <section id='contact'>
        <div className="contact-form-container">
          <div className='form-content'>
            <h2>Appointments don't reserve themselves</h2>
            <p>Fill out the form to contact me!</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete='none' />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete='none' />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4" />
              </div>
              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          </div>

          <div className="photo-container" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;