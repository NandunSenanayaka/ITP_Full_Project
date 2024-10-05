import React, { useState } from "react";
import axios from "axios";
import Logo from "../../Assets/HeroLogo.png";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddPayment() {

  const [formData, setFormData] = useState({
    UserName: "",
    methodType: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    date: "",
    cvc: "",
    description: "", // Added description field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate inputs based on name
    if (name === "UserName" || name === "firstName" || name === "lastName") {
      // Allow only letters and spaces
      if (/^[a-zA-Z\s]*$/.test(value) || value === "") {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "cardNumber") {
      // Allow only 16 digits
      if (/^\d{0,16}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "date") {
      // Allow mm/yy format, restrict to max length of 5
      if (/^(0[1-9]|1[0-2])\/(2[3-9]|[0-9]{2})?$/.test(value) || value.length < 5) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === "cvc") {
      // Allow only 3 digits
      if (/^\d{0,3}$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // For other fields, allow any value
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateDate = (date) => {
    const [month, year] = date.split("/").map(Number);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (
      year < currentYear % 100 || // Ensure the year is not in the past
      (year === currentYear % 100 && month < currentMonth) || // Ensure the month is not in the past if the year is the same
      year > 32 // Ensure the year does not exceed 2032 (32 in mm/yy format)
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateDate(formData.date)) {
      alert("Invalid expiry date. Ensure it's in the format mm/yy and is in the future.");
      return;
    }

    // Send formData to the server
    axios
      .post("http://localhost:5000/payment/add", formData)
      .then(() => {
        alert("Payment Added");
        // Clear the form
        setFormData({
          UserName: "",
          methodType: "",
          firstName: "",
          lastName: "",
          cardNumber: "",
          date: "",
          cvc: "",
          description: "", // Clear description field
        });
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });

    console.log("Form data submitted:", formData);
  };

  const navigate = useNavigate();

  return (
    <div className="container">
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
        <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
      </header>
      {/* END Home Header */}

      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#333",
          textAlign: "center",
          marginBottom: "1.5rem",
          lineHeight: "1.6",
        }}
      >
        Let's Make Payment<br />
        To start your subscription, input your card details to make payment.<br />
        You will be redirected to your bank's authorization page.
      </h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
        <div className="mb-3">
          <label htmlFor="UserName" className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="UserName"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
            required
            title="User Name cannot contain numbers or special characters"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="methodType" className="form-label">Method Type</label>
          <select
            id="methodType"
            name="methodType"
            className="form-select"
            value={formData.methodType}
            onChange={handleChange}
            required
          >
            <option value="">Select Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            title="First Name cannot contain numbers or special characters"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            title="Last Name cannot contain numbers or special characters"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            title="Card Number must contain exactly 16 digits"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Expiry Date (mm/yy)</label>
          <input
            type="text"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            placeholder="MM/YY"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cvc" className="form-label">CVC</label>
          <input
            type="text"
            className="form-control"
            id="cvc"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            required
            title="CVC must contain exactly 3 digits"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description (optional)</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
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
        <p>© 2024. Designed by Susara. All right reserved.</p>
      </div>
      {/* END Footer Section */}
    </div>
  );
}

export default AddPayment;
