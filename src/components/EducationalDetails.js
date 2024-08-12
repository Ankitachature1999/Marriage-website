import React from 'react';
import './EducationForm.css'; // Create and import the CSS file for styling

const EducationDetails = ({ formData, handleChange }) => {
  return (
    <div className="education-details-container">
      <h2 className="form-title">Education Details</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          >
            <option value="">Nothing selected</option>
            {/* Add education options here */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            placeholder="Doctor, Student, Farming"
            value={formData.occupation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="annualIncome">Annual Income</label>
          <div className="currency-input">
            <input
              type="text"
              id="annualIncome"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
            />
            <span className="currency-symbol">₹</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="workLocation">Work Location</label>
          <input
            type="text"
            id="workLocation"
            name="workLocation"
            placeholder="Enter current work location city"
            value={formData.workLocation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>NRI</label>
          <div>
            <label>
              <input
                type="radio"
                name="nri"
                value="Yes"
                checked={formData.nri === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="nri"
                value="No"
                checked={formData.nri === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
