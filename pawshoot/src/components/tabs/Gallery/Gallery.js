import React from 'react';
import './Gallery.css';
import img1 from './images/gallery-1.jpg';
import img2 from './images/gallery-2.jpg';
import img3 from './images/gallery-3.jpg';
import img4 from './images/gallery-4.jpg';
import img5 from './images/gallery-5.jpg';
import img6 from './images/gallery-6.jpg';
import img7 from './images/gallery-7.jpg';
import img8 from './images/gallery-8.jpg';
import img9 from './images/gallery-9.jpg';

function Album() {
  const cardData = [
    {
      img: img1,
      alt: 'alt text here',
    },
    {
      img: img2,
      alt: 'alt text here',
    },
    {
      img: img3,
      alt: 'alt text here',
    },
    {
      img: img4,
      alt: 'alt text here',
    },
    {
      img: img5,
      alt: 'alt text here',
    },
    {
      img: img6,
      alt: 'alt text here',
    },
    {
      img: img7,
      alt: 'alt text here',
    },
    {
      img: img8,
      alt: 'alt text here',
    },
    {
      img: img9,
      alt: 'alt text here',
    },

  ];

  const renderCards = () => {
    return cardData.map((card, index) => (
      <div className="col gallery-col" key={index}>
        <div className="gallery-item">
          <img src={card.img} alt={card.alt} />
        </div>
      </div>
    ));
  };

  return (
    <>
      <section id='album' className="text-center container-fluid">
        <div className="album bg-body-tertiary">
          <div className='gallery'>
            <figure id='album-fig' className="row row-cols-1 row-cols-md-3">
              {renderCards()}
              {renderCards()}
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Album;
