import React from 'react';

const FamilyDetails = ({ formData, handleChange }) => {
  return (
    <div className="form-step">
      <h2>Family Details</h2>
      <div>
        <label>Father's Name:</label>
        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
      </div>
      <div>
        <label>Mother's Name:</label>
        <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
      </div>
      <div>
        <label>Do you live with your family?:</label>
        <select name="liveWithFamily" value={formData.liveWithFamily} onChange={handleChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Family Type:</label>
        <select name="familyType" value={formData.familyType} onChange={handleChange}>
          <option value="">Select Family Type</option>
          <option value="joint">Joint Family</option>
          <option value="nuclear">Nuclear Family</option>
        </select>
      </div>
      <div>
        <label>Diet:</label>
        <select name="diet" value={formData.diet} onChange={handleChange}>
          <option value="">Select Diet</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
    </div>
  );
};

export default FamilyDetails;
