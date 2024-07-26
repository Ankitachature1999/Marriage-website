import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfilesPage.css'; // Ensure this file exists and is correctly referenced

const ProfilesPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-all-users');
        setProfiles(response.data);
      } catch (err) {
        setError('Error fetching user data');
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profiles-page">
      <h1>User Profiles</h1>
      <div className="profiles-list">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <img
              src={`http://localhost:5000/uploads/${profile.profilePicture}`}
              alt="Profile"
              className="profile-image"
            />
            <h2>{profile.fullName}</h2>
            <p>Email: {profile.email}</p>
            <p>Salary: {profile.salary}</p>
            <p>Date of Birth: {profile.dateOfBirth}</p>
            <p>Qualification: {profile.highestQualification}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilesPage;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProfilePage = () => {
//   const [profile, setProfile] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     fetch('http://localhost:5000/profile', {
//       headers: {
//         Authorization: token,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setProfile(data))
//       .catch((error) => {
//         console.error('Error:', error);
//         navigate('/login');
//       });
//   }, [navigate]);

//   if (!profile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile-page">
//       <h2>Welcome, {profile.fullName}</h2>
//       <p>Email: {profile.email}</p>
//       {/* Add other profile details here */}
//       <p>Salary: {profile.salary}</p>
//             <p>Date of Birth: {profile.dateOfBirth}</p>
//             <p>Qualification: {profile.highestQualification}</p>
//             <p>Job: {profile.job}</p>
//             <p>Brother's Name: {profile.brotherName}</p>
//             <p>Sister's Name: {profile.sisterName}</p>
//             <p>Expectation: {profile.expectation}</p>
//             <p>Father's Name: {profile.fatherName}</p>
//             <p>Father's Occupation: {profile.fatherOccupation}</p>
//             <p>Farm: {profile.farm}</p>
//             <p>Maternal Uncle: {profile.maternalUncle}</p>
//             <p>Address: {profile.address}</p>
//             <p>Mobile No: {profile.mobileNo}</p>
//     </div>
//   );
// };

// export default ProfilePage;
