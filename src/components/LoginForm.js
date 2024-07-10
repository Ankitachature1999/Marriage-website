import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginForm.css';

function LoginForm({ show, handleClose, registeredUsers }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const user = registeredUsers.find(user => user.email === formData.email && user.password === formData.password);
      if (user) {
        alert('Login Successful');
        handleClose();
      } else {
        setErrors({ general: 'Invalid email or password' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Id*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          {errors.general && (
            <div className="text-danger text-center mb-3">
              {errors.general}
            </div>
          )}

          <Button variant="primary" type="submit" className="btn-block my-3">
            Continue
          </Button>
        </Form>
        <div className="text-center">
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <div className="text-center mt-3">
          <small>
            By Signing Up You Agree To Our <a href="#">Terms And Conditions</a> And <a href="#">Privacy Policy</a>.
          </small>
        </div>
        <div className="text-center mt-3">
          <span>Do Not Have An Account? <a href="#" onClick={() => {
            handleClose();
            // Logic to open Register modal
          }}>Register</a></span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginForm;

