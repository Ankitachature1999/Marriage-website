import React, { useState, useEffect } from 'react';
import './About.css'; // Import your CSS file
import { Button } from 'react-bootstrap';
const About = () => {
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
      // Simulate login success
      alert('Login Successful');
    } else {
      setErrors(formErrors);
    }
  };

  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += ' active';
      }
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    };
    showSlides();
  }, []);
 
  return (
    <>
      <div className="about-section">
        <h1 style={{ position: 'relative', marginTop: '50px' }}>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>
      <div>
        <h3 style={{ position: 'relative', textAlign: 'center', marginTop: '20px' }}>Feel free to adjust the content to better fit your website's style and tone.</h3>
        <p style={{ position: 'relative', textAlign: 'center' }}>Genuine Profiles | Safe & Secure | Detailed Family Information</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', marginTop: '20px', border: '2px solid pink' }}>
          <div style={{  }}>
          <div className="Appp" style={{textAlign:'center',}}>
      <h1 style={{fontSize:'64px',lineHeight:'1.2em',verticalAlign:'baseline',textAlign:'start', marginBottom:'40px',color:'#ff3385',position:'relative', marginTop:'6rem' ,  marginLeft:'15px' }}>CREATE YOUR PROFILE<br/>TO FIND MATCH.....</h1>
      <p style={{textAlign:'start', position:'relative', marginLeft:'15px'}}>hello this is ankita and i love you  Ensure your CSS for the slideshow is correctly <br/>Feel free to adjust the content to better fit website's style and tone.......</p>
    <br/>
    
    <Button style={{backgroundColor:'rgb(255, 0, 102)',color:'white', position:'relative', marginRight:'580px', border:'1px solid pink'}} variant="pink" size="lg" active>
        Register Now
      </Button>{' '}
            
    </div>
          </div>
          <div style={{ border: '1px solid white', padding:'30px',     boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px' }}>
            <div className="slideshow-container">
              <div className="mySlides fade" style={{alignItems:'center'}}>
                <div className="numbertext"></div>
                <img src="/images/pink-img1.jpg" style={{ width: '400px', height:'400px' }} alt="Slide 1" />
                <div className="text"></div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                <img src="/images/pink-dress2.jpg" style={{ width:'400px',height:'400px' }} alt="Slide 2" />
                <div className="text"></div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext"></div>
                <img src="/images/pink-dress4.jpg" style={{ width: '400px',height:'400px' }} alt="Slide 3" />
                <div className="text"></div>
              </div>
            </div>
            <br />
            <p style={{textAlign:'center'}}>
            “I'm a testimonial. <br/>Click to edit me and <br/>add text that says something <br/>nice about you and your services.”</p>
            <div style={{ textAlign: 'center' }}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper" style={{ position: 'relative', marginTop: '60px', marginLeft: '155px' }}>
        <div className="content-section">
          <h3 style={{color:'#b30047'}}>Our Mission</h3>
          <p>
            We believe in the power of love and are dedicated to providing a
            safe and secure platform for compatible individuals to find each
            other. We empower users with advanced search filters and personalized
            matching algorithms to create meaningful connections.
          </p>
          <h3 style={{color:'#b30047'}}>Our Values</h3>
          <ul className="values">
            <li>
              <i className="fas fa-heart"></i> Trust & Security
            </li>
            <li>
              <i className="fas fa-search"></i> Compatibility Matching
            </li>
            <li>
              <i className="fas fa-users"></i> Diverse Community
            </li>
            <li>
              <i className="fas fa-heart-pulse"></i> Dedicated Support
            </li>
          </ul>
          <h3 style={{color:'#b30047'}}>Success Stories</h3>
          <div className="testimonials">
            <blockquote>
              <p>
                {/* "Thanks to [Your Website Name], I found the love of my life! We
                couldn't be happier." - [Couple's Names] */}
              </p>
            </blockquote>
            <blockquote>
              <p>
                {/* "This platform is user-friendly and helped me connect with someone
                who shares my values." - [Another Couple's Names] */}
              </p>
            </blockquote>
          </div>
        </div>
        <div className="form-section">
          <h3 style={{color:'#b30047'}}>Login</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Id*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className={errors.email ? 'is-invalid' : ''}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={errors.password ? 'is-invalid' : ''}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            <button type="submit" style={{backgroundColor:' #ff0066'}}>Continue</button>
          </form>
          <div className="text-center">
            <a href="#" className="forgot-password" style={{color:'#b30047'}}>Forgot Password?</a>
          </div>
          <div className="text-center mt-3">
            <small>
              By Signing Up You Agree To Our <a href="#">Terms And Conditions</a> And <a href="#">Privacy Policy</a>.
            </small>
          </div>
        </div>
      </div>
      
    </>
    
  );
};

export default About;
