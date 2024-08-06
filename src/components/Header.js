import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt } from 'react-icons/fa';
import LoginForm from './LoginForm';
import './Header.css';

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      <div className="pink-navbar">
        <p className="welcome">Welcome to our website</p>
        <span className="call-us">Call Us-9595959595</span>
      </div>
      <Navbar bg="transparent" variant="dark" expand="lg" className="transparent-navbar px-3">
        <Navbar.Brand className="logo" href="/">Matrimony</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-spacing">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link-spacing">About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className="nav-link-spacing">Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link-spacing">Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonial">
              <Nav.Link className="nav-link-spacing">Testimonials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link className="nav-link-spacing">ShowProfile</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="outline-primary" className="login-btn" onClick={handleShowLogin}>
            <FaSignInAlt /> Login
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onClose={handleCloseLogin} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
