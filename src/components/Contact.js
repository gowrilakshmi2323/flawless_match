import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-description">
        We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
      </p>
      <div className="contact-info">
        <p className="email">
          <strong>Email:</strong> <a href="mailto:support@flawlessmatch.com">support@flawlessmatch.com</a>
        </p>
        <div className="social-media">
          <strong>Follow Us:</strong>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" className="input-field" placeholder="Your Name" />
        <input type="email" className="input-field" placeholder="Your Email" />
        <textarea className="input-field" placeholder="Your Message" rows="5"></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
