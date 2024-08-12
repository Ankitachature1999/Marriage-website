import React, { useState } from "react";
import PersonalDetails from "../components/PersonalDetails ";
import HoroscopeDetails from "../components/HoroscopeDetails";
import EducationDetails from "../components/EducationalDetails";
import FamilyDetails from "../components/FamilyDetails";
import ExpectationsDetailsForm from "../components/ExpectationsDetailsForm";

import "./MultiStepForm.css"; // Add your styling here

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    otherMobile: "",
    telephone: "",
    caste: "",
    birthDate: "",
    bloodGroup: "",
    bodyType: "",
    height: "",
    weight: "",
    complexion: "",
    specsLenses: "",
    disabilities: "",
    diet: "",
    drink: "",
    smoke: "",
    registrationBy: "",
    // Horoscope Details
    horoscopeMatch: "",
    birthPlace: "",
    manglik: "",
    birthTime: "",
    rashi: "",
    gan: "",
    charan: "",
    nadi: "",
    nakshatra: "",
    devak: "",
    // Educational Details
    education: "",
    occupation: "",
    income: "",
    workLocation: "",
    // Family Details
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    // Expectation Details
    expectedCaste: "",
    expectedEducation: "",
    expectedOccupation: "",
    expectedIncome: "",
    expectedLocation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalDetails formData={formData} handleChange={handleChange} />
        );
      case 1:
        return (
          <HoroscopeDetails formData={formData} handleChange={handleChange} />
        );
      case 2:
        return (
          <EducationDetails formData={formData} handleChange={handleChange} />
        );
      case 3:
        return (
          <FamilyDetails formData={formData} handleChange={handleChange} />
        );
      case 4:
        return (
          <ExpectationsDetailsForm formData={formData} handleChange={handleChange} />
        );
      default:
        return <PersonalDetails formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="main-form-container">
      <h1>Matrimony Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="stepper">
          {["Personal", "Horoscope", "Educational", "Family", "Expectation"].map(
            (label, index) => (
              <div
                key={index}
                className={`step ${currentStep === index ? "active" : ""}`}
              >
                {label}
              </div>
            )
          )}
        </div>
        {renderStep()}
        <div className="button-group">
          {currentStep > 0 && <button type="button" onClick={prevStep}>Back</button>}
          {currentStep < 4 ? (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
