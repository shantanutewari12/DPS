import React from 'react';
import './DPSPage.css';

const DPSPage = () => {
  return (
    <div className="container">
      {/* Logo and School Name in the top-left */}
      <div className="header">
        <div className="logo">
          <img src="https://www.dpsyamunanagar.com/wp-content/uploads/2022/05/logo1.png" alt="DPS Logo" />
        </div>
        <div className="school-name">
          <h2>DELHI PUBLIC SCHOOL, YAMUNA NAGAR- JAGADHRI</h2>
          <br/>
        </div>

        <div className="para-name">
          <p>----------------------------WORLD CLASS CO-EDUCATION CBSE AFFILIATED SCHOOL</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h3>Bringing <br />
            Excellence to Students</h3>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <div className="info-card">
          <h2>1400</h2>
          <p>Students</p>
        </div>
        <div className="info-card">
          <h2>75</h2>
          <p>Teachers</p>
        </div>
        <div className="info-card">
          <h2>40</h2>
          <p>Classes</p>
        </div>
        <div className="info-card">
          <h2>10</h2>
          <p>Labs</p>
        </div>
      </div>
    </div>
  );
};

export default DPSPage;
