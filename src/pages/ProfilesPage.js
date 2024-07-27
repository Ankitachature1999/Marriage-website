import React, { useEffect, useState } from 'react';

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profiles')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched profiles:', data); // Log the fetched data
        if (Array.isArray(data)) {
          setProfiles(data);
        } else {
          setError('Unexpected response format');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err); // Log fetch error
        setError('Failed to fetch profiles');
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Loading profiles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profiles-page">
      <h1 style={{textAlign:'center'}}>Registered Profiles</h1>
      <div className="profiles-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img
              src={`http://localhost:5000/images/${profile.profilePicture}`}
              alt={profile.fullName}
              className="profile-picture"
            />
            <p>{profile.fullName}</p>
            <p>Email: {profile.email}</p>
            <p>Job: {profile.job}</p>
            <p>Salary: {profile.salary}</p>
            <p>Date of Birth: {profile.dateOfBirth}</p>
            <p>Highest Qualification: {profile.highestQualification}</p>
            <p>Brother's Name: {profile.brotherName}</p>
            <p>Sister's Name: {profile.sisterName}</p>
            <p>Expectation: {profile.expectation}</p>
            <p>Father's Name: {profile.fatherName}</p>
            <p>Father's Occupation: {profile.fatherOccupation}</p>
            <p>Farm: {profile.farm}</p>
            <p>Maternal Uncle: {profile.maternalUncle}</p>
            <p>Address: {profile.address}</p>
            <p>Mobile No: {profile.mobileNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;
