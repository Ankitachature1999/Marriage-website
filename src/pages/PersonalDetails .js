import React from 'react';

const PersonalDetails = ({ formData, handleChange, handleFileChange }) => {
  return (
    <div className="form-step">
      <h2>Personal Details</h2>
      <div>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" name="height" value={formData.height} onChange={handleChange} />
      </div>
      <div>
        <label>Marital Status:</label>
        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>
      <div>
        <label>Mother Tongue:</label>
        <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} />
      </div>
      <div>
        <label>Religion:</label>
        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div>
        <label>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
      </div>
      <div>
        <label>Profile Image:</label>
        <input type="file" name="profileImage" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default PersonalDetails;
