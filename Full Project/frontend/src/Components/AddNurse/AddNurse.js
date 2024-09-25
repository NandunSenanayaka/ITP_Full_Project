import React, { useState } from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Nav from "../Nav/Nav";
import './AddNurse.css';
import Logo1 from "../Assets/HeroLogo.png";

import { useNavigate } from "react-router-dom";

function AddNurse() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    nic: "",
    email: "",
    phone: "",
    appnumber: "",
    rnumber: "",
    time: "",
    diseases: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation conditions
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Allow only text for name
    }
    if (name === "nic" && (!/^\d{0,12}$/.test(value) || value.length > 12)) {
      return; // NIC should be a 12-digit number
    }
    if (name === "phone" && (!/^\d{0,10}$/.test(value) || value.length > 10)) {
      return; // Phone number should be 10 digits
    }
    if (name === "appnumber" && (!/^\d*$/.test(value))) {
      return; // Appointment number should only allow digits
    }
    if (name === "rnumber" && (!/^[1-9]$|^10$/.test(value))) {
      return; // Room number should be between 1 to 10
    }
    if (name === "time" && !/^\d{2}:\d{2}$/.test(value)) {
      return; // Time should be in HH:MM format
    }
    if (name === "diseases" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Diseases should contain only text
    }
    // if (name === "description" && !/^[a-zA-Z0-9\s]*$/.test(value)) {
    //   return; // Description should allow text and numbers
    // }

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation added here
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputs.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    sendRequest()
      .then(() => {
        alert("Data saved successfully!");
        navigate("/appoinmentdetails");
      })
      .catch((error) => {
        alert("Failed to save data. Please try again.");
        console.error("Navigation skipped due to error:", error);
      });
  };

  const sendRequest = async () => {
    const data = {
      name: inputs.name,
      nic: inputs.nic,
      email: inputs.email,
      phone: Number(inputs.phone),
      appnumber: Number(inputs.appnumber),
      rnumber: Number(inputs.rnumber),
      time: inputs.time,
      diseases: inputs.diseases,
      description: inputs.description,
    };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/nurses", data);
      console.log("Response data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending request:", error);
      throw error;
    }
  };

  return (
    <div>
      {/* Home Header */}
      <header className="header">
        <img alt="" className="logo-nav" src={Logo1} />
        <div className="logo">
          W E L L N E S S 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          A Y R V E D A
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          H O S P I T A L
        </div>
        <button className="login-btnAd" onClick={() => navigate('/adminhome')}>Log Out</button>
        </header>

      <Nav />
      <div className="form-container">
        <h1>Add Appointment Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
            />
          </div>

          <div className="form-group">
            <label>NIC</label>
            <input
              type="text"
              name="nic"
              onChange={handleChange}
              value={inputs.nic}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={inputs.phone}
              required
            />
          </div>

          <div className="form-group">
            <label>Appointment Number</label>
            <input
              type="number"
              name="appnumber"
              onChange={handleChange}
              value={inputs.appnumber}
              required
            />
          </div>

          <div className="form-group">
            <label>Room Number</label>
            <input
              type="number"
              name="rnumber"
              onChange={handleChange}
              value={inputs.rnumber}
              required
            />
          </div>

          <div className="form-group">
            <label>Time</label>
            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={inputs.time}
              required
            />
          </div>

          <div className="form-group">
            <label>Diseases</label>
            <input
              type="text"
              name="diseases"
              onChange={handleChange}
              value={inputs.diseases}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={inputs.description}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <img alt="Logo" className="logo-footer" src={Logo1} />
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
    </div>
  );
}

export default AddNurse;
