import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import './AdminHome.css';
import Logo from "../Assets/HeroLogo.png";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Home Header */}
      <header className="header">
        <img alt="" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          A Y R V E D A
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          H O S P I T A L
        </div>

        <button className="login-btnAd" onClick={() => navigate('/')}>Home</button>
        </header>
      {/* END Home Header */}

      <h1 className="admin-title">Admin Dashboard</h1>
      <div className="admin-center1">
      <div className="admin-buttons-container">
        <button className="admin-button" onClick={() => navigate('/NurseLogin')}>Appointment Scheduling</button>
        <button className="admin-button" onClick={() => navigate('/DoctorLogin')}>Manage Doctors</button>
        <button className="admin-button" onClick={() => navigate('/treatmentlogin')}>Treatment Specialist</button> {/* Link to AddTreatment */}
        <button className="admin-button" onClick={() => navigate('/PaymentLogin')}>Payment Handling</button>
        <button className="admin-button">Staff Management</button>
        <button className="admin-button">Pharmacy Management</button>
        <button className="admin-button">Equipment Handling</button>
        <button className="admin-button" onClick={() => navigate('/FoodLogin')}>Healthy Food Coordinator</button>
      </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <img alt="Logo" className="logo-footer" src={Logo} />
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Treatments</a></li>
              <li><a href="#">Foods</a></li>
              <li><a href="#">Pharmacy</a></li>
            </ul>
          </div>
          <div className="about">
            <h4>About</h4>
            <ul>
              <li><a href="#">Find a Doctor</a></li>
              <li><a href="#">Request an Appointment</a></li>
              <li><a href="#">Find a Location</a></li>
              <li><a href="#">Get an Opinion</a></li>
            </ul>
          </div>
          <div className="support">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="logo-footer-Text">WELLNESS</div>
        <div className="social-media">
          <a href="#"><FaInstagram size={24} /></a>
          <a href="#"><FaLinkedin size={24} /></a>
          <a href="#"><FaYoutube size={24} /></a>
          <a href="#"><FaFacebook size={24} /></a>
        </div>
      </footer>

      <div className='copy-right'>
        <p>© 2024. Designed by Sahan. All right reserved.</p>
      </div>
            {/* END Footer Section */}

    </div>
  );
};

export default AdminHome;
