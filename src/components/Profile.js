import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/profiles'); // Ensure endpoint matches backend
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profiles-container">
      <h1>All Profiles</h1>
      {profiles.length === 0 ? (
        <p>No profiles found</p>
      ) : (
        <ul>
          {profiles.map(profile => (
            <li key={profile.id}>
              <h2>{profile.fullName}</h2>
              <p>Email: {profile.email}</p>
              <p>Salary: {profile.salary}</p>
              <p>Date of Birth: {profile.dateOfBirth}</p>
              <p>Highest Qualification: {profile.highestQualification}</p>
              <p>Job: {profile.job}</p>
              <p>Brother's Name: {profile.brotherName}</p>
              <p>Sister's Name: {profile.sisterName}</p>
              <p>Expectation: {profile.expectation}</p>
              <p>Father's Name: {profile.fatherName}</p>
              <p>Father's Occupation: {profile.fatherOccupation}</p>
              <p>Farm: {profile.farm}</p>
              <p>Maternal Uncle: {profile.maternalUncle}</p>
              <p>Address: {profile.address}</p>
              <p>Mobile No: {profile.mobileNo}</p>
              {profile.profilePicture && (
                <img src={`http://localhost:5000/uploads/${profile.profilePicture}`} alt={profile.fullName} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfilesList;
