import React from 'react';
import './ShowProfile.css';

const ShowProfile = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (!formData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
      <p><strong>Height:</strong> {formData.height}</p>
      <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
      <p><strong>Mother Tongue:</strong> {formData.motherTongue}</p>
      <p><strong>Religion:</strong> {formData.religion}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Pin Code:</strong> {formData.pinCode}</p>
      <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
      <p><strong>College Name:</strong> {formData.collegeName}</p>
      <p><strong>Job:</strong> {formData.job}</p>
      <p><strong>Job Type:</strong> {formData.jobType}</p>
      <p><strong>Annual Income:</strong> {formData.annualIncome}</p>
      <p><strong>Father's Name:</strong> {formData.fatherName}</p>
      <p><strong>Mother's Name:</strong> {formData.motherName}</p>
      <p><strong>Live With Family:</strong> {formData.liveWithFamily}</p>
      <p><strong>Family Type:</strong> {formData.familyType}</p>
      <p><strong>Diet:</strong> {formData.diet}</p>
    </div>
  );
};

export default ShowProfile;
