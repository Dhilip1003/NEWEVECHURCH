import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  // Replace with actual church address
  const churchAddress = "Praise Carmel Prayer House, Main Street, City, State, ZIP Code";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`;

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <div className="contact-content">
          <div className="address-card">
            <h3>Location</h3>
            <p className="address-text">{churchAddress}</p>
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              <span className="map-icon">📍</span>
              Open in Google Maps
            </a>
          </div>
          
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="contact-info">
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> info@praisecarmel.com</p>
              <p><strong>Service Times:</strong></p>
              <ul>
                <li>Sunday: 10:00 AM - 12:00 PM</li>
                <li>Wednesday: 7:00 PM - 8:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
