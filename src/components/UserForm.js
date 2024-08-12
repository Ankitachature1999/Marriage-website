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

  // State for storing validation errors
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    // Full Name: Required and must be at least 3 characters long
    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = '* Full Name must be at least 3 characters long';
      isValid = false;
    }

    // Email: Required and must be a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = '* Please enter a valid email address';
      isValid = false;
    }

    // Password: Required, must be at least 8 characters with numbers and letters
    if (
      !formData.password ||
      formData.password.length < 8 ||
      !/\d/.test(formData.password) ||
      !/[a-zA-Z]/.test(formData.password)
    ) {
      newErrors.password =
        '* Password must be at least 8 characters long and include both numbers and letters';
      isValid = false;
    }

    // Confirm Password: Must match Password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '* Passwords do not match';
      isValid = false;
    }

    // Salary: Optional but must be a positive number
    if (formData.salary && formData.salary <= 0) {
      newErrors.salary = '* Salary must be a positive number';
      isValid = false;
    }

    // Date of Birth: Required
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = '* Date of Birth is required';
      isValid = false;
    }

    // Mobile Number: Optional but must be 10 digits
    const mobileNoRegex = /^[0-9]{10}$/;
    if (formData.mobileNo && !mobileNoRegex.test(formData.mobileNo)) {
      newErrors.mobileNo = '* Mobile Number must be 10 digits long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

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
        navigate('/login');
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
        {Object.keys(formData).map((key) =>
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
              {errors[key] && <p className="error-text">{errors[key]}</p>}
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
              {errors[key] && <p className="error-text">{errors[key]}</p>}
            </div>
          )
        )}
        <button type="submit" className="submit-button">Register</button>
      </form>
     
    </div>
  
  );
};

export default UserForm;
