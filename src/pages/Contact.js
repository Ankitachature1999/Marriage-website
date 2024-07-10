import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Contact.css'
const Contact = () => {
  return (
    <>   
  <div className="contact-section">
        <h1 style={{ position: 'relative', marginTop: '50px', color:'rgb(179, 0, 71)',marginTop:'6rem' }}>Contact Us Page</h1>
        {/* <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p> */}
      </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',  }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', maxWidth: '1200px', marginBottom: '20px', }}>
        <form style={{ width: '45%', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', }}>
          <h2 style={{color:'rgb(179, 0, 71)'}}>Contact Us</h2>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Name:
            <input type="text" name="name" style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input type="email" name="email" style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Message:
            <textarea name="message" style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />
          </label>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'rgb(255, 0, 102)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </form>
        <div style={{ width: '45%', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h2 style={{color:'rgb(179, 0, 71)'}}>Our Office</h2>
          <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 Matrimony Street, Love City, Country</p>
          <p><i className="fas fa-envelope"></i> <strong>Email:</strong> contact@matrimony.com</p>
          <p><i className="fas fa-map-marked-alt"></i> <strong>Location:</strong> Latitude: 40.712776, Longitude: -74.005974</p>
        </div>
      </div>
      <div style={{ width: '80%', maxWidth: '1200px', height: '300px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2280980876495!2d-74.005974!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168b1cb5b%3A0x808f9b540d9e4fae!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627842014685!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;





