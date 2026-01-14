import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="emblem-small"></div>
              <h3>Ankita Singh, IAS</h3>
            </div>
            <p>
              Dedicated to serving the nation with integrity, excellence,
              and commitment to public welfare.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><FaLinkedin /></a>
              <a href="#" className="social-link"><FaTwitter /></a>
              <a href="#" className="social-link"><FaEnvelope /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Urban Development</a></li>
              <li><a href="#services">Rural Development</a></li>
              <li><a href="#services">Education Reform</a></li>
              <li><a href="#services">Healthcare Services</a></li>
              <li><a href="#services">Social Welfare</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>District Collectorate, Metropolitan District</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>ankita.singh@gov.in</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91-11-2345-6789</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p>&copy; {currentYear} Ankita Singh, IAS. All rights reserved.</p>
          <p className="footer-note">
            This is an official portfolio website representing administrative services and achievements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
