import React from 'react';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h2 className="section-title">Welcome to Praise Carmel Prayer House</h2>
        <div className="welcome-content">
          <p className="welcome-text">
            We are a community of believers committed to spreading the love of Christ 
            through worship, prayer, and fellowship. Join us as we gather together to 
            praise God and grow in faith.
          </p>
          <p className="welcome-text">
            Whether you're visiting for the first time or have been part of our family 
            for years, we welcome you with open arms. Come experience the presence of 
            God in a place where hearts are lifted, lives are transformed, and souls 
            find peace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
