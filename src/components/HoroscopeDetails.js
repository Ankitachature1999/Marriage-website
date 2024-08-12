import React from 'react';
import './HoroscopeDetails.css'; // Create and import the CSS file for styling

const HoroscopeDetails = ({ formData, handleChange }) => {
  return (
    <div className="horoscope-details-container">
      <h2 className="form-title">Horoscope Details</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Horoscope Match is Must</label>
          <div>
            <label>
              <input
                type="radio"
                name="horoscopeMatch"
                value="Yes"
                checked={formData.horoscopeMatch === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="horoscopeMatch"
                value="No"
                checked={formData.horoscopeMatch === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthPlace">Birth Place</label>
          <input
            type="text"
            id="birthPlace"
            name="birthPlace"
            placeholder="Enter birth location city"
            value={formData.birthPlace}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Are you Manglik</label>
          <div>
            <label>
              <input
                type="radio"
                name="manglik"
                value="Yes"
                checked={formData.manglik === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="manglik"
                value="No"
                checked={formData.manglik === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthTime">Birth Time</label>
          <input
            type="text"
            id="birthTime"
            name="birthTime"
            placeholder="hh:mm AM"
            value={formData.birthTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rashi">Rashi</label>
          <select
            id="rashi"
            name="rashi"
            value={formData.rashi}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for Rashi here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gan">Gan</label>
          <select
            id="gan"
            name="gan"
            value={formData.gan}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for Gan here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="charan">Charan</label>
          <select
            id="charan"
            name="charan"
            value={formData.charan}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for Charan here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nakshatra">Nakshatra</label>
          <select
            id="nakshatra"
            name="nakshatra"
            value={formData.nakshatra}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for Nakshatra here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gotra">Gotra</label>
          <input
            type="text"
            id="gotra"
            name="gotra"
            value={formData.gotra}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nadi">Nadi</label>
          <select
            id="nadi"
            name="nadi"
            value={formData.nadi}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {/* Add options for Nadi here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="devak">Devak</label>
          <input
            type="text"
            id="devak"
            name="devak"
            value={formData.devak}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="yoni">Yoni</label>
          <input
            type="text"
            id="yoni"
            name="yoni"
            value={formData.yoni}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HoroscopeDetails;

