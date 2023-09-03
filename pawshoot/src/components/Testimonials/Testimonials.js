import React from 'react';
import './Testimonials.css';
import person1 from './images/testimonial-1.jpg'
import person2 from './images/testimonial-2.jpg'
import person3 from './images/testimonial-3.jpg'

function Testimonials() {
  const testimonials = [
    {
      name: 'Petra Shepherd',
      quote: 'Pawshoot exceeded my expectations! They captured the true essence of my pet and delivered stunning photos. I already booked another time.',
      image: person1,
    },
    {
      name: 'Richard Burkley',
      quote: 'I couldn\'t be happier with the photos of my fur babies. Pawshoot truly understands the bond between pets and their owners.',
      image: person2,
    },
    {
      name: 'David Wilson',
      quote: 'The professionalism and creativity of Pawshoot Photography are unparalleled. I highly recommend their services for pet lovers!',
      image: person3,
    },
  ];

  return (
    <section className="testimonials container py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <img
                        id='tm-img'
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h5 className="card-title">{testimonial.name}</h5>
                      <p className="card-text">{testimonial.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </section>
  );
}

export default Testimonials;