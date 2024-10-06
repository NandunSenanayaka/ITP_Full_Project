import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/HeroLogo.png";
import Doc1 from "../../Components/Assets/Doc1.jpg";
import Doc2 from "../../Components/Assets/Doc2.jpg";
import Doc3 from "../../Components/Assets/Doc3.jpg";
import Doc4 from "../../Components/Assets/Doc4.jpg";
import Doc5 from "../../Components/Assets/Doc 5.jpg";
import Doc6 from "../../Components/Assets/Doc6.jpg";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Chatbox from '../Chatbox/Chatbox';
import './FindDoctor.css';
import { useNavigate } from 'react-router-dom';


const treatments = [
  {
    id: 1,
    image: Doc1, // Use the imported image
    title: 'Dr. Ayesha Kumar',
    description: 'Dr. Ayesha Kumar has over 15 years of experience in providing traditional skin care treatments and herbal therapies, specializing in treating chronic skin conditions using ancient Ayurvedic principles.',
    benifit: 'Dermatologist',
    minDuration: '7 Days',
  },
  {
    id: 2,
    image: Doc2,
    title: 'Dr. Rajesh Deshmukh',
    description: 'Dr. Rajesh Deshmukh offers personalized treatment plans for digestive and metabolic disorders. With 20 years of practice, he is an expert in herbal remedies for gastrointestinal health and overall well-being.',
    benifit: 'Internal Medicine Specialist',
    minDuration: '7 Days',
  },
  {
    id: 3,
    image: Doc3,
    title: 'Dr. Shalini Nair',
    description: 'Dr. Shalini Nair has extensive expertise in women’s health and wellness, focusing on hormonal balance and natural fertility treatments through Ayurvedic herbs and lifestyle modifications.',
    benifit: 'Gynecologist',
    minDuration: '5 Days',
  },

  {
    id: 4,
    image: Doc4,
    title: 'Dr. Shehani Sen',
    description: 'Dr. Shehani Sen is known for his gentle approach to pediatric care, combining Ayurvedic treatments to enhance children s immunity, growth, and mental health through natural remedies and holistic practices.',
    benifit: ' Pediatrician',
    minDuration: '7 Days',
  },
  {
    id: 5,
    image: Doc5,
    title: 'Dr. Arjun Sen',
    description: 'Dr. Arjun Sen specializes in Ayurvedic diet planning and lifestyle counseling. She focuses on promoting optimal health and managing chronic conditions by aligning diet with Ayurvedic body types and seasonal changes..',
    benifit: 'Nutritionist',
    minDuration: '7 Days',
  },
  {
    id: 6,
    image: Doc6,
    title: 'Dr. Dev Sharma',
    description: 'Dr. Dev Sharma treats musculoskeletal disorders using traditional Ayurvedic therapies like Panchakarma, with a focus on non-invasive techniques to improve joint health and mobility.',
    benifit: 'Orthopedic Specialist',
    minDuration: '3 Days',
  },
  // Add more treatments here as needed
];

const TreatmentPage = () => {
  const navigate = useNavigate();

  const handlePayment = (doctorName) => {
    // Navigate to PaymentPage with the doctor's name as state
    navigate('/addPayment', { state: { doctorName } });
  };

  return (
    
    <div className="homeTr-container">
      {/* Header Section here*/}
      <header className="header">
        <img alt="Logo" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          H O S P I T A L
        </div>
        <button className="login-btnAd" onClick={() => navigate('/Header')}>Log Out</button>
        </header>

      {/* Navigation Section */}
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/treatmentpage">Treatments</Link></li>
          <li><a href="#">Foods</a></li>
          <li><a href="#">Find a Doctor</a></li>
          <li><a href="#">Pharmacy</a></li>
          <li><a href="/Contact">Contact</a></li>
          </ul>
      </nav>

      <section className="TreatmentHome-section">
  <h2 className="section-title">Find Doctor</h2>
  <div className="TreatmentHome-content">
    {treatments.map(treatment => (
      <div key={treatment.id} className="treatment-card">
        <img src={treatment.image} alt={treatment.title} className="treatment-image" />
        <div className="treatment-info">
          <h3 className="treatment-title">{treatment.title}</h3>
          <p className="treatment-description">{treatment.description}</p>
          <ul className="treatment-details">
            <li>Specialty: {treatment.benifit}</li> {/* New benefit field */}
            <li>Minimum duration: {treatment.minDuration}</li>
            {/* Optionally include other fields if available */}
            {/* Payment Button */}
             <button className="payment-button" onClick={() => handlePayment(treatment.title)}>
                  Pay Now
                </button>
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>


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

      <div className="copy-right">
        <p>© 2024. Designed by Sahan. All rights reserved.</p>
      </div>
      <Chatbox />
    </div>
    
  );
};

export default TreatmentPage;
