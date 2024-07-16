import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from './PersonalDetails ';
import EducationalDetails from './EducationalDetails';
import FamilyDetails from './FamilyDetails';
import './MultiStepForm.css';
import axios from 'axios';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    maritalStatus: '',
    motherTongue: '',
    religion: '',
    city: '',
    pinCode: '',
    highestQualification: '',
    collegeName: '',
    job: '',
    jobType: '',
    annualIncome: '',
    fatherName: '',
    motherName: '',
    liveWithFamily: '',
    familyType: '',
    diet: '',
    profileImage: null // Make sure to initialize file inputs as null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:3000/register', formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/ShowProfile');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const closeForm = () => {
    navigate('/');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />;
      case 2:
        return <EducationalDetails formData={formData} handleChange={handleChange} />;
      case 3:
        return <FamilyDetails formData={formData} handleChange={handleChange} />;
      default:
        return <PersonalDetails formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />;
    }
  };

  return (
    <div className="multi-step-form">
      <button className="close-btn" onClick={closeForm}>X</button>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="form-navigation">
          {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
          {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
