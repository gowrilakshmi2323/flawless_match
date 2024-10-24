import React from 'react';
import './Homepage.css';

// Import screenshots from assets folder
import screenshot1 from './assets/screenshot1.png';
import screenshot2 from './assets/screenshot2.png';
import screenshot3 from './assets/screenshot3.png';
import screenshot4 from './assets/screenshot4.png';
import screenshot5 from './assets/screenshot5.png';
import screenshot6 from './assets/screenshot6.png';
import screenshot7 from './assets/screenshot7.png';
import screenshot8 from './assets/screenshot8.png';

const Homepage = () => {
  const screenshotImages = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
    screenshot7,
    screenshot8
  ];

  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="overlay"></div>
        {/* Display 8 screenshots */}
        <div className="iphone-screenshots">
          {screenshotImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Screenshot ${index + 1}`}
              className="screenshot-image"
            />
          ))}
        </div>
        <div className="hero-content">
          <h1 className="tagline">Find Your Perfect Shade with AI-powered Precision</h1>
          <p className="sub-text">Say goodbye to foundation guesswork.</p>
          <div className="cta-buttons">
            {/* APK Download Button */}
            <a
              href="https://github.com/gowrilakshmi2323/flawless_match/releases/download/v1.0.0/flawless_match.apk"
              className="cta-button download-apk"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Android App
            </a>
            <a href="https://play.google.com" className="cta-button google-play">
              Download on Google Play
            </a>
            <a href="https://apps.apple.com" className="cta-button app-store">
              Download on App Store
            </a>
          </div>
        </div>
      </div>
      <div className="brief-description">
        <p>
          Flawless Match uses cutting-edge AI technology to analyze your unique skin tone and recommend the ideal foundation shade from a vast selection of premium brands. Achieve a flawless, natural look with confidence.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
