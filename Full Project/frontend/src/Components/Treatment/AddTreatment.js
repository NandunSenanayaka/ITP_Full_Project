// import React, { useState } from "react";
// import axios from "axios";
// import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import './AddTreatment.css';
// import IMG1 from "../Assets/Test.png";
// import Logo from "../Assets/HeroLogo.png"


// function AddTreatment() {
//     const navigate = useNavigate();
//     const [inputs, setInputs] = useState({
//         name: "",
//         description: "",
//         benefit: "",
//         duration: "",
//     });

//     const [errors, setErrors] = useState({
//         name: "",
//         description: "",
//         benefit: "",
//         duration: "",
//     });

//     // Regular expressions for validation
//     const nameRegex = /^[A-Za-z\s]+$/; // Only letters
//     const descriptionBenefitRegex = /^[A-Za-z\s,\.]+$/; // Only letters, commas, and periods
//     const durationRegex = /^(?:[1-9]|[1-9]\d|[12]\d{2}|3[0-5]\d|36[0-5])$/; // Numbers between 1 and 365

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInputs((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
    
//         // Validation logic for each field
//         switch (name) {
//             case "name":
//                 setErrors((prevState) => ({
//                     ...prevState,
//                     name: nameRegex.test(value) ? "" : "Name can only contain letters.",
//                 }));
//                 break;
//             case "description":
//                 setErrors((prevState) => ({
//                     ...prevState,
//                     description: descriptionBenefitRegex.test(value) ? "" : "Description can only contain letters, commas, and periods.",
//                 }));
//                 break;
//             case "benefit":
//                 setErrors((prevState) => ({
//                     ...prevState,
//                     benefit: descriptionBenefitRegex.test(value) ? "" : "Benefit can only contain letters, commas, and periods.",
//                 }));
//                 break;
//             case "duration":
//                 setErrors((prevState) => ({
//                     ...prevState,
//                     duration: durationRegex.test(value) ? "" : "Duration must be a number between 1 and 365.",
//                 }));
//                 break;
//             default:
//                 break;
//         }
//     };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Check if there are any errors before sending the request
//         if (!errors.name && !errors.description && !errors.benefit && !errors.duration) {
//             sendRequest().then(() => navigate('/viewtreatment'));
//         } else {
//             alert("Please fix the errors before submitting.");
//         }
//     };

//     const sendRequest = async () => {
//         try {
//             await axios.post("http://localhost:5000/treatments/add", {
//                 name: String(inputs.name),
//                 description: String(inputs.description),
//                 benefit: String(inputs.benefit),
//                 duration: String(inputs.duration),
//             });
//             alert("Treatment Added"); // Show the alert after successful submission
//         } catch (error) {
//             console.error("Error during request:", error);
//             alert("Failed to submit treatment. Please try again.");
//         }
//     };

//     return (
        
//         <div className="home-back" id="Tratment">
//             {/* Home Header */}
//             <header className="header">
//                 <img alt="" className="logo-nav" src={Logo} /> 
//                 <div className="logo">W E L L N E S S 
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 A Y R V E D A
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 H O S P I T A L</div>
//                 {/* <button className="login-btnAd">Log Out</button> */}

//                 <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>


//             </header>
//        {/* Home Header End */}
//             <h1>Add Treatment</h1>
            
//             <div className="Allforms">
//                 <div className="Section1">
//                     <img className='Doc-1' src={IMG1} />
//                     {/* <button className="add-button1" onClick={() => navigate('/addtreatment')}>Add Treatment</button> */}
//                     <button className="add-button2" onClick={() => navigate('/viewtreatment')}>View Treatment</button>
//                 </div>

//                 <div className="Section2">
//                     <form onSubmit={handleSubmit}>
//                         <label>Treatment Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={inputs.name}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.name && <p className="error">{errors.name}</p>}
                        
//                         <label>Description</label>
//                         <input
//                             type="text"
//                             name="description"
//                             value={inputs.description}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.description && <p className="error">{errors.description}</p>}
                        
//                         <label>Benefit</label>
//                         <input
//                             type="text"
//                             name="benefit"
//                             value={inputs.benefit}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.benefit && <p className="error">{errors.benefit}</p>}
                        
//                         <label>Duration (in days)</label>
//                         <input
//                             type="number"
//                             name="duration"
//                             value={inputs.duration}
//                             onChange={handleChange}
//                             required
//                         />
//                         {errors.duration && <p className="error">{errors.duration}</p>}
                        
//                         <button id="submit-button" disabled={Object.values(errors).some(error => error)}>Submit</button>
//                     </form>
//                 </div>
//             </div>

            
//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="footer-content">
//           <img alt="Logo" className="logo-footer" src={Logo} />
//           <div className="quick-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">Treatments</a></li>
//               <li><a href="#">Foods</a></li>
//               <li><a href="#">Pharmacy</a></li>
//             </ul>
//           </div>
//           <div className="about">
//             <h4>About</h4>
//             <ul>
//               <li><a href="#">Find a Doctor</a></li>
//               <li><a href="#">Request an Appointment</a></li>
//               <li><a href="#">Find a Location</a></li>
//               <li><a href="#">Get an Opinion</a></li>
//             </ul>
//           </div>
//           <div className="support">
//             <h4>Support</h4>
//             <ul>
//               <li><a href="#">Donate</a></li>
//               <li><a href="#">Contact Us</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="logo-footer-Text">WELLNESS</div>
//         <div className="social-media">
//           <a href="#"><FaInstagram size={24} /></a>
//           <a href="#"><FaLinkedin size={24} /></a>
//           <a href="#"><FaYoutube size={24} /></a>
//           <a href="#"><FaFacebook size={24} /></a>
//         </div>
//       </footer>

//       <div className='copy-right'>
//         <p>© 2024. Designed by Sahan. All right reserved.</p>
//       </div>
//         </div>
//     );
// }

// export default AddTreatment;


import React, { useState } from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AddTreatment.css';
import IMG1 from "../Assets/Test.png";
import Logo from "../Assets/HeroLogo.png"

function AddTreatment() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        description: "",
        benefit: "",
        duration: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        benefit: "",
        duration: "",
    });

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]*$/; // Only letters and spaces
    const descriptionBenefitRegex = /^[A-Za-z\s,\.]*$/; // Only letters, commas, and periods
    const durationRegex = /^(?:[1-9]|[1-9]\d|[12]\d{2}|3[0-5]\d|36[0-5])$/; // Numbers between 1 and 365

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
                    name: nameRegex.test(value) ? "" : "Name can only contain letters.",
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

    const handleInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                if (!nameRegex.test(value)) {
                    e.target.value = value.slice(0, -1); // Remove the last character if invalid
                }
                break;
            case "description":
            case "benefit":
                if (!descriptionBenefitRegex.test(value)) {
                    e.target.value = value.slice(0, -1); // Remove the last character if invalid
                }
                break;
            case "duration":
                if (!/^\d*$/.test(value)) { // Allow only numbers
                    e.target.value = value.slice(0, -1); // Remove the last character if invalid
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if there are any errors before sending the request
        if (!errors.name && !errors.description && !errors.benefit && !errors.duration) {
            sendRequest().then(() => navigate('/viewtreatment'));
        } else {
            alert("Please fix the errors before submitting.");
        }
    };

    const sendRequest = async () => {
        try {
            await axios.post("http://localhost:5000/treatments/add", {
                name: String(inputs.name),
                description: String(inputs.description),
                benefit: String(inputs.benefit),
                duration: String(inputs.duration),
            });
            alert("Treatment Added"); // Show the alert after successful submission
        } catch (error) {
            console.error("Error during request:", error);
            alert("Failed to submit treatment. Please try again.");
        }
    };

    return (
        <div className="home-back" id="Tratment">
            {/* Home Header */}
            <header className="header">
                <img alt="" className="logo-nav" src={Logo} />
                <div className="logo">W E L L N E S S 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                A Y U R V E D A
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                H O S P I T A L</div>

                <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
            </header>
            {/* Home Header End */}
            
            <h1>Add Treatment</h1>
            <div className="Allforms">
                <div className="Section1">
                    <img className='Doc-1' src={IMG1} />
                    <button className="add-button2" onClick={() => navigate('/viewtreatment')}>View Treatment</button>
                </div>

                <div className="Section2">
                    <form onSubmit={handleSubmit}>
                        <label>Treatment Name</label>
                        <input
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            onInput={handleInput}  // Added to restrict input
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                        
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={inputs.description}
                            onChange={handleChange}
                            onInput={handleInput}  // Added to restrict input
                            required
                        />
                        {errors.description && <p className="error">{errors.description}</p>}
                        
                        <label>Benefit</label>
                        <input
                            type="text"
                            name="benefit"
                            value={inputs.benefit}
                            onChange={handleChange}
                            onInput={handleInput}  // Added to restrict input
                            required
                        />
                        {errors.benefit && <p className="error">{errors.benefit}</p>}
                        
                        <label>Duration (in days)</label>
                        <input
                            type="number"
                            name="duration"
                            value={inputs.duration}
                            onChange={handleChange}
                            onInput={handleInput}  // Added to restrict input
                            required
                        />
                        {errors.duration && <p className="error">{errors.duration}</p>}
                        
                        <button id="submit-button" disabled={Object.values(errors).some(error => error)}>Submit</button>
                    </form>
                </div>
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
        </div>
    );
}

export default AddTreatment;
