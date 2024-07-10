// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import './RegisterForm.css';

// function RegisterForm({ show, handleClose, addUser }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNo: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.mobileNo) newErrors.mobileNo = 'Mobile No is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (formData.password !== formData.confirmPassword)
//       newErrors.confirmPassword = 'Passwords do not match';

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       addUser(formData);
//       alert('Registration Successful');
//       handleClose();
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Register</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formName">
//             <Form.Label>Name*</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               isInvalid={!!errors.name}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.name}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formMobileNo">
//             <Form.Label>Mobile No*</Form.Label>
//             <Form.Control
//               type="text"
//               name="mobileNo"
//               value={formData.mobileNo}
//               onChange={handleChange}
//               isInvalid={!!errors.mobileNo}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.mobileNo}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formEmail">
//             <Form.Label>Email*</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               isInvalid={!!errors.email}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword">
//             <Form.Label>Create Password*</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               isInvalid={!!errors.password}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formConfirmPassword">
//             <Form.Label>Confirm Password*</Form.Label>
//             <Form.Control
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               isInvalid={!!errors.confirmPassword}
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.confirmPassword}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="btn-block my-3">
//             Register
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }

// export default RegisterForm;



import React from 'react';

const RegistrationForm = ({ formData, handleChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields from RegistrationForm */}
      {/* Example: */}
      <label>First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

      <button type="submit">Next</button>
    </form>
  );
};

export default RegistrationForm;
