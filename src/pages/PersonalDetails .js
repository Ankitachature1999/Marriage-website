import React from 'react';

const PersonalDetails = ({ formData, handleChange, handleImageChange, errors }) => (
  <div>
    <h2>Personal Details</h2>
    <label>
      Full Name:
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <div className="error">{errors.fullName}</div>}
    </label>
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}
    </label>
    <label>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <div className="error">{errors.password}</div>}
    </label>
    <label>
      Confirm Password:
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
    </label>
    <label>
      Salary:
      <input
        type="text"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
      />
      {errors.salary && <div className="error">{errors.salary}</div>}
    </label>
    <label>
      Date of Birth:
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
      />
      {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
    </label>
    <label>
      Profile Picture:
      <input
        type="file"
        name="profilePicture"
        accept="image/*"
        onChange={handleImageChange}
      />
      {errors.profilePicture && <div className="error">{errors.profilePicture}</div>}
    </label>
  </div>
);

export default PersonalDetails;
