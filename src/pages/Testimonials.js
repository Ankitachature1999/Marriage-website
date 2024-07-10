import React from 'react';
import './Testimonials.css';
import cp1 from '../assets/images/cp1.jpg'; 
import cp2 from '../assets/images/cp2.jpg'; 
import cp3 from '../assets/images/cp3.jpg'; 

const Testimonials = () => {
  // Define testimonialsData inside the component function
  const testimonialsData = [
    {
      image: cp1, // Use the imported image variable directly
      name: 'Akshay Kumar',
      quote: 'Thanks to this matrimony website, I found my perfect match. The services are exceptional, and the support team is always there to help!',
      location: 'New York, USA'
    },
    {
      image: cp2,
      name: 'Jane Smith',
      quote: 'I am grateful for the personalized support and privacy protection this site offers. It made my journey to finding love smooth and secure.',
      location: 'London, UK'
    },
    {
      image: cp3,
      name: 'Rajesh Kumar',
      quote: 'The profile matching and verification process is top-notch. I highly recommend this site to anyone looking for a serious relationship.',
      location: 'Mumbai, India'
    }
  ];

  return (
    <div className="testimonials">
      <h1>What Our Users Say</h1>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-quote">"{testimonial.quote}"</div>
            <div className="testimonial-location">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
