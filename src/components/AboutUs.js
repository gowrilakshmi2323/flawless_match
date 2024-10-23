import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="about-content">
        <h2 className="about-title">Our Mission</h2>
        <p className="about-description">
          Our mission is to empower individuals to embrace their unique beauty and find the perfect foundation match with confidence. We believe that every person deserves to feel confident in their own skin, and our technology is here to make that happen.
        </p>

        <h2 className="about-title">Our Story</h2>
        <p className="about-description">
          Flawless Match was born out of the frustration of endless foundation searches. We sought to create a solution that would take the guesswork out of finding the perfect shade. With cutting-edge AI technology, we've developed an app that provides personalized shade recommendations based on your unique skin tone.
        </p>

        <h2 className="about-title">Meet Our Team</h2>
        <p className="about-description">
          Our team is a blend of beauty experts, AI engineers, and business leaders who are passionate about beauty tech. Together, we aim to revolutionize the way people choose their cosmetics by combining the best in beauty expertise with advanced technology.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
