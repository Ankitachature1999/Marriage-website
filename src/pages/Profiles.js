import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profiles({ userId, onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          {/* Display profile details */}
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profiles;
