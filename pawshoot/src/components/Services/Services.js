import React from 'react';
import './Services.css';
import portrait from './images/pet-portrait.jpg';
import event from './images/pet-event.jpg';
import custom from './images/pet-custom.jpg';

function Services() {
  const services = [
    {
      title: 'Portraits',
      description: 'Capture the most beautiful moments with your beloved pets.',
      image: portrait,
    },
    {
      title: 'Events',
      description: "Photograph your pet's special moments and celebrations.",
      image: event,
    },
    {
      title: 'Custom',
      description: 'Tailored photography sessions to meet your unique needs.',
      image: custom,
    },
  ];

  return (
    <>
      <section id='services'>
        <div className="container service-row">
          {services.map((service, index) => (
            <div className="col-md-4 p-0 text-center" key={index}>
              <div className="text-center my-3 py-3">
                <h2 className="display-5">{service.title}</h2>
                <p className="lead">{service.description}</p>
              </div>
              <div className="bg-body-tertiary shadow-sm mx-auto">
                <img id='service-img' src={service.image} alt={service.title} className="img-fluid full-width-image" />
              </div>
              {index === services.length - 1 ? (
                <div className="text-center my-3 py-3">
                  <button className="btn btn-primary">Book now</button>
                  <p className='service-link'>or see <a id='service-link' href='/'>pricing</a></p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
