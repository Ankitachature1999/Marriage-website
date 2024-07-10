import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowProfile = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div>
      <h1>Profile</h1>
      <p>Full Name: {formData.fullName}</p>
      <p>Email: {formData.email}</p>
      <p>Gender: {formData.gender}</p>
      <p>Date of Birth: {formData.dateOfBirth}</p>
      <p>Height: {formData.height}</p>
      <p>Marital Status: {formData.maritalStatus}</p>
      <p>Mother Tongue: {formData.motherTongue}</p>
      <p>Religion: {formData.religion}</p>
      <p>City: {formData.city}</p>
      <p>Pin Code: {formData.pinCode}</p>
      <p>Highest Qualification: {formData.highestQualification}</p>
      <p>College Name: {formData.collegeName}</p>
      <p>Job: {formData.job}</p>
      <p>Job Type: {formData.jobType}</p>
      <p>Annual Income: {formData.annualIncome}</p>
      <p>Father Name: {formData.fatherName}</p>
      <p>Mother Name: {formData.motherName}</p>
      <p>Live With Family: {formData.liveWithFamily}</p>
      <p>Family Type: {formData.familyType}</p>
      <p>Diet: {formData.diet}</p>
    </div>
  );
};

export default ShowProfile;
