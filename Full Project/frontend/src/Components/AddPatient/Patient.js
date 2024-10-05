import React, { useState } from 'react';
import Nav from '../PNav/Nav';
import axios from 'axios';
import './Patient.css';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Logo from "../Assets/HeroLogo.png"; // Import your logo

const URL = "http://localhost:5000/Patient/add";

function Patient() {
  const [formData, setFormData] = useState({
    nic: '',
    name: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    height: '',
    weight: '',
    number: '',
    patientCondition: '',
    doctorsNotes: ''
  });

  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form inputs
  const validate = () => {
    let inputErrors = {};

    // NIC validation
    if (!formData.nic) {
      inputErrors.nic = "NIC is required";
    } else if (!validateNIC(formData.nic)) {
      inputErrors.nic = "Invalid NIC format";
    }

    // Name validation
    if (!formData.name) {
      inputErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      inputErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      inputErrors.email = "Valid email is required";
    }

    // Date of Birth validation
    if (!formData.dob) {
      inputErrors.dob = "Date of birth is required";
    } else if (!validateDOB(formData.dob)) {
      inputErrors.dob = "Invalid DOB (must be 10-100 years old)";
    }

    // Gender validation
    if (!formData.gender) {
      inputErrors.gender = "Gender is required";
    }

    // Address validation
    if (!formData.address) {
      inputErrors.address = "Address is required";
    }

    // Height validation
    if (!formData.height || isNaN(formData.height)) {
      inputErrors.height = "Valid height is required";
    } else if (formData.height <= 50 || formData.height > 250) {
      inputErrors.height = "Height must be between 50cm and 250cm";
    }

    // Weight validation
    if (!formData.weight || isNaN(formData.weight)) {
      inputErrors.weight = "Valid weight is required";
    } else if (formData.weight <= 3 || formData.weight > 300) {
      inputErrors.weight = "Weight must be between 3kg and 300kg";
    }

    // Phone Number validation
    if (!formData.number || !/^\d{10}$/.test(formData.number)) {
      inputErrors.number = "Valid phone number is required";
    }

    return inputErrors;
  };

  // Validate NIC
  const validateNIC = (nic) => {
    const oldNicPattern = /^[0-9]{9}[vVxX]$/;
    const newNicPattern = /^[0-9]{12}$/;
    return oldNicPattern.test(nic) || newNicPattern.test(nic);
  };

  // Validate Date of Birth for age between 10 and 100
  const validateDOB = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 10 && age <= 100;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputErrors = validate();
    if (Object.keys(inputErrors).length === 0) {
      try {
        await axios.post(URL, formData);
        alert("Patient added successfully");
        setFormData({
          nic: '',
          name: '',
          email: '',
          dob: '',
          gender: '',
          address: '',
          height: '',
          weight: '',
          number: '',
          patientCondition: '',
          doctorsNotes: ''
        });
      } catch (err) {
        console.log(err);
        alert("Error adding patient");
      }
    } else {
      setErrors(inputErrors);
    }
  };

  // Restrict input for NIC and Phone Number to numeric characters only
  const restrictNumericInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  };

  // Restrict input for Name to alphabetic characters and spaces
  const restrictAlphabeticInput = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
  };

  return (
    <div>
      <header className="headerT">
        <img alt="" className="logo-nav" src={Logo} /> 
        <div className="logo">W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L</div>
      </header>

      <Nav />
      <div className="patient-form-container">
        <h1>Add Patient Details</h1>
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-group">
            <label>NIC</label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              onInput={restrictNumericInput}
              className={errors.nic ? 'input-error' : ''}
            />
            {errors.nic && <p className="error-text">{errors.nic}</p>}
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onInput={restrictAlphabeticInput}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={errors.dob ? 'input-error' : ''}
            />
            {errors.dob && <p className="error-text">{errors.dob}</p>}
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={errors.gender ? 'input-error' : ''}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="error-text">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'input-error' : ''}
            />
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className={errors.height ? 'input-error' : ''}
            />
            {errors.height && <p className="error-text">{errors.height}</p>}
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className={errors.weight ? 'input-error' : ''}
            />
            {errors.weight && <p className="error-text">{errors.weight}</p>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              onInput={restrictNumericInput}
              className={errors.number ? 'input-error' : ''}
            />
            {errors.number && <p className="error-text">{errors.number}</p>}
          </div>

          {/* Fields not needing validation */}
          <div className="form-group">
            <label>Patient Condition</label>
            <textarea
              name="patientCondition"
              value={formData.patientCondition}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Doctor's Notes</label>
            <textarea
              name="doctorsNotes"
              value={formData.doctorsNotes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">Add Patient</button>
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

export default Patient;
