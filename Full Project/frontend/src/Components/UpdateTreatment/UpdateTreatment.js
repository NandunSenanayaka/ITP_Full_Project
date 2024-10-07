import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import './UpdateTreatment.css'; // Import the CSS file
import Logo from ".././Assets/HeroLogo.png"
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

function UpdateTreatment() {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        benefit: '',
        duration: '',
    });
    const [errors, setErrors] = useState({
        name: "",
        description: "",
        benefit: "",
        duration: "",
    });
    const { _id } = useParams();
    const navigate = useNavigate();

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces
    const descriptionBenefitRegex = /^[A-Za-z\s,\.]+$/; // Letters, commas, and periods
    const durationRegex = /^(?:[1-9]|[1-9]\d|[12]\d{2}|3[0-5]\d|36[0-5])$/; // Numbers between 1 and 365

    useEffect(() => {
        if (!_id) {
            console.error("No ID provided in URL parameters.");
            return;
        }
    
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/treatments/get/${_id}`);
                const fetchedData = response.data.treatment;
                console.log('Fetched data:', fetchedData);
    
                setInputs({
                    name: fetchedData.name || '',
                    description: fetchedData.description || '',
                    benefit: fetchedData.benefit || '',
                    duration: fetchedData.duration || '',
                });
            } catch (error) {
                console.error("Error fetching treatment data:", error.response?.data || error.message);
            }
        };
    
        fetchHandler();
    }, [_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    
        // Validation logic for each field
        switch (name) {
            case "name":
                setErrors((prevState) => ({
                    ...prevState,
                    name: nameRegex.test(value) ? "" : "Name can only contain letters and spaces.",
                }));
                break;
            case "description":
                setErrors((prevState) => ({
                    ...prevState,
                    description: descriptionBenefitRegex.test(value) ? "" : "Description can only contain letters, commas, and periods.",
                }));
                break;
            case "benefit":
                setErrors((prevState) => ({
                    ...prevState,
                    benefit: descriptionBenefitRegex.test(value) ? "" : "Benefit can only contain letters, commas, and periods.",
                }));
                break;
            case "duration":
                setErrors((prevState) => ({
                    ...prevState,
                    duration: durationRegex.test(value) ? "" : "Duration must be a number between 1 and 365.",
                }));
                break;
            default:
                break;
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if there are any errors before sending the request
        if (!errors.name && !errors.description && !errors.benefit && !errors.duration) {
            try {
                await axios.put(`http://localhost:5000/treatments/update/${_id}`, {
                    name: inputs.name,
                    description: inputs.description,
                    benefit: inputs.benefit,
                    duration: inputs.duration,
                });
                alert("Treatment Updated");
                navigate("/viewtreatment");
            } catch (error) {
                console.error("Error updating treatment:", error.response?.data || error.message);
            }
        } else {
            alert("Please fix the errors before submitting.");
        }
    };

    return (
        <div>
            {/* Home Header */}
            <header className="header">
                <img alt="" className="logo-nav" src={Logo} /> 
                <div className="logo">W E L L N E S S 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                A Y R V E D A
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                H O S P I T A L</div>
                {/* <button className="login-btnAd">Log Out</button> */}

                <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>


            </header>
       {/* Home Header End */}
            <h1>Update Treatment</h1>
            <form onSubmit={handleSubmit}>
                <label>Treatment Name</label>
                <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error">{errors.name}</p>}
                
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={inputs.description}
                    onChange={handleChange}
                    required
                />
                {errors.description && <p className="error">{errors.description}</p>}
                
                <label>Benefit</label>
                <input
                    type="text"
                    name="benefit"
                    value={inputs.benefit}
                    onChange={handleChange}
                    required
                />
                {errors.benefit && <p className="error">{errors.benefit}</p>}
                
                <label>Duration (in days)</label>
                <input
                    type="number"
                    name="duration"
                    value={inputs.duration}
                    onChange={handleChange}
                    required
                />
                {errors.duration && <p className="error">{errors.duration}</p>}
                
                <button id="submit-button" type="submit" disabled={Object.values(errors).some(error => error)}>Update</button>
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


        </div>
    );
}

export default UpdateTreatment;
