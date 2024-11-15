import React from 'react';
import './food.css'; // Ensure you create this CSS file for styling
import kolaKandaImg from '../Assets/1.jpeg';
import riceCoconutSambol from '../Assets/2.jpeg';
import sweetPotatoCurry from '../Assets/3.jpeg';
import pumpkinCurry from '../Assets/4.jpeg';
import watalappan from '../Assets/5.jpeg';
import curdKithulTreacle from '../Assets/6.jpeg';
import polRoti from '../Assets/7.jpeg';
import redRiceAmbulThiyal from '../Assets/8.jpeg';
import parippu from '../Assets/9.jpeg';
import gotuKolaSambol from '../Assets/10.jpeg';
import { Link } from 'react-router-dom';
import Logo from "../Assets/HeroLogo.png";
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const foodItems = [
    {
      id: 1,
      name: 'Kola Kanda',
      description: 'Herbal rice porridge, rich in nutrients and traditionally served for breakfast.',
      benefits: 'Promotes digestion and detoxification.',
      image: kolaKandaImg, 
    },
    {
      id: 2,
      name: 'Rice & Coconut Sambol',
      description: 'Rice served with spiced coconut relish, a staple in every Sri Lankan meal.',
      benefits: 'Provides healthy fats and energy.',
      image: riceCoconutSambol,
    },
    {
      id: 3,
      name: 'Sweet Potato Curry',
      description: 'Creamy sweet potato curry cooked with coconut milk and spices.',
      benefits: 'Rich in vitamins and antioxidants.',
      image: sweetPotatoCurry,
    },
    {
      id: 4,
      name: 'Pumpkin Curry',
      description: 'Pumpkin cooked with coconut and spices for a delightful flavor.',
      benefits: 'Supports eye health and boosts immunity.',
      image: pumpkinCurry,
    },
    {
      id: 5,
      name: 'Watalappan',
      description: 'Coconut and jaggery pudding, a popular Sri Lankan dessert.',
      benefits: 'Natural energy booster.',
      image: watalappan,
    },
    {
      id: 6,
      name: 'Curd with Kithul Treacle',
      description: 'Buffalo curd served with sweet palm syrup, a delicious treat.',
      benefits: 'Enhances digestion and gut health.',
      image: curdKithulTreacle,
    },
    {
      id: 7,
      name: 'Pol Roti',
      description: 'Coconut flatbread served with chili sambol, perfect for any meal.',
      benefits: 'Provides fiber and healthy fats.',
      image: polRoti,
    },
    {
      id: 8,
      name: 'Red Rice & Ambul Thiyal',
      description: 'Tangy fish curry served with red rice, a flavorful combination.',
      benefits: 'Rich in omega-3 fatty acids and fiber.',
      image: redRiceAmbulThiyal,
    },
    {
      id: 9,
      name: 'Parippu',
      description: 'Lentil curry, a staple in Sri Lankan cuisine, nutritious and hearty.',
      benefits: 'Excellent source of protein.',
      image: parippu,
    },
    {
      id: 10,
      name: 'Gotu Kola Sambol',
      description: 'Herbal salad made with fresh gotu kola, great for wellness.',
      benefits: 'Improves cognitive function and reduces anxiety.',
      image: gotuKolaSambol,
    },
    
  ];
  

const Food = () => {
  const navigate = useNavigate();

  return (
    <div className="food-container">

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


      <h2>Sri Lankan Village Cuisine</h2>
      <p>
        Sri Lankan village cuisine is a celebration of natural ingredients and traditional cooking methods passed down through generations. Rooted in the principles of Ayurveda, these dishes focus on balancing nutrition, flavor, and wellness. The food is simple yet flavorful, using fresh herbs, spices, and locally sourced produce to create meals that are both nourishing and delicious.
      </p>
      <p>
        This menu offers a glimpse into the wholesome and vibrant world of Sri Lankan healthy food, where every dish is crafted with care and a deep respect for nature.
      </p>

      <div className="food-list">
        {foodItems.map(item => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Benefits:</strong> {item.benefits}</p>
          </div>
        ))}
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

      <div className="copy-right">
        <p>© 2024. Designed by Sahan. All rights reserved.</p>
      </div>


    </div>
  );
};

export default Food;
