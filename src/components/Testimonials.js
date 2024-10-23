import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Jessica Lee',
    quote: 'Flawless Match helped me find my perfect foundation shade in minutes. It was easy, accurate, and completely transformed my makeup routine!',
    title: 'Beauty Enthusiast',
  },
  {
    name: 'Michael Green',
    quote: 'As a makeup artist, I am constantly recommending this app to my clients. The AI-powered recommendations are spot-on every time.',
    title: 'Makeup Artist',
  },
  {
    name: 'Samantha Brown',
    quote: 'I love how user-friendly and intuitive Flawless Match is. It made the shade matching process so much simpler for me!',
    title: 'Professional Model',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="quote">“{testimonial.quote}”</p>
            <h3 className="name">{testimonial.name}</h3>
            <p className="title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
