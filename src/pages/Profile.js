import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import './Profile.css'; // Import your CSS file for additional styling

const Profile = ({ profile }) => {
  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="profile-page">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Header as="h2" className="text-center">Profile Details</Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <Image src={profile.photo} roundedCircle fluid className="profile-photo" />
                </Col>
                <Col md={8}>
                  <h3>{profile.name}</h3>
                  <p><strong>Age:</strong> {profile.age}</p>
                  <p><strong>Height:</strong> {profile.height}</p>
                  <p><strong>Marital Status:</strong> {profile.maritalStatus}</p>
                  <p><strong>Religion:</strong> {profile.religion}</p>
                  <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
                  <p><strong>City:</strong> {profile.city}</p>
                  <p><strong>Contact:</strong> {profile.contact}</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col>
                  <h4>About Me</h4>
                  <p>{profile.aboutMe}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Education & Profession</h4>
                  <p><strong>Education:</strong> {profile.education}</p>
                  <p><strong>Profession:</strong> {profile.profession}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Family Details</h4>
                  <p><strong>Father's Occupation:</strong> {profile.fatherOccupation}</p>
                  <p><strong>Mother's Occupation:</strong> {profile.motherOccupation}</p>
                  <p><strong>Siblings:</strong> {profile.siblings}</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <Button variant="primary" className="mt-3">Send Interest</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.string,
    maritalStatus: PropTypes.string,
    religion: PropTypes.string,
    motherTongue: PropTypes.string,
    city: PropTypes.string,
    contact: PropTypes.string,
    aboutMe: PropTypes.string,
    education: PropTypes.string,
    profession: PropTypes.string,
    fatherOccupation: PropTypes.string,
    motherOccupation: PropTypes.string,
    siblings: PropTypes.string,
  })
};

Profile.defaultProps = {
  profile: {
    photo: '',
    name: '',
    age: null,
    height: '',
    maritalStatus: '',
    religion: '',
    motherTongue: '',
    city: '',
    contact: '',
    aboutMe: '',
    education: '',
    profession: '',
    fatherOccupation: '',
    motherOccupation: '',
    siblings: '',
  }
};

export default Profile;




