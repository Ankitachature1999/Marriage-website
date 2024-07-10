import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './ProfileForm.css'; // Import the CSS file

const ProfileForm = ({ onClose }) => {
  return (
    <div className="profile-form-overlay">
      <div className="profile-form-container">
        <Button className="close-button" onClick={onClose}>×</Button>
        <Form className="profile-form">
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* Additional fields for login */}
          {/* ... */}
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;


