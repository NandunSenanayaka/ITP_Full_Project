import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Logo from "../Assets/HeroLogo.png"; // Import your logo

function UpdateDoctor() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: null,
    name: "",
    gmail: "",
    phone: "",
    Gender: "",
    age: "",
    Specialiation: "",
    Qualification: "",
    Experience: "",
    About: "",
  }); // Set initial state to null
  const { id } = useParams();

  // Track validation states
  const [isEmailValid, setIsEmailValid] = useState(false); 
  const [ageError, setAgeError] = useState(""); 
  const [phoneError, setPhoneError] = useState(""); 

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/doctors/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.doctor1 || {}));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/doctors/${id}`, {
        name: inputs.name,
        gmail: inputs.gmail,
        phone: Number(inputs.phone),
        Gender: String(inputs.Gender),
        age: Number(inputs.age),
        Specialiation: String(inputs.Specialiation),
        Qualification: String(inputs.Qualification),
        Experience: String(inputs.Experience),
        About: String(inputs.About),
      })
      .then((res) => res.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Real-time email validation
    if (name === "gmail") {
      const emailPattern = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      setIsEmailValid(emailPattern.test(value)); // Check if the email is valid
    }

    // Filter out special characters for the name input
    if (name === "name") {
      const namePattern = /^[A-Za-z\s]*$/; // Allows only letters and spaces
      if (!namePattern.test(value)) {
        return; // Prevent updating state if invalid characters are entered
      }
    }

    // Age validation
    if (name === "age") {
      const ageValue = Number(value);
      if (ageValue < 20 || ageValue > 70) {
        setAgeError("Age must be between 20 and 70."); // Set error message
      } else {
        setAgeError(""); // Clear error message if age is valid
      }
    }

    // Phone validation
    if (name === "phone") {
      const phonePattern = /^\d{10}$/; // Allows only 10-digit numbers
      if (!phonePattern.test(value)) {
        setPhoneError("Phone number must be exactly 10 digits."); // Set error message
      } else {
        setPhoneError(""); // Clear error message if valid
      }
    }

    // Update input values
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailValid && !ageError && !phoneError) {
      sendRequest().then(() => navigate("/doctorDetails"));
    }
  };

  return (
    <div>
      {/* Home Header */}
      <header className="header">
        <img alt="" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L
        </div>
        <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
      </header>
      {/* END Home Header */}

      <h1>Update Doctor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Gmail</label>
          <input
            type="email"
            name="gmail"
            onChange={handleChange}
            value={inputs.gmail || ""}
            required
          />
          {!isEmailValid && inputs.gmail && <p style={{color: 'red'}}>Invalid email format.</p>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={inputs.phone || ""}
            required
          />
          {phoneError && <p style={{color: 'red'}}>{phoneError}</p>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            name="Gender"
            onChange={handleChange}
            value={inputs.Gender || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={inputs.age || ""}
            required
          />
          {ageError && <p style={{color: 'red'}}>{ageError}</p>}
        </div>

        <div className="form-group">
          <label>Specialization</label>
          <input
            type="text"
            name="Specialiation"
            onChange={handleChange}
            value={inputs.Specialiation || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Qualification</label>
          <input
            type="text"
            name="Qualification"
            onChange={handleChange}
            value={inputs.Qualification || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>Experience</label>
          <input
            type="text"
            name="Experience"
            onChange={handleChange}
            value={inputs.Experience || ""}
            required
          />
        </div>

        <div className="form-group">
          <label>About</label>
          <input
            type="text"
            name="About"
            onChange={handleChange}
            value={inputs.About || ""}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

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

export default UpdateDoctor;
