// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PersonalDetails from './PersonalDetails ';
// import EducationalDetails from './EducationalDetails';
// import FamilyDetails from './FamilyDetails';
// import './MultiStepForm.css';
// import { debounce } from 'lodash';

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     salary: '',
//     dateOfBirth: '',
//     highestQualification: '',
//     job: '',
//     brotherName: '',
//     sisterName: '',
//     expectation: '',
//     fatherName: '',
//     fatherOccupation: '',
//     farm: '',
//     maternalUncle: '',
//     address: '',
//     mobileNo: '',
//     profilePicture: null,
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Debounced email check
//   const checkEmailAvailability = debounce((email) => {
//     fetch(`http://localhost:5000/api/check-email?email=${email}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.exists) {
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: 'Email already exists. Please use another email.',
//           }));
//         } else {
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: '',
//           }));
//         }
//       })
//       .catch((error) => {
//         console.error('Error checking email:', error);
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           email: 'Error checking email. Please try again later.',
//         }));
//       });
//   }, 500);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Check email availability
//     if (name === 'email') {
//       checkEmailAvailability(value);
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevData) => ({
//         ...prevData,
//         profilePicture: file,
//       }));
//     }
//   };

//   const validateStep1 = () => {
//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = 'Full Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
//     else if (!/[A-Z]/.test(formData.password)) newErrors.password = 'Password must contain at least one uppercase letter';
//     else if (!/[a-z]/.test(formData.password)) newErrors.password = 'Password must contain at least one lowercase letter';
//     else if (!/[0-9]/.test(formData.password)) newErrors.password = 'Password must contain at least one number';
//     else if (!/[!@#$%^&*]/.test(formData.password)) newErrors.password = 'Password must contain at least one special character';
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
//     if (!formData.salary) newErrors.salary = 'Salary is required';
//     else if (isNaN(formData.salary)) newErrors.salary = 'Salary must be a number';
//     if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
//     return newErrors;
//   };

//   const validateStep2 = () => {
//     const newErrors = {};
//     if (!formData.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
//     if (!formData.job) newErrors.job = 'Job is required';
//     if (!formData.brotherName) newErrors.brotherName = 'Brother Name is required';
//     if (!formData.sisterName) newErrors.sisterName = 'Sister Name is required';
//     if (!formData.expectation) newErrors.expectation = 'Expectation is required';
//     return newErrors;
//   };

//   const validateStep3 = () => {
//     const newErrors = {};
//     if (!formData.fatherName) newErrors.fatherName = 'Father\'s Name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.mobileNo) newErrors.mobileNo = 'Mobile No is required';
//     else if (!/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = 'Mobile No must be exactly 10 digits';
//     if (!formData.fatherOccupation) newErrors.fatherOccupation = 'Father\'s Occupation is required';
//     if (!formData.farm) newErrors.farm = 'Farm is required';
//     if (!formData.maternalUncle) newErrors.maternalUncle = 'Maternal Uncle is required';
//     return newErrors;
//   };

//   const validateStep = () => {
//     let newErrors = {};
//     switch (step) {
//       case 1:
//         newErrors = validateStep1();
//         break;
//       case 2:
//         newErrors = validateStep2();
//         break;
//       case 3:
//         newErrors = validateStep3();
//         break;
//       default:
//         break;
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const nextStep = () => {
//     if (validateStep()) {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateStep()) {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         if (key === 'profilePicture' && formData[key]) {
//           formDataToSend.append(key, formData[key], formData[key].name);
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       }

//       try {
//         const response = await fetch('http://localhost:5000/api/register', {
//           method: 'POST',
//           body: formDataToSend,
//         });

//         if (!response.ok) {
//           const text = await response.text();
//           throw new Error(text);
//         }

//         alert('Registration completed successfully!');
//         setTimeout(() => {
//           navigate('/LoginForm');
//         }, 3000); // Redirect after 3 seconds
//       } catch (error) {
//         const errorMessage = error.message.includes('Email already exists')
//           ? 'Email already exists. Please use another email.'
//           : 'An error occurred. Please try again.';

//         if (errorMessage === 'Email already exists. Please use another email.') {
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: errorMessage,
//           }));
//         } else {
//           alert(errorMessage);
//         }
//       }
//     }
//   };

//   const closeForm = () => {
//     navigate('/');
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <PersonalDetails
//             formData={formData}
//             handleChange={handleChange}
//             handleImageChange={handleImageChange}
//             errors={errors}
//           />
//         );
//       case 2:
//         return (
//           <EducationalDetails
//             formData={formData}
//             handleChange={handleChange}
//             errors={errors}
//           />
//         );
//       case 3:
//         return (
//           <FamilyDetails
//             formData={formData}
//             handleChange={handleChange}
//             errors={errors}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="multi-step-form">
//       <form onSubmit={handleSubmit}>
//         {renderStep()}
//         <div className="form-navigation">
//           {step > 1 && (
//             <button type="button" onClick={prevStep} className="prev-btn">
//               Previous
//             </button>
//           )}
//           {step < 3 && (
//             <button type="button" onClick={nextStep} className="next-btn">
//               Next
//             </button>
//           )}
//           {step === 3 && (
//             <button type="submit" className="submit-btn">
//               Submit
//             </button>
//           )}
//           <button type="button" onClick={closeForm} className="close-btn">
//             Close
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MultiStepForm;
import React from 'react'

function MultiStepForm() {
  return (
    <div>MultiStepForm</div>
  )
}

export default MultiStepForm