import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentModal.css';
import phonePeQR from '../assets/images/qR-2.png';
import googlePayQR from '../assets/images/qR-code.png';

const PaymentModal = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-page">
      <h1>Payment Options</h1>
      <div className="payment-method">
        <h2>PhonePe</h2>
        <p>PhonePe Number: 1234567890</p>
        <img src={phonePeQR} alt="PhonePe QR Code" className="qr-code" />
      </div>
      <div className="payment-method">
        <h2>Google Pay</h2>
        <p>Google Pay Number: 0987654321</p>
        <img src={googlePayQR} alt="Google Pay QR Code" className="qr-code" />
      </div>
      <button onClick={() => navigate(-1)} className="back-button">Back</button>
    </div>
  );
};

export default PaymentModal;
