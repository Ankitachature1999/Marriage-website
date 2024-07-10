import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ul>
        <li>Profile Matching</li>
        <li>Verified Profiles</li>
        <li>Privacy Protection</li>
        <li>Personalized Support</li>
        <li>Success Stories</li>
        <li>Event Planning</li>
      </ul>

      <h2>Our Packages</h2>
      <div className="packages">
        <div className="package-card">
          <h3>Basic Package</h3>
          <p>Includes basic profile matching and verification.</p>
          <p>Price: $100</p>
          <button>Choose Basic</button>
        </div>
        <div className="package-card">
          <h3>Standard Package</h3>
          <p>Includes all features of Basic plus additional support.</p>
          <p>Price: $200</p>
          <button>Choose Standard</button>
        </div>
        <div className="package-card">
          <h3>Premium Package</h3>
          <p>Includes all features of Standard plus premium services.</p>
          <p>Price: $300</p>
          <button>Choose Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Services;

