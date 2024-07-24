import React, { useEffect, useState } from 'react';
import './ShowProfile.css';
import { useNavigate } from 'react-router-dom';

const ShowProfile = () => {
  const [formData, setFormData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch profile data from server
    fetch('http://localhost:5000/get-profile?userId=1') // Adjust URL and query parameter based on your endpoint and authentication mechanism
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  if (!formData) {
    return <div className="profile">No profile data found.</div>;
  }

  const handleEditProfile = () => {
    navigate('/edit-profile'); // Navigate to the edit profile page
  };

  return (
    <div className="profile">
      <h1 className="profile-title">Profile</h1>
      <div className="avatar-container">
        {formData.profilePicture ? (
          <img src={`http://localhost:5000/${formData.profilePicture}`} alt="Avatar" className="avatar" />
        ) : (
          <img src={'path/to/default/avatar.jpg'} alt="Avatar" className="avatar" />
        )}
      </div>
      <div className="profile-info">
        <div className="profile-field">
          <strong>Full Name:</strong> <span>{formData.fullName}</span>
        </div>
        <div className="profile-field">
          <strong>Email:</strong> <span>{formData.email}</span>
        </div>
        <div className="profile-field">
          <strong>Mobile No:</strong> <span>{formData.mobileNo}</span>
        </div>
        <div className="profile-field">
          <strong>Salary:</strong> <span>{formData.salary}</span>
        </div>
        <div className="profile-field">
          <strong>DOB:</strong> <span>{formData.dateOfBirth}</span>
        </div>
        <div className="profile-field">
          <strong>Qualification:</strong> <span>{formData.highestQualification}</span>
        </div>
        <div className="profile-field">
          <strong>Job:</strong> <span>{formData.job}</span>
        </div>
        <div className="profile-field">
          <strong>Brother's Name:</strong> <span>{formData.brotherName}</span>
        </div>
        <div className="profile-field">
          <strong>Sister's Name:</strong> <span>{formData.sisterName}</span>
        </div>
        <div className="profile-field">
          <strong>Expectation:</strong> <span>{formData.expectation}</span>
        </div>
        <div className="profile-field">
          <strong>Father's Name:</strong> <span>{formData.fatherName}</span>
        </div>
        <div className="profile-field">
          <strong>Father's Occupation:</strong> <span>{formData.fatherOccupation}</span>
        </div>
        <div className="profile-field">
          <strong>Farm:</strong> <span>{formData.farm}</span>
        </div>
        <div className="profile-field">
          <strong>Maternal Uncle:</strong> <span>{formData.maternalUncle}</span>
        </div>
        <div className="profile-field">
          <strong>Address:</strong> <span>{formData.address}</span>
        </div>
        <button className="edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
};

export default ShowProfile;
