import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from './PersonalDetails ';
import EducationalDetails from './EducationalDetails';
import FamilyDetails from './FamilyDetails';
import './MultiStepForm.css'
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
    diet: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/ShowProfile');
  };

  const closeForm = () => {
    navigate('/');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} handleChange={handleChange} />;
      case 2:
        return <EducationalDetails formData={formData} handleChange={handleChange} />;
      case 3:
        return <FamilyDetails formData={formData} handleChange={handleChange} />;
      default:
        return <PersonalDetails formData={formData} handleChange={handleChange} />;
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
