import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import './PaymentLogin.css'; // Reusing the same styles for consistency
import Logo from "../Assets/HeroLogo.png"; // Import your logo

const PaymentLogin = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
      username: "",
      password: "",
    });
  
    const [error, setError] = useState("");
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Simple validation logic (can be replaced with backend authentication)
      if (loginData.username === "admin" && loginData.password === "password") {
        navigate('/admin-home'); // Navigate to admin home if login is successful
      } else if (loginData.username === "paymentadmin" && loginData.password === "12345") {
        navigate('/AllPayment'); // Navigate to AddTreatment if treatmentadmin logs in
      } else {
        setError("Invalid username or password");
      }
    };
  
    return (
      <div className="home-back">
        {/* Home Header */}
        <header className="headerT">
          <img alt="" className="logo-nav" src={Logo} /> 
          <div className="logo">W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L</div>
          <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
        </header>
              {/* END Home Header */}
  
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h1>Admin Login</h1>
  
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              required
            />
  
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
  
            {error && <p className="error">{error}</p>}
  
            <button type="submit" id="submit-button">Login</button>
          </form>
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
  }
export default PaymentLogin
