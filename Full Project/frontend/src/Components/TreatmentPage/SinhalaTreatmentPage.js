import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../Assets/HeroLogo.png";
import CardiacImage from "../../Components/Assets/CardiacDiseases.jpg";
import ArthritisImage from "../../Components/Assets/ArthritisOrthopaedic.jpg";
import LiverDisordersImage from "../../Components/Assets/LiverDisorders.jpg";
import NeurologicalDisordersImage from "../../Components/Assets/NeurologicalDisorders.jpg";
import DermatologicalImage from "../../Components/Assets/Dermatological.jpg";
import NirogaImage from "../../Components/Assets/Niroga.jpg";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Chatbox from '../Chatbox/Chatbox';
import './TreatmentPage.css';
import { useNavigate } from 'react-router-dom';


const treatments = [
    {
      id: 1,
      image: CardiacImage, // Use the imported image
      title: 'හෘද රෝග',
      description: 'විශේෂිත හෘද ගැටළු විසඳීම සඳහා, වෛද්‍යවරයා විසින් සම්පූර්ණ ශරීර සම්බාහනය සහ ශාකසාර පේස්ට් යෙදීම වැනි ආයුර්වේද ප්‍රතිකාරවල එකතුවක් නිර්දේශ කරනු ඇත.',
      benifit: 'සංසරණය වැඩි දියුණු කරන්න',
      minDuration: '7 දින',
    },
    {
      id: 2,
      image: ArthritisImage,
      title: 'ආතරයිටිස් සහ විකලාංග රෝග',
      description: 'ආතරයිටිස් සහ අනෙකුත් විකලාංග රෝග සඳහා ප්‍රතිකාර කිරීම සඳහා, සම්පූර්ණ ශරීර සම්බාහනය සහ වාෂ්ප ස්නානය වැනි ප්‍රතිකාර සඳහා අමුත්තන් නිර්දේශ කරනු ලැබේ.',
      benifit: 'සන්ධි වේදනාව සමනය කරන්න',
      minDuration: '7 දින',
    },
    {
      id: 3,
      image: LiverDisordersImage,
      title: 'අක්මා රෝග',
      description: 'විශේෂිත හෘද ගැටළු විසඳීම සඳහා, වෛද්‍යවරයා විසින් සම්පූර්ණ ශරීර සම්බාහනය සහ ශාකසාර පේස්ට් යෙදීම වැනි ආයුර්වේද ප්‍රතිකාරවල එකතුවක් නිර්දේශ කරනු ඇත.',
      benifit: 'අක්මාව ඩෙටොක්සිකරණයට සහාය වීම',
      minDuration: '5 දින',
    },
  
    {
      id: 4,
      image: NeurologicalDisordersImage,
      title: 'ස්නායු රෝග',
      description: 'පාකින්සන් රෝගයේ සිට අංශභාගය සහ මොළයට සහ ස්නායු පද්ධතියට බලපාන අනෙකුත් ස්නායු රෝග දක්වා, මෙම ගැටළු වලට ප්‍රතිකාර කිරීම සඳහා අපි පරිපූර්ණ ප්‍රතිකාර සැලැස්මක් අනුගමනය කරමු.',
      benifit: 'ස්නායු ක්රියාකාරිත්වය වැඩි දියුණු කිරීම',
      minDuration: '7 දින',
    },
    {
      id: 5,
      image: DermatologicalImage,
      title: 'චර්ම රෝග',
      description: 'ආයුර්වේදයේ චර්ම රෝග සඳහා ප්‍රතිකාර කිරීමේ හොඳම ක්‍රමය සෞඛ්‍ය සම්පන්න සමබර ආහාර වේලක් සහ ඖෂධීය බටර් කිරි වත් කිරීම වැනි ප්‍රතිකාර වේ.',
      benifit: 'සමේ සෞඛ්‍යය වැඩි දියුණු කරන්න',
      minDuration: '7 දින',
    },
    {
      id: 6,
      image: NirogaImage,
      title: 'නිරෝගා',
      description: 'දිගුකාලීන ආතතිය අත්විඳින සහ ඔවුන්ගේ මනස ප්‍රබෝධමත් කිරීමට සහ ප්‍රබෝධමත් කිරීමට බලාපොරොත්තු වන අමුත්තන් සඳහා මෙය පරිපූර්ණයි. ආයුර්වේද ප්‍රතිකාර සමඟින්, ඔබට දිනපතා යෝග සහ භාවනා සැසි ද ඇත.',
      benifit: 'මනස ප්‍රබෝධමත් කර ප්‍රබෝධමත් කරන්න',
      minDuration: '3 දින',
    },
    // Add more treatments here as needed
  ];

const SinhalaTreatmentPage = () => {
    const navigate = useNavigate();

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
      {/* <button className="login-btnAd" onClick={() => navigate('/Header')}>Log Out</button> */}
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

    <section className="TreatmentHome-section1">
<h2 className="section-title">ප්‍රතිකාර</h2>
<div className="TreatmentHome-content">
  {treatments.map(treatment => (
    <div key={treatment.id} className="treatment-card">
      <img src={treatment.image} alt={treatment.title} className="treatment-image" />
      <div className="treatment-info">
        <h3 className="treatment-title">{treatment.title}</h3>
        <p className="treatment-description">{treatment.description}</p>
        <ul className="treatment-details">
          <li>ප්‍රතිලාභය : {treatment.benifit}</li> {/* New benefit field */}
          <li>අවම කාල සීමාව : {treatment.minDuration}</li>
          {/* Optionally include other fields if available */}
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

    <a className='languagetitle'>Language : </a>
    <a href="/treatmentpage" className="language">English</a>

    <div className="copy-right">
      <p>© 2024. Designed by Sahan. All rights reserved.</p>
    </div>
    <Chatbox />
  </div>
  
);
};
export default SinhalaTreatmentPage;
