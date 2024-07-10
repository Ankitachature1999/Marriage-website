import React from 'react';

const EducationalDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Educational Details</h2>
      <label>Highest Qualification</label>
      <input
        type="text"
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
      />
      <label>College Name</label>
      <input
        type="text"
        name="collegeName"
        value={formData.collegeName}
        onChange={handleChange}
      />
      <label>Job</label>
      <input
        type="text"
        name="job"
        value={formData.job}
        onChange={handleChange}
      />
      <label>Job Type</label>
      <input
        type="text"
        name="jobType"
        value={formData.jobType}
        onChange={handleChange}
      />
      <label>Annual Income</label>
      <input
        type="text"
        name="annualIncome"
        value={formData.annualIncome}
        onChange={handleChange}
      />
    </div>
  );
};

export default EducationalDetails;
