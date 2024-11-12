import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import './Contact.css'; // Ensure you have the correct CSS file
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Chatbox from '../Chatbox/Chatbox';
import { useNavigate } from 'react-router-dom';

import IMG1 from "../Assets/Doctor 1.png";
import IMG2 from "../Assets/Doctor 2.png";
import Logo from "../Assets/HeroLogo.png";
import HomeWelcome from "../Assets/HomeWelcome.png";
import CardiacImage from "../../Components/Assets/CardiacDiseases.jpg";


const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container1">
      {/* Header Section */}
      <header className="header">
        <img alt="Logo" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          H O S P I T A L
        </div>
      </header>

      {/* Navigation Section */}
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/treatmentpage">Treatments</Link></li>
          <li><a href="/food">Foods</a></li>
          <li><a href="/DoctorPage">Find a Doctor</a></li>
          <li><a href="/PharmacyPage">Pharmacy</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>

      {/* Contact Section */}
      <section className="home-section">
        <div className="home-content">
          <h1>Contact Us</h1>
          <p>
            <b>Address : </b><br />
            Wellness Ayurveda Hospital, Gampaha, Sri Lanka<br /><br />
            <b>Mobile  : </b><br />
            091 2222963 / 077 6485998<br /><br />
            <b>Email  : </b><br />
            wellnessayrveda@gmail.com
          </p>

            <button className="whatsapp-btn" onClick={() => window.open('https://wa.me/94771234567?text=Hello%20Wellness%20Ayurveda%20Hospital!', '_blank')}>
                Send Whatsapp Message
            </button>
        </div>

        {/* Google Map Embed */}
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              src="https://maps.google.com/maps?q=Gampaha%20beheth%20shalawa%20%E0%B6%9C%E0%B6%B8%E0%B7%8A%E0%B6%B4%E0%B7%84%20%E0%B6%B6%E0%B7%99%E0%B7%84%E0%B7%99%E0%B6%AD%E0%B7%8A%20%E0%B7%81%E0%B7%8F%E0%B6%BD%E0%B7%8F%E0%B7%80,%20Imbulgoda%20-%20Weliweriya%20Rd&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              scrolling="no"
              style={{ width: '590px', height: '400px' }}
              title="Gampaha Beheth Shalawa"
            ></iframe>
            <style>
              {`.mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:400px;width:590px;background:#fff;}`}
            </style>
          </div>
        </div>
        {/* End Google Map Embed */}
      </section>

      {/* welcome Section */}
      <div className="popup-wrapper1">
        <div className="image-container">
          <img src={CardiacImage} alt="Ayurvedic Treatment" className="welcome-image" />
        </div>
        <div className="popup-content">
          <div className="text-container">
            <h1>ABOUT US</h1>
            <p>
              Wellness Ayurveda Hospital in Gampaha, Sri Lanka, offers both indoor and outdoor 
              treatments with a focus on Ayurvedic healing. Facing challenges in managing patient appointments,
              equipment, and daily operations, the clinic strives to meet the growing demand for its services.
            </p>
            <p>
              To enhance efficiency, we are developing a web-based system to streamline appointment scheduling,
              manage equipment, track staff, and generate detailed reports. This solution will help the clinic
              better serve regular patients, introduce new treatments, and improve overall operations.
            </p>
            <p>
              Discover the ancient healing arts of Ayurveda and rejuvenate your mind, body, and soul at 
              Wellness Ayurveda Hospital.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <img alt="Logo" className="logo-footer" src={Logo} />
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/treatmentpage">Treatments</Link></li>
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
      <Chatbox />
    </div>
  );
};

export default Contact;
