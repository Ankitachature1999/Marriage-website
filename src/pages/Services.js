import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Free');
  const navigate = useNavigate();

  const serviceContent = {
    Free: (
      <div className="package-content">
        <h2>Free packs</h2>
        <p>Details: 3 Months</p>
        <p>Rate: ₹ 600</p>
        <b>Silver Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className="pay-now-button" onClick={() => navigate('/paymentModal')}>Go to Payment Options</button>
      </div>
    ),
    Silver: (
      <div className="package-content">
        <h2>Silver packs</h2>
        <p>Details: 3 Months</p>
        <p>Rate: ₹ 600</p>
        <b>Silver Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className="pay-now-button" onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
    Gold: (
      <div className="package-content">
        <h2>Gold packs</h2>
        <p>Details: 6 Months</p>
        <p>Rate: ₹ 1000</p>
        <b>Gold Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className="pay-now-button" onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
    Diamond: (
      <div className="package-content">
        <h2>Diamond packs</h2>
        <p>Details: 12 Months</p>
        <p>Rate: ₹ 2000</p>
        <b>Diamond Membership Benefits</b>
        <ol>
          <li>Browse Profiles</li>
          <li>Send Interest and Shortlist</li>
          <li>Reply Email and SMS</li>
          <li>Reply Chat and Connect</li>
          <li>Customize search</li>
          <li>Get up to 5x more visibility</li>
          <li>View Contact details</li>
          <li>Personalized support</li>
        </ol>
        <button className="pay-now-button" onClick={() => navigate('/paymentModal')}>Pay Now</button>
      </div>
    ),
  };

  return (
    <div className="Services">
      <h1>Our Packages</h1>
      <p>Choose the best plan that suits your needs and find your perfect match with ease. Our packages are designed to give you the best experience and help you connect with genuine profiles. Sign up today and start your journey towards finding true love!</p>
      <div className="tabs">
        {Object.keys(serviceContent).map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} packs
          </div>
        ))}
      </div>
      <div className="content">{serviceContent[activeTab]}</div>
      <div className="ctta">
        <p>So what are you waiting for? Let us find Your Dream Partner</p>
        <button>REGISTER FREE</button>
      </div>
    </div>
  );
};

export default Services;
