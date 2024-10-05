

// import React, { useEffect, useState,useRef } from "react";
// import DNav from "../DNav/DNav";
// import axios from "axios";
// import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
// import Logo from "../Assets/HeroLogo.png"; // Import your logo
// import DoctorDetail from "../DoctorDetails/DoctorDetail"; // Import the correct component
// import {useReactToPrint} from "react-to-print";
// import "./DoctorDetails.css";


// const URL = "http://localhost:5000/doctors"; // Make sure the URL is correct

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => res.data);
// }

// function DoctorDetails() {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     fetchHandler().then((data) => setDoctors(data.doctors)); // Make sure `data.doctors` exists in response
//   }, []);

//   //pdf download function start
//   const ComponentsRef = useRef();
//   const handlePrint = useReactToPrint({

//     content: () => ComponentsRef.current,
//     DocumnetTitle : "Doctors Report",
//     onafterprint:()=>alert("Doctors report Successfully Download!")

//   })//pdf download function end

//   //Search function Start
//   const [SearchQuery,setSearchQuery] = useState("");
//   const [noResults,setNoResults] = useState(false);

//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredDoctors = data.doctors.filter((doctor) => Object.values(doctor).some((field)=> field.toString().toLowerCase().includes(SearchQuery.toLowerCase())))
//       setDoctors(filteredDoctors);
//       setNoResults(filteredDoctors.length===0);

//     });
//   }//Search function End

//   return (
//     <div className="container">
//       {/* Home Header */}
//       <header className="header">
//         <img alt="" className="logo-nav" src={Logo} /> 
//         <div className="logo">W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L</div>
//         {/* <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button> */}
//       </header>
//       {/* END Home Header */}
//     <DNav />
//     <h1>Doctor Details Display Page</h1>
//     <form className="search-form">
//       <input
//         onChange={(e) => setSearchQuery(e.target.value)}
//         type="text"
//         name="Search"
//         placeholder="Search Doctors Details"
//         className="search-input"
//       />
//       <button type="button" onClick={handleSearch} className="btn btn-primary">
//         Search
//       </button>
//     </form>

//     {noResults ? (
//       <div className="no-results">
//         <p>No Doctors Found</p>
//       </div>
//     ) : (
//       <div ref={ComponentsRef} className="doctor-list">
//         {doctors &&
//           doctors.map((doctor, i) => (
//             <div key={i} className="doctor-card">
//               <DoctorDetail doctor={doctor} />
//             </div>
//           ))}
//       </div>
//     )}
//     <button className="btn btn-success print-button" onClick={handlePrint}>
//       Download Report
//     </button>

    
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
//         <div className="logo-footer-TextD">WELLNESS</div>
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
//             {/* END Footer Section */}

//   </div>
//   );
// }

// export default DoctorDetails;



import React, { useEffect, useState, useRef } from "react";
import DNav from "../DNav/DNav";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Logo from "../Assets/HeroLogo.png"; // Import your logo
import DoctorDetail from "../DoctorDetails/DoctorDetail"; // Import the correct component
import { useReactToPrint } from "react-to-print";
import "./DoctorDetails.css";

const URL = "http://localhost:5000/doctors"; // Ensure the URL is correct

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
}

function DoctorDetails() {
  const [doctors, setDoctors] = useState([]);
  const [SearchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetchHandler().then((data) => setDoctors(data.doctors)); // Ensure `data.doctors` exists in the response
  }, []);

  // PDF download function start
  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "Doctors Report",
    onAfterPrint: () => alert("Doctors report successfully downloaded!")
  });
  // PDF download function end

  // Search function start
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredDoctors = data.doctors.filter((doctor) =>
        Object.values(doctor).some((field) =>
          field.toString().toLowerCase().includes(SearchQuery.toLowerCase())
        )
      );
      setDoctors(filteredDoctors);
      setNoResults(filteredDoctors.length === 0);
    });
  };
  // Search function end

  return (
    <div ref={ComponentsRef} className="container">
      {/* Home Header */}
      <header className="header">
        <img alt="" className="logo-nav" src={Logo} />
        <div className="logo">
          W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L
        </div>
      </header>
      {/* END Home Header */}

      <div className="nav-component">
        <DNav />
    </div>
      <h1>Doctor Details Display Page</h1>

      {/* Search Form */}
      <form className="search-form">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="Search"
          placeholder="Search Doctors Details"
          className="search-input"
        />
        <button type="button" onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Doctor List */}
      {noResults ? (
        <div className="no-results">
          <p>No Doctors Found</p>
        </div>
      ) : (
        <div className="doctor-list">
          {doctors &&
            doctors.map((doctor, i) => (
              <div key={i} className="doctor-card">
                <DoctorDetail doctor={doctor} />
              </div>
            ))}
        </div>
      )}

      <button className="btn btn-success print-button" onClick={handlePrint}>
        Download Report
      </button>

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
        <div className="logo-footer-TextD">WELLNESS</div>
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
      {/* END Footer Section */}
    </div>
  );
}

export default DoctorDetails;
