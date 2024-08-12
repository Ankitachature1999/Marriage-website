import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfilesPage from './pages/ProfilesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import EducationalDetails from './components/EducationalDetails';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import CareerForm from './pages/CareerForm';
import MultiStepForm from './pages/MultiStepForm';
import PaymentModal from './pages/PaymentModal';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import ProfilesList from './components/Profile';
import Stepper from'./components/Stepper';
import HoroscopeDetails from './components/HoroscopeDetails';







// Example function to check authentication status
const useAuth = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, otherwise false
};

function App() {
  const isAuthenticated = useAuth();

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/profile" element={isAuthenticated ? <ProfilesList /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education-form" element={<EducationalDetails />} />
          <Route path="/HoroscopeDetails" element={<HoroscopeDetails />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />
          <Route path="/career-form" element={<CareerForm />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/paymentModal" element={<PaymentModal />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
