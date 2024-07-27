import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfilesPage from './pages/ProfilesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import PersonalDetails from './pages/PersonalDetails '; // Adjusted import
import EducationalDetails from './pages/EducationalDetails'; // Adjusted import
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import CareerForm from './pages/CareerForm';

import MultiStepForm from './pages/MultiStepForm';
// import SearchForm from './components/SearchForm'; // Adjusted import
import PaymentModal from './pages/PaymentModal';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<MultiStepForm />} />
          <Route path="/profile" element={<ProfilesPage />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<PersonalDetails />} /> {/* Updated route */}
          <Route path="/educationform" element={<EducationalDetails />} /> {/* Updated route */}
          <Route path="/careerform" element={<CareerForm />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/paymentmodal" element={<PaymentModal />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
