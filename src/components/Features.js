import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-section">
      <h2 className="section-title">Our Features</h2>
      <div className="features-container">
        <div className="feature-item">
          <h3 className="feature-title">AI-Powered Shade Matching</h3>
          <p className="feature-description">
            Our sophisticated AI algorithms analyze your skin tone, undertones, and lighting conditions to provide the most accurate shade recommendations.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Diverse Brand Selection</h3>
          <p className="feature-description">
            Choose from a growing list of top cosmetic brands, including [list of brands]. Find your perfect match within your favorite brand's product line.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Personalized Recommendations</h3>
          <p className="feature-description">
            Receive tailored product suggestions based on your skin type, preferences, and shade match for a truly customized experience.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">User-Friendly Interface</h3>
          <p className="feature-description">
            Our intuitive interface makes it easy to find your perfect shade in just a few taps, offering a seamless and sophisticated experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
