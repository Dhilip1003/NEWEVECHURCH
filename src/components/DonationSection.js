import React, { useState } from 'react';
import './DonationSection.css';

const DonationSection = () => {
  const [showQR, setShowQR] = useState(false);
  const [qrLoading, setQrLoading] = useState(false);

  const handleDonateClick = () => {
    setQrLoading(true);
    setShowQR(false);
    
    // Simulate QR code loading
    setTimeout(() => {
      setQrLoading(false);
      setShowQR(true);
    }, 1500);
  };

  return (
    <section className="donation-section">
      <div className="container">
        <h2 className="section-title">Support Our Ministry</h2>
        <p className="donation-description">
          Your generous contributions help us continue our mission of spreading the Gospel 
          and serving our community. Every donation makes a difference.
        </p>
        
        <div className="donation-content">
          <div className="donation-card">
            <h3>Google Pay</h3>
            <p>Scan the QR code to donate via Google Pay</p>
            
            {!showQR && !qrLoading && (
              <button className="donate-button" onClick={handleDonateClick}>
                Load GPay QR Code
              </button>
            )}
            
            {qrLoading && (
              <div className="qr-loading">
                <div className="spinner"></div>
                <p>Loading QR Code...</p>
              </div>
            )}
            
            {showQR && (
              <div className="qr-container">
                <div className="qr-code-placeholder">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="white"/>
                    <rect x="10" y="10" width="40" height="40" fill="black"/>
                    <rect x="150" y="10" width="40" height="40" fill="black"/>
                    <rect x="10" y="150" width="40" height="40" fill="black"/>
                    <rect x="70" y="70" width="60" height="60" fill="black"/>
                    <rect x="25" y="25" width="10" height="10" fill="white"/>
                    <rect x="165" y="25" width="10" height="10" fill="white"/>
                    <rect x="25" y="165" width="10" height="10" fill="white"/>
                    <rect x="80" y="80" width="40" height="40" fill="white"/>
                    <text x="100" y="100" fontSize="12" fill="#667eea" textAnchor="middle" dy="5">GPay QR</text>
                  </svg>
                </div>
                <p className="qr-instruction">
                  Scan this QR code with Google Pay app to make a donation
                </p>
                <button className="close-qr-button" onClick={() => setShowQR(false)}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
