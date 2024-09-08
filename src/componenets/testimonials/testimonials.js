import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <h2 className="testimonials-title">What Our Parents Says</h2>

      <div className="testimonials-container">
        {/* First testimonial */}
        <div className="testimonial-card">
          <div className="testimonial-image first-parent-image"></div>
          <div className="testimonial-content">
            <p className="quote-icon">“</p>
            <h3 className="testimonial-name">Shilpa Kumar</h3>
            <p className="testimonial-text">
              The school is living up to the standards of parents' expectations. The staff whether it being teaching faculty or the governesses or the transportation faculty are immensely understanding and supportive. The canteen and mess are applaudable regarding healthy food. A big kudos to the DPS faculty for doing so.
            </p>
          </div>
        </div>

        {/* Second testimonial */}
        <div className="testimonial-card">
          <div className="testimonial-image second-parent-image"></div>
          <div className="testimonial-content">
            <p className="quote-icon">“</p>
            <h3 className="testimonial-name">Jasmeen Bhatia</h3>
            <p className="testimonial-text">
              DPS YNR is a school every parent could dream for their child. A school with intriguing staff, infrastructure, studies, and everything necessary for a perfect education. An epitome of excellence in the field of both education and sports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;