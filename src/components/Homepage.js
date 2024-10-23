import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="overlay"></div>
        <img src="hero-image-url" alt="Flawless Match" className="hero-image" />
        <div className="hero-content">
          <h1 className="tagline">Find Your Perfect Shade with AI-powered Precision</h1>
          <p className="sub-text">Say goodbye to foundation guesswork.</p>
          <div className="cta-buttons">
            <a href="https://play.google.com" className="cta-button google-play">Download on Google Play</a>
            <a href="https://apps.apple.com" className="cta-button app-store">Download on App Store</a>
          </div>
        </div>
      </div>
      <div className="brief-description">
        <p>Flawless Match uses cutting-edge AI technology to analyze your unique skin tone and recommend the ideal foundation shade from a vast selection of premium brands. Achieve a flawless, natural look with confidence.</p>
      </div>
    </div>
  );
};

export default Homepage;
