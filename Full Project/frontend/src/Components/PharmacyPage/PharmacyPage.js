import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/HeroLogo.png";
import ph1 from "../../Components/Assets/ph1.jpg";
import ph2 from "../../Components/Assets/ph2.jpg";
import ph3 from "../../Components/Assets/ph3.jpg";
import ph4 from "../../Components/Assets/ph4.jpg";
import ph5 from "../../Components/Assets/ph5.jpg";
import ph6 from "../../Components/Assets/ph6.jpg";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import Chatbox from "../Chatbox/Chatbox";
import "./pharmacy.css";
import { useNavigate } from "react-router-dom";

// Reusing the treatment data for the pharmacy products
const pharmacyProducts = [
  {
    id: 1,
    image: ph1,
    title: "Prakruti",
    description:
      "Prakruti is an Ayurvedic medicine formulated to help manage diabetes naturally. It combines potent herbs like Bitter Gourd (Karela), Gymnema Sylvestre, Jamun Seed, Fenugreek (Methi), Amla, and Chirayta, which are known for their efficacy in regulating blood sugar levels.",
  },
  {
    id: 2,
    image: ph2,
    title: "Neela Warala Oil",
    description:
      "Neela Warala Oil is an Ayurvedic hair oil formulated to promote hair growth and improve overall hair health. This oil is enriched with a blend of potent Ayurvedic herbs, including Neeli, Bhringraj (Eclipta Alba), Amla (Indian Gooseberry), and Hibiscus, all suspended in a nourishing base of coconut oil.",
  },
  {
    id: 3,
    image: ph3,
    title: "Himalaya Wellness Energy",
    description:
      "Himalaya Wellness Energy is an Ayurvedic herbal supplement designed to restore and sustain energy levels naturally. This product is formulated with a blend of time-honored herbs, including Amla, Haritaki, and Licorice, which work together to support metabolism, adrenal health, and stress relief.",
  },
  {
    id: 4,
    image: ph4,
    title: "Blood Pressure Balance",
    description:
      "Blood Pressure Balance is an Ayurvedic formulation designed to support healthy blood pressure levels and overall cardiovascular health. This supplement combines a blend of traditional Ayurvedic herbs.",
  },
  {
    id: 5,
    image: ph5,
    title: "Gastritis Ayurvedic Capsules",
    description:
      "Gastritis Ayurvedic Capsules are specially formulated to provide relief from gastritis and promote digestive health. These capsules contain a blend of potent Ayurvedic herbs such as Amla (Indian Gooseberry).",
  },
  {
    id: 6,
    image: ph6,
    title: "ShrimBala",
    description:
      "ShrimBala is an Ayurvedic herbal supplement designed to support heart health and help manage blocked arteries. This powerful formulation includes a concentrated liquid extract of herbs such as ginger, garlic, and lemon, combined with apple cider vinegar and honey.",
  },
];

const PharmacyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="homeTr-container">
      {/* Header Section */}
      <header className="header">
        <img alt="Logo" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U
          R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T
          A L
        </div>
        <button className="login-btnAd" onClick={() => navigate("/Header")}>
          Log Out
        </button>
      </header>

      {/* Navigation Section */}
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/treatmentpage">Treatments</Link>
          </li>
          <li>
            <a href="/food">Foods</a>
          </li>
          <li>
            <a href="/DoctorPage">Find a Doctor</a>
          </li>
          <li>
            <a href="#">Pharmacy</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Pharmacy Section */}
      <section className="TreatmentHome-section">
        <h2 className="section-title">PHARMACY</h2>
        <div className="TreatmentHome-content">
          {pharmacyProducts.map((product) => (
            <div key={product.id} className="treatment-card">
              <img
                src={product.image}
                alt={product.title}
                className="treatment-image"
              />
              <div className="treatment-info">
                <h3 className="treatment-title">{product.title}</h3>
                <p className="treatment-description">{product.description}</p>
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/treatmentpage">Treatments</Link>
              </li>
              <li>
                <a href="#">Foods</a>
              </li>
              <li>
                <a href="#">Pharmacy</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h4>About</h4>
            <ul>
              <li>
                <a href="#">Find a Doctor</a>
              </li>
              <li>
                <a href="#">Request an Appointment</a>
              </li>
              <li>
                <a href="#">Find a Location</a>
              </li>
              <li>
                <a href="#">Get an Opinion</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo-footer-Text">WELLNESS</div>
        <div className="social-media">
          <a href="#">
            <FaInstagram size={24} />
          </a>
          <a href="#">
            <FaLinkedin size={24} />
          </a>
          <a href="#">
            <FaYoutube size={24} />
          </a>
          <a href="#">
            <FaFacebook size={24} />
          </a>
        </div>
      </footer>

      <div className="copy-right">
        <p>© 2024. Designed by Sahan. All rights reserved.</p>
      </div>
      <Chatbox />
    </div>
  );
};

export default PharmacyPage;
