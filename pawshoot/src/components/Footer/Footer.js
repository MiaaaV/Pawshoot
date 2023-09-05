import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='justify-content-center align-items-center text-center'>
        <div className='container align-items-center'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-6 col-12 mb-3 mb-md-0'>
              <div className='d-md-flex flex-column align-items-start'>
                <div className='d-flex align-items-center'>
                  <ion-icon name="mail-outline" />
                  <p className='m-0'>&nbsp;&nbsp;info@pawshoot.com</p>
                </div>
                <div className='d-flex align-items-center'>
                  <ion-icon name="call-outline" />
                  <p className='m-0'>&nbsp;&nbsp;(123) 456-7890</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <p id='copyright' className='m-0'>&copy; 2023 PawshootPhotography</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
