import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProfilesPage.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="profiles-page">
      <h1 style={{ textAlign: 'center' }}>Registered Profiles</h1>
      <Slider {...settings} className="profiles-slider">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img
              src={`http://localhost:5000/images/${profile.profilePicture}`}
              alt={profile.fullName}
              className="profile-picture"
            />
            <div className="profile-details">
              <p><strong>Name:</strong> {profile.fullName}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Job:</strong> {profile.job}</p>
              <p><strong>Salary:</strong> {profile.salary}</p>
              <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
              <p><strong>Highest Qualification:</strong> {profile.highestQualification}</p>
              <p><strong>Brother's Name:</strong> {profile.brotherName}</p>
              <p><strong>Sister's Name:</strong> {profile.sisterName}</p>
              <p><strong>Expectation:</strong> {profile.expectation}</p>
              <p><strong>Father's Name:</strong> {profile.fatherName}</p>
              <p><strong>Father's Occupation:</strong> {profile.fatherOccupation}</p>
              <p><strong>Farm:</strong> {profile.farm}</p>
              <p><strong>Maternal Uncle:</strong> {profile.maternalUncle}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <p><strong>Mobile No:</strong> {profile.mobileNo}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProfilesPage;
