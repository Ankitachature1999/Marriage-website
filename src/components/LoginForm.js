import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // Make sure axios is installed
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ show, handleClose, registeredUsers }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [forgotPassword, setForgotPassword] = useState(false); // New state for forgot password
  const [errors, setErrors] = useState({});
  const [emailSent, setEmailSent] = useState(false); // New state for email sent status
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            navigate('/profile');
            handleClose();
          } else {
            setErrors({ general: 'Invalid email or password' });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setErrors({ general: 'An error occurred. Please try again.' });
        });
    } else {
      setErrors(formErrors);
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/forgot-password', { email: formData.email });
      setEmailSent(true);
    } catch (err) {
      setErrors({ general: 'Error sending password reset email' });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{forgotPassword ? 'Forgot Password' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {forgotPassword ? (
          <Form onSubmit={handleForgotPasswordSubmit}>
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

            {emailSent ? (
              <div className="text-success text-center mb-3">
                Password reset link sent to your email.
              </div>
            ) : (
              <>
                {errors.general && (
                  <div className="text-danger text-center mb-3">
                    {errors.general}
                  </div>
                )}

                <Button variant="primary" type="submit" className="btn-block my-3">
                  Send Reset Link
                </Button>
              </>
            )}
            <div className="text-center mt-3">
              <span>Remembered your password? <a href="#" onClick={() => setForgotPassword(false)}>Login</a></span>
            </div>
          </Form>
        ) : (
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
            <div className="text-center">
              <a href="#" className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</a>
            </div>
          </Form>
        )}
        <div className="text-center mt-3">
          <small>
            By Signing Up You Agree To Our <a href="#">Terms And Conditions</a> And <a href="#">Privacy Policy</a>.
          </small>
        </div>
        <div className="text-center mt-3">
          <span>Do Not Have An Account? <a href="#" onClick={handleClose}>
            <Link to="/register">Register</Link>
          </a></span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginForm;
