import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profiles');
        setProfiles(response.data);
      } catch (err) {
        console.error('Error fetching profiles:', err);
        setError(err.response ? err.response.data.error : 'Error fetching profiles');
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profiles-container">
      <h1>All Profiles</h1>
      {profiles.length === 0 ? (
        <p>No profiles found</p>
      ) : (
        <div className="profile-list">
          {profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <div className="profile-image">
                {profile.profilePicture && (
                  <img
                    src={`http://localhost:5000/uploads/${profile.profilePicture}`}
                    alt={profile.fullName}
                  />
                )}
              </div>
              <div className="profile-details">
                <h2>{profile.fullName}</h2>
                <p>Age / Height: {profile.age} Years, {profile.height}</p>
                <p>Religion: {profile.religion}</p>
                <p>Caste: {profile.caste}</p>
                <p>dateOfBirth: {profile.dateOfBirth}</p>
                <p>Mother Tongue: {profile.motherTongue}</p>
                <p>Education: {profile.highestQualification}</p>
                <p>Occupation: {profile.job}</p>
                <p>Annual Income: {profile.salary}</p>
                {expanded[profile.id] && (
                  <div className="expanded-details">
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
                )}
                <button onClick={() => toggleExpand(profile.id)}>
                  {expanded[profile.id] ? 'Hide Full Profile' : 'View Full Profile'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
