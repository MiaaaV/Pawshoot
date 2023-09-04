import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Pawshoot exceeded my expectations! They captured the true essence of my pet and delivered absolutely stunning photos.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'I couldn\'t be happier with the photos of my fur babies. Pawshoot truly understands the bond between pets and their owners.',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    text: 'The professionalism and creativity of Pawshoot Photography are unparalleled. I highly recommend their services for pet lovers!',
  },
  {
    id: 4,
    name: 'Alice Brown',
    text: 'The team at Pawshoot made the entire photo session a joyful experience. They have a genuine love for pets, and it shows in their work.',
  },
  {
    id: 5,
    name: 'Ella Davis',
    text: 'Pawshoot\'s attention to detail is exceptional. They capture the unique personality of each pet, resulting in beautiful and heartwarming photos.',
  },
  {
    id: 6,
    name: 'Sam Wilson',
    text: 'I was amazed by the creativity and dedication of the Pawshoot team. They go above and beyond to create memorable pet portraits.'
  },
];

function Testimonials() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [testimonialsGroups, setTestimonialsGroups] = useState([]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updatedGroups = [];
    for (let i = 0; i < testimonials.length; i += (isMobile ? 1 : 3)) {
      const group = testimonials.slice(i, i + (isMobile ? 1 : 3));
      updatedGroups.push(group);
    }
    setTestimonialsGroups(updatedGroups);
  }, [isMobile]);

  return (
    <>
      <section id='testimonials' className='pt-3 pb-3'>
        <div className="container text-center mt-2 mb-2">
          <h2>My customers are the cornerstone of my success</h2>
          <p>Feedback directly from fellow pet owners</p>
          <hr />
          <Carousel interval={null} controls={true} pause={false}>
            {testimonialsGroups.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="row testimonials-row">
                  {group.map((testimonial) => (
                    <div key={testimonial.id} className="col-md-4">
                      <div className="testimonial">
                        <p>{testimonial.text}</p>
                        <p>
                          <strong>{testimonial.name}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Testimonials;