import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cp1 from '../assets/images/cp1.jpg';
import cp2 from '../assets/images/cp2.jpg';
import cp3 from '../assets/images/cp3.jpg';
import cp4 from '../assets/images/cp4.jpeg';
import cp8 from '../assets/images/cp8.jpg';

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
                    <Button variant="primary" className="btn-hover" style={{ backgroundColor: 'rgb(255, 0, 102)', padding: '10px 20px', width: '120px',border:'1px solid rgb(255, 0, 102)',position:'relative', marginTop:'0px' }}>
                      Register
                    </Button>
                  </Link>
          </form>
        </div>
      </div>

      <div className="text-center mb-5" style={{ position: 'relative', marginTop: '20px' }}>
        <h2 className="mb-4" style={{ color: 'black', fontWeight: 'bold', marginLeft: '420px',  }}>
          Create Your Profile Now.....
        </h2>
        <p>"Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!"</p>
       {/* Steps Section */}
      <div className="text-center mb-5">
        
        <div>
          {/* <Row className="justify-content-center">
            <Col md={2} className="mb-4">
              <Card className="text-center step-card" style={{ borderRadius: '0', backgroundColor: '#c74a65', }}>
                <Card.Body>
                  <span role="img" aria-label="create" className="icon" style={{ fontSize: '3em', color: '#ffcc00' }}>📝</span>
                  <Card.Title><Link to="/register" className="step-link" style={{ color: '#ffffff' }}>Create your profile</Link></Card.Title>
                  <Card.Text style={{ color: '#ffffff' }}>
                    Honestly you search for a life Partner? Simple! Create your Matrimonial Profile, fill all about you and your partner preference, Upload photo. Done?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className="mb-4">
              <Card className="text-center step-card" style={{ borderRadius: '0', backgroundColor: '#c74a65' }}>
                <Card.Body>
                  <span role="img" aria-label="find" className="icon" style={{ fontSize: '3em', color: '#ffcc00' }}>🔍</span>
                  <Card.Title><Link to="/register" className="step-link" style={{ color: '#ffffff' }}>Find Compatible</Link></Card.Title>
                  <Card.Text style={{ color: '#ffffff' }}>
                    Choose your match from thousands of profile; View the Profile Photo, Education, Income, Location, Cast, Family details, Horoscope Details etc.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className="mb-4">
              <Card className="text-center step-card" style={{ borderRadius: '0', backgroundColor: '#c74a65' }}>
                <Card.Body>
                  <span role="img" aria-label="connect" className="icon" style={{ fontSize: '3em', color: '#ffcc00' }}>💬</span>
                  <Card.Title><Link to="/register" className="step-link" style={{ color: '#ffffff' }}>Get to know them</Link></Card.Title>
                  <Card.Text style={{ color: '#ffffff' }}>
                    You Shortlisted Some Profile to Proceed, Want to know more details about them? Connect With our Relationship Manager to help for Meeting. Going Well?
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2} className="mb-4">
              <Card className="text-center step-card" style={{ borderRadius: '0', backgroundColor: '#c74a65' }}>
                <Card.Body>
                  <span role="img" aria-label="love" className="icon" style={{ fontSize: '3em', color: '#ffcc00' }}>❤️</span>
                  <Card.Title><Link to="/register" className="step-link" style={{ color: '#ffffff' }}>Find love!</Link></Card.Title>
                  <Card.Text style={{ color: '#ffffff' }}>
                    It's not until you connect with a person that makes you their perfect match, it's when you are satisfied with each other’s peculiarities with each other’s peculiarities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
        <Row className="justify-content-center mb-5 align-items-center">
        <Col md={2} className="text-center">
          <div className="circle-icon mb-2">
            <span role="img" aria-label="create" className="icon">📝</span>
          </div>
          <h5 style={{ color: '#c74a65' }}>Create your profile</h5>
          <p >Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
        </Col>
        <Col md="auto" className="text-center">
          <div className="arrow"></div>
        </Col>
        <Col md={2} className="text-center">
          <div className="circle-icon mb-2">
            <span role="img" aria-label="find" className="icon">🔍</span>
          </div>
          <h5 style={{ color: '#c74a65' }}>Find Compatible</h5>
          <p >Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
        </Col>
        <Col md="auto" className="text-center">
          <div className="arrow"></div>
        </Col>
        <Col md={2} className="text-center">
          <div className="circle-icon mb-2">
            <span role="img" aria-label="connect" className="icon">💬</span>
          </div>
          <h5 style={{ color: '#c74a65' }}>Get to know them</h5>
          <p >Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
        </Col>
        <Col md="auto" className="text-center">
          <div className="arrow"></div>
        </Col>
        <Col md={2} className="text-center">
          <div className="circle-icon mb-2">
            <span role="img" aria-label="love" className="icon">❤️</span>
          </div>
          <h5 style={{ color: '#c74a65' }}>Find love!</h5>
          <p >Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
        </Col>
      </Row>
         
        </div>
      </div>
         
          <Link to="/register">
                    <Button variant="primary" className="btn-hover" style={{ backgroundColor: 'rgb(255, 0, 102)', padding: '10px 20px', width: '150px',border:'1px solid rgb(255, 0, 102)', }}>
                      Register
                    </Button>
                  </Link>
       
      </div>

      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="mb-4" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent' }}>
            <Card.Body style={{ backgroundColor: 'rgb(235, 232, 232)', padding: '20px', borderRadius: '8px' }}>
              <Row>
                <Col md={4}>
                  <img src={cp8} alt="About Lagnagath" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </Col>
                <Col md={8}>
                  <h3 style={{color:'rgb(179, 0, 71)'}}>About Lagnagath</h3>
                  <p>Are you ready to embark on a journey of love, companionship, and lifelong commitment? At Matrimony, we believe that every individual deserves to find their perfect match, someone who understands them, supports them, and shares their dreams. Let's start your journey of finding the perfect life partner with our matchmaking experts.</p>
                  <Link to="/about">
                    <Button variant="primary" className="btn-hover" style={{ backgroundColor: 'rgb(255, 0, 102)', padding: '10px 20px', width: '150px',border:'1px solid rgb(255, 0, 102)' }}>
                      View More
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row className="mb-4 justify-content-center" style={{ width: '100%', backgroundColor:'rgb(235, 232, 232)', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display:'inline-flex' }}>
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
      </Row> */}

<div className="stats-section">
      <h2>Why MatrimonialsIndia.com?</h2>
      <div className="stats-container">
        <div className="stat-box">
          <div className="icon-container">
            <span role="img" aria-label="trust" className="icon">⭐</span>
          </div>
          <h3>27+</h3>
          <p style={{color:'#ff0066'}}>Years of Trust</p>
          <p style={{fontSize:'15px'}}>Showered by the trust and love of our clients for the last 27 Years the trust and love of our.</p>
        </div>
        <div className="stat-box">
          <div className="icon-container">
            <span role="img" aria-label="profiles" className="icon">👥</span>
          </div>
          <h3>1000000+</h3>
          <p style={{color:'#ff0066'}} >Active Profiles</p>
          <p style={{fontSize:'15px'}}>Also new profiles registered every hour increase chances of meeting your soulmate.</p>
        </div>
        <div className="stat-box">
          <div className="icon-container">
            <span role="img" aria-label="visits" className="icon">👁️</span>
          </div>
          <h3>10000+</h3>
          <p style={{color:'#ff0066'}}>Member Visits Everyday</p>
          <p style={{fontSize:'15px'}}>Thousands of members visiting every day & searching their Life Partner here.</p>
        </div>
        <div className="stat-box">
          <div className="icon-container">
            <span role="img" aria-label="marriages" className="icon">💍</span>
          </div>
          <h3>1500+</h3>
          <p style={{color:'#ff0066'}}>Successful Marriages</p>
          <p style={{fontSize:'15px'}}>Thousands have found their soulmate. Now you can be the next.</p>
        </div>
      </div>
      <div className="cta">
        <p>So what are you waiting for? Let us find Your Dream Partner</p>
        <button>REGISTER FREE</button>
      </div>
    </div>





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
