import React from 'react';
import './discover.css';

const Discover = () => {
  return (
    <div className="discover-wrapper">
      <div className="discover-section">
        <div className="virtual-tour">
          <h2>Discover the Best Co-ed CBSE School</h2>
          <div className="tour-video">
          
            <div className="tour-text-overlay">
            <p>DPS 360° Virtual Tour</p>
              <span>Take a look around the campus and see what we have to offer</span>
            </div>
            <div className="tour-image"></div>
            <button className="play-button">►</button>
        </div>
          </div>
        <div className="news-events">
          <h2>News and Events</h2>
          <div className="events-list">
            <div className="event-item event1">
              <div className="event-image event-img1"></div>
              <div>
                <h3>Janmashtami Celebration</h3>
                <p>The school organized various online activities such as Matki and Flute Decoration, Bal Krishna Painting, Krishna Bhajan, and Speech on Krishna Leela.</p>
              </div>
            </div>
            <div className="event-item event2">
              <div className="event-image event-img2"></div>
              <div>
                <h3>Sports Meet 2021-22</h3>
                <p>Sports Meet was organised from August 27 to 29, 2021. Mr. Yogeshwar Dutt (Olympic Gold medalist) graced this event with his presence.</p>
              </div>
            </div>
            <div className="event-item event3">
              <div className="event-image event-img3"></div>
              <div>
                <h3>MUN 4.0</h3>
                <p>DPS NTR organized MUN 4.0 from August 27 to 29, 2021, in which more than 200 delegates from different states participated.</p>
              </div>
            </div>
            <div className="event-item event4">
              <div className="event-image event-img4"></div>
              <div>
                <h3>Sports Meet 2021-22</h3>
                <p>Sports Meet was organised from August 27 to 29, 2021. Mr. Yogeshwar Dutt (Olympic Gold medalist) graced this event with his presence.</p>
              </div>
            </div>
          </div>
          <a href="https://www.dpsyamunanagar.com/achievements/achievements-2024/" className="read-more">Read More →</a>
        </div>
      </div>
    </div>
  );
};

export default Discover;