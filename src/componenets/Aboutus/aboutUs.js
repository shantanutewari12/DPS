import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-container">
        <div className="why-dps-image">
          <h2 className="why-dps-text">WHY DPS?</h2>
        </div>

        <div className="why-dps-cards">
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏫</div>
              <div className="card-text">Established in April 2007</div>
            </div>

            <div className="card">
              <div className="card-icon">📈</div>
              <div className="card-text">Student Teachers Ratio 1:15</div>
            </div>

            <div className="card">
              <div className="card-icon">📚</div>
              <div className="card-text">Ist to XIIth CBSE Curriculum Offered</div>
            </div>

            <div className="card">
              <div className="card-icon">👩‍🏫</div>
              <div className="card-text">200+ In house staff</div>
            </div>

            <div className="card">
              <div className="card-icon">📌</div>
              <div className="card-text">Situated in Yamuna Nagar, Haryana</div>
            </div>

            <div className="card">
              <div className="card-icon">🌍</div>
              <div className="card-text">Spread Across an Area of 17 Acres</div>
            </div>

            <div className="card">
              <div className="card-icon">🧑‍💻</div>
              <div className="card-text">ATAL Tinkering Lab Robotics Lab</div>
            </div>

            <div className="card">
              <div className="card-icon">🏆</div>
              <div className="card-text">Co-ed Boarding School (Abode of Bliss) For Classes IIIrd to XIIth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;