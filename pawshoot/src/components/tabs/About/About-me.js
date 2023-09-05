import React from 'react';
import './About-me.css';
import owner from './photographer.jpg';
import dog from './dog.jpg';

function AboutMe() {
  return (
    <>
      <main id='about-me'>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className='text-center'>About Me</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac dolor nec sem sodales rhoncus. Cras vitae sem et ligula venenatis scelerisque. In auctor dolor nec mi convallis, in vehicula leo fringilla. Nullam in nulla ut justo sodales dapibus. Quisque facilisis auctor purus sed mattis.
              </p>
              <p>
                Suspendisse vel arcu eget libero varius efficitur. Fusce eu justo nec nisi condimentum posuere. Fusce eu felis nec orci laoreet auctor id in dui. Vivamus eget leo vitae arcu efficitur convallis. Curabitur semper, sem a fringilla tincidunt, arcu tortor aliquam tortor, sit amet tristique ex odio et ex. Vestibulum interdum purus quis nunc lacinia, id tincidunt turpis pharetra. Nulla facilisi. Nullam varius volutpat justo at ullamcorper. Nulla at bibendum velit.
              </p>
              <h2 className='mt-5'>Credentials</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Proin eget metus vel dui rhoncus</li>
              </ul>

              <div className='d-flex mt-4'>
                <img id='about-dog-dt' src={dog} alt="Owner's dog" />
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src={owner}
                alt="Pawshoot's owner"
                className="rounded-circle"
              />
              <h2 className='mt-5'>Photography Equipment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus vel dui rhoncus commodo vitae at nulla. Sed convallis metus nec ullamcorper sodales. Fusce quis nulla urna.
              </p>
              <h2 className='mt-5'>Achievements</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac dolor nec sem sodales rhoncus. Cras vitae sem et ligula venenatis scelerisque. Fusce eu justo nec nisi condimentum posuere.
              </p>
            </div>

            <div className='d-flex justify-content-center'>
              <img id='about-dog' src={dog} alt="Owner's dog" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutMe;
