import React from 'react';
import './classroom.css'; // Importing CSS for styling

const Classroom = () => {
  return (
    <div className="classroom-wrapper">
      <h1 className="classroom-title">Beyond The Classroom</h1>
      <div className="classroom-cards-container">
        <div className="classroom-card">
          <div className="card-image academics"></div>
          <div className="card-content">
            <h2>Academics</h2>
            <p>Join us to enthuse, empower and excel your ward</p>
          </div>
        </div>

        <div className="classroom-card">
          <div className="card-image infrastructure"></div>
          <div className="card-content">
            <h2>Infrastructure</h2>
            <p>17 acres eco-friendly campus</p>
          </div>
        </div>

        <div className="classroom-card">
          <div className="card-image sports"></div>
          <div className="card-content">
            <h2>Sports</h2>
            <p>Passion first and everything will come into place</p>
          </div>
        </div>

        <div className="classroom-card">
          <div className="card-image pastoral-care"></div>
          <div className="card-content">
            <h2>Pastoral Care</h2>
            <p>Where caring is not just a duty but culture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;