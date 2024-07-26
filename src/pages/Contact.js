import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <>   
      <div className="contact-section">
        <h1>Contact Us Page</h1>
      </div>
      <div className="contact-container">
        <form className="contact-form">
          <h2>Contact Us</h2>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 Matrimony Street, Love City, Country</p>
          <p><i className="fas fa-envelope"></i> <strong>Email:</strong> contact@matrimony.com</p>
          <p><i className="fas fa-map-marked-alt"></i> <strong>Location:</strong> Latitude: 40.712776, Longitude: -74.005974</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2280980876495!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168b1cb5b%3A0x808f9b540d9e4fae!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627842014685!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
