import React from 'react';

const FamilyDetails = ({ formData, handleChange, errors }) => (
  <div>
    <h2>Family Details</h2>
    <label>
      Father's Name:
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />
      {errors.fatherName && <div className="error">{errors.fatherName}</div>}
    </label>
    <label>
      Father's Occupation:
      <input
        type="text"
        name="fatherOccupation"
        value={formData.fatherOccupation}
        onChange={handleChange}
      />
      {errors.fatherOccupation && <div className="error">{errors.fatherOccupation}</div>}
    </label>
    <label>
      Farm:
      <input
        type="text"
        name="farm"
        value={formData.farm}
        onChange={handleChange}
      />
      {errors.farm && <div className="error">{errors.farm}</div>}
    </label>
    <label>
      Maternal Uncle:
      <input
        type="text"
        name="maternalUncle"
        value={formData.maternalUncle}
        onChange={handleChange}
      />
      {errors.maternalUncle && <div className="error">{errors.maternalUncle}</div>}
    </label>
    <label>
      Address:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <div className="error">{errors.address}</div>}
    </label>
    <label>
      Mobile No:
      <input
        type="text"
        name="mobileNo"
        value={formData.mobileNo}
        onChange={handleChange}
      />
      {errors.mobileNo && <div className="error">{errors.mobileNo}</div>}
    </label>
  </div>
);

export default FamilyDetails;
