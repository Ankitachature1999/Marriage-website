import React from 'react';

const EducationalDetails = ({ formData, handleChange, errors }) => (
  <div>
    <h2>Educational Details</h2>
    <label>
      Highest Qualification:
      <input
        type="text"
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
      />
      {errors.highestQualification && <div className="error">{errors.highestQualification}</div>}
    </label>
    <label>
      Job:
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
      />
      {errors.job && <div className="error">{errors.job}</div>}
    </label>
    <label>
      Brother's Name:
      <input
        type="text"
        name="brotherName"
        value={formData.brotherName}
        onChange={handleChange}
      />
      {errors.brotherName && <div className="error">{errors.brotherName}</div>}
    </label>
    <label>
      Sister's Name:
      <input
        type="text"
        name="sisterName"
        value={formData.sisterName}
        onChange={handleChange}
      />
      {errors.sisterName && <div className="error">{errors.sisterName}</div>}
    </label>
    <label>
      Expectation:
      <input
        type="text"
        name="expectation"
        value={formData.expectation}
        onChange={handleChange}
      />
      {errors.expectation && <div className="error">{errors.expectation}</div>}
    </label>
  </div>
);

export default EducationalDetails;
