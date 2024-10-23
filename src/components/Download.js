import React from 'react';
import './Download.css';
import appStoreIcon from './assets/app-store.png';  // Replace with the actual path of your app store image
import googlePlayIcon from './assets/google-play.png';  // Replace with the actual path of your Google Play image

const Download = () => {
  return (
    <div className="download-section">
      <h2 className="section-title">Get Flawless Match Today</h2>
      <p className="download-description">
        Experience the future of beauty with AI-powered precision. Download Flawless Match on your favorite device and discover your perfect foundation shade with ease.
      </p>
      <div className="download-buttons">
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-link">
          <img src={appStoreIcon} alt="App Store" className="store-icon" />
        </a>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-link">
          <img src={googlePlayIcon} alt="Google Play Store" className="store-icon" />
        </a>
      </div>
    </div>
  );
};

export default Download;
