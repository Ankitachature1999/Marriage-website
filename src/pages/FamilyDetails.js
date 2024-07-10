import React from 'react';

const FamilyDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Family Details</h2>
      <label>Father's Name</label>
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />
      <label>Mother's Name</label>
      <input
        type="text"
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
      />
      <label>Live with Family</label>
      <input
        type="text"
        name="liveWithFamily"
        value={formData.liveWithFamily}
        onChange={handleChange}
      />
      <label>Family Type</label>
      <input
        type="text"
        name="familyType"
        value={formData.familyType}
        onChange={handleChange}
      />
      <label>Diet</label>
      <input
        type="text"
        name="diet"
        value={formData.diet}
        onChange={handleChange}
      />
    </div>
  );
};

export default FamilyDetails;
