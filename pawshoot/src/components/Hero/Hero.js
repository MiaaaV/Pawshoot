import React, { useState, useEffect } from 'react';
import './Hero.css';
import './HeroQuery.css';
import img1 from '../../images/hero-img-1.png';
import img2 from '../../images/hero-img-2.png';

function Hero() {
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    const colorChangeTimeout = setTimeout(() => {
      setColorChange(true);
    }, 3500);

    return () => {
      clearTimeout(colorChangeTimeout);
    };
  }, []);

  return (
    <>
      <main>
        <div id='hero' className="position-relative overflow-hidden p-md-5 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">

            <h1 id='hero-title' className="display-3 fw-bold">Pawshoot Photography</h1>
            <div className='typewriter'>
              <h3 className='fw-normal mb-3'>
                Immortalise <span className={`fw-normal ${colorChange ? 'color-change' : ''}`}>every</span> moment
              </h3>
            </div>

            <div id='icon-links' className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link text-decoration-none" href="/">
                Something
              </a>
              <a className="icon-link text-decoration-none" href="/">
                Learn more
              </a>
            </div>
          </div>

          <div className="hero-display-2 d-md-block">
            <img id='hero-1' src={img1} alt='A boy hugging a striped cat' className='hero-img' />
          </div>
          <div className="hero-display d-none d-md-block">
            <img src={img2} alt='A black dog' className='hero-img' />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
