import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get('content-type');
      if (!response.ok || !contentType || !contentType.includes('application/json')) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      if (result.message === 'Login successful') {
        localStorage.setItem('token', result.token); // Save token to localStorage
        navigate('/profile'); // Redirect to profile page
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.message);
    }
  };

  return (
    <div className="login-form-container">
      <span className="close-icon" onClick={() => navigate('/')}>×</span> {/* Close icon */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Login</button>
      </form>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="register-link">
        <p>Do Not Have An Account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
