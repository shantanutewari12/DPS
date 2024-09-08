import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

         {/* Quick Links Section */}
         <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="https://www.dpsyamunanagar.com/admission-information/">Admissions</a></li>
            <li><a href="https://www.dpsyamunanagar.com/infrastructure/nggallery/infrastructure/in-house-facilities">Hostel Facilities</a></li>
            <li><a href="https://www.dpsyamunanagar.com/jobs-careers/">Jobs and Careers</a></li>
            <li><a href="https://www.dpsyamunanagar.com/cbse-mandatory-disclosure/">CBSE Mandatory Disclosure</a></li>
            <li><a href="http://alumni.dpsyamunanagar.com/">Alumni Portal</a></li>
            <li><a href="https://www.dpsyamunanagar.com/privacy-policy/">Privacy Policy</a></li>
            <li><a href="https://www.dpsyamunanagar.com/reach-us/">Reach Us</a></li>
          </ul>
        </div>
        
        {/* About Section */}
        <div className="footer-section about-section">
          <img
            src="https://www.dpsyamunanagar.com/wp-content/uploads/2022/05/logo1.png"
            alt="DPS School Logo"
            className="dps-logo"
          />
          <div className='footer-sectiondps'>
          <h3>Delhi Public School Yamunanagar</h3>
          </div>
          <p className="about-description">
            Delhi Public School Yamunanagar, under the aegis of Delhi Public School Society, Delhi, believes that quality education is about possibilities. We at DPS-YNR view education as a process that takes along students, educators, and parents on an inviting journey - exploring the worlds of intellectual, emotional, and spiritual learning.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/dpsyamunanagar/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/dpsyamunanagarjagadhri/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/delhi-public-school-yamuna-nagar-a507a4ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/c/DELHIPUBLICSCHOOLYAMUNANAGAR" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <br/>
          <div className='contact-section'>
          <p>
            Delhi Public School Yamuna Nagar<br />
            Vill. Bhambholi, Jagadhri – Ambala Road, Opposite Power Grid Station Jagadhri,<br />
            District Yamuna Nagar, Pin – 133103 Haryana (INDIA)
          </p>
          <p><i className="fa fa-envelope"></i> info@dpsyamunanagar.com</p>
          <p><i className="fa fa-phone"></i> 1800-8911-007</p>
          <p><i className="fa fa-globe"></i> www.dpsyamunanagar.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024-2025 Delhi Public School, Yamuna Nagar.</p>
      </div>
    </footer>
  );
};

export default Footer;
