import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css'; // Import your CSS file

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    salary: '',
    dateOfBirth: '',
    highestQualification: '',
    job: '',
    brotherName: '',
    sisterName: '',
    expectation: '',
    fatherName: '',
    fatherOccupation: '',
    farm: '',
    maternalUncle: '',
    address: '',
    mobileNo: '',
    profilePicture: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        body: formDataToSend,
      });

      const contentType = response.headers.get('content-type');
      if (!response.ok || !contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      if (result.message === 'User added successfully') {
        alert('Registration completed successfully!');
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          salary: '',
          dateOfBirth: '',
          highestQualification: '',
          job: '',
          brotherName: '',
          sisterName: '',
          expectation: '',
          fatherName: '',
          fatherOccupation: '',
          farm: '',
          maternalUncle: '',
          address: '',
          mobileNo: '',
          profilePicture: null,
        });
        navigate('/login'); // Navigate to the login page
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="user-form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="user-form">
        {Object.keys(formData).map((key) => (
          key !== 'profilePicture' ? (
            <div className="form-group" key={key}>
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
              <input
                type={key === 'dateOfBirth' ? 'date' : key === 'salary' ? 'number' : 'text'}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          ) : (
            <div className="form-group" key={key}>
              <label htmlFor={key}>Profile Picture</label>
              <input
                type="file"
                id={key}
                name={key}
                onChange={handleChange}
                className="form-control-file"
              />
            </div>
          )
        ))}
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
