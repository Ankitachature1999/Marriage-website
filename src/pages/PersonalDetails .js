import React from 'react';

const PersonalDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h2>Personal Details</h2>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </label>
      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>
      <label>
        Date of Birth:
        <input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </label>
      <label>
        Height:
        <input type="text" name="height" value={formData.height} onChange={handleChange} />
      </label>
      <label>
        Marital Status:
        <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
      </label>
      <label>
        Mother Tongue:
        <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} />
      </label>
      <label>
        Religion:
        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label>
        Pin Code:
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
      </label>
    </div>
  );
};

export default PersonalDetails;
