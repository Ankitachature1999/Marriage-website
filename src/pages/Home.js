import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cp1 from '../assets/images/cp1.jpg';
import cp2 from '../assets/images/cp2.jpg';
import cp3 from '../assets/images/cp3.jpg';
import cp4 from '../assets/images/cp4.jpeg';
import pic4 from '../assets/images/pic4.jpeg';
import './ProfileForm.css'; // Adjust the CSS import path if necessary
import MultiStepForm from './MultiStepForm'; // Import MultiStepForm

function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <Container fluid>
      <div className="home">
        <div className="overlay">
          <form className="registrationn-form">
            <input type="text" placeholder="Your Full Name" />
            <input type="text" placeholder="Your Mobile Number" />
            <select>
              <option value="">Profile for</option>
              <option value="self">Self</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="sibling">Sibling</option>
            </select>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>

      <div className="text-center mb-5" style={{ position: 'relative', marginTop: '20px' }}>
        <h2 className="mb-4" style={{ color: 'black', fontWeight: 'bold', marginLeft: '300px' }}>
          Create Your Profile Now.....
        </h2>
        <p>"Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!"</p>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-center step-card">
              <Card.Body style={{ backgroundColor: '#ffccff' }}>
                <div className="icon-circle">
                  <span role="img" aria-label="sign up" className="icon">📝</span>
                </div>
                <Card.Title>
                  <Link to="/register" className="step-link">Personal Details</Link>
                </Card.Title>
                <Card.Text style={{ color: '#000000' }}>
                  Register for free & put up your Profile here to find matches
                </Card.Text>
                <p style={{ color: '#000000' }}>Step 1</p>
                <hr />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center step-card">
              <Card.Body style={{ backgroundColor: '#ffccff' }}>
                <div className="icon-circle">
                  <span role="img" aria-label="connect" className="icon">🔗</span>
                </div>
                <Card.Title>
                  <Link to="/educationform" className="step-link">Educational Details</Link>
                </Card.Title>
                <Card.Text style={{ color: '#000000' }}>
                  Select & Connect with Matches that you like the most
                </Card.Text>
                <p style={{ color: '#000000' }}>Step 2</p>
                <hr />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="text-center step-card">
              <Card.Body style={{ backgroundColor: '#ffccff' }}>
                <div className="icon-circle">
                  <span role="img" aria-label="interact" className="icon">💬</span>
                </div>
                <Card.Title>
                  <Link to="/careerform" className="step-link">Other</Link>
                </Card.Title>
                <Card.Text style={{ color: '#000000' }}>
                  Become a Premium Member & Start a communication
                </Card.Text>
                <p style={{ color: '#000000' }}>Step 3</p>
                <hr />
              </Card.Body>
            </Card>
          </Col>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </Row>
      </div>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="mb-4" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}>
            <Card.Body style={{ backgroundColor: '#ffe6ff', padding: '20px', borderRadius: '8px' }}>
              <Row>
                <Col md={4}>
                  <img src={pic4} alt="About Lagnagath" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </Col>
                <Col md={8}>
                  <h3>About Lagnagath</h3>
                  <p>Are you ready to embark on a journey of love, companionship, and lifelong commitment? At Matrimony, we believe that every individual deserves to find their perfect match, someone who understands them, supports them, and shares their dreams. Let's start your journey of finding the perfect life partner with our matchmaking experts.</p>
                  <Link to="/about">
                    <Button variant="primary" className="btn-hover" style={{ backgroundColor: 'blue', padding: '10px 20px', width: '150px' }}>
                      View More
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center" style={{ width: '100%', backgroundColor:'rgb(235, 232, 232)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display:'inline-flex' }}>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem', position: 'relative', marginTop: '10px' }}>
            <Card.Body >
              <span role="img" aria-label="members" style={{ fontSize: '2em' }}>👥</span>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Lakhs of Genuine Members</Card.Title>
              <Card.Text>Search by location, community, profession & more.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem', position: 'relative', marginTop: '10px' }}>
            <Card.Body >
              <span role="img" aria-label="members" style={{ fontSize: '2em' }}>👥</span>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Lakhs of Genuine Members</Card.Title>
              <Card.Text>Search by location, community, profession & more.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={12} className="d-flex justify-content-center">
          <Card className="text-center mb-4" style={{ width: '18rem', position: 'relative', marginTop: '10px' }}>
            <Card.Body >
              <span role="img" aria-label="privacy" style={{ fontSize: '2em' }}>🔒</span>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>100% Privacy</Card.Title>
              <Card.Text>Control who can see your profile and pictures with advanced privacy settings.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 justify-content-center align-items-center">
        <Col xs={12} className="text-center mb-3">
          <h2 className="headline">Matched By Matrimony</h2>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp1} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Couple 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp2} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Couple 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp3} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Couple 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={cp4} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{color:'rgb(179, 0, 71)'}}>Couple 4</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {showForm && <MultiStepForm showForm={showForm} handleClose={handleCloseForm} />}
    </Container>
  );
}

export default Home;
