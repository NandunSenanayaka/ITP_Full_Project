import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { useReactToPrint } from "react-to-print";
import { useNavigate } from 'react-router-dom';
import './ViewTreatment.css'; // Import the CSS file
import Logo from "../Assets/HeroLogo.png";
import PieChart from '../Charts/PieChart'; // Import the PieChart component

const URL = "http://localhost:5000/treatments";

const fetchHandler = async () => {
    try {
        const res = await axios.get(URL);
        console.log("Fetched data:", res.data); // Debugging the response
        return res.data;
    } catch (err) {
        console.error("Error fetching treatments:", err);
    }
};

function ViewTreatment() {
    const navigate = useNavigate();
    const [treatments, setTreatments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        fetchHandler().then((data) => {
            console.log("Fetched data:", data); // Log the full data
            setTreatments(data || []);
        });
    }, []);

    // Download function
    const ComponentsRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Treatments Report",
        onAfterPrint: () => alert("Treatments Report Successfully Downloaded!"),
    });

    // End Download function

    // Search function
    const handleSearch = () => {
        fetchHandler().then((data) => {
            const filteredTreatments = data.filter((treatment) =>
                Object.values(treatment).some((field) =>
                    field.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
            setTreatments(filteredTreatments);
            setNoResults(filteredTreatments.length === 0);
        });
    };

    // Handle update and delete
    const handleUpdate = (id) => {
        navigate(`/viewtreatment/${id}`);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${URL}/delete/${id}`);
            setTreatments(treatments.filter(treatment => treatment._id !== id));
            alert('Treatment Deleted');
        } catch (err) {
            console.error("Error deleting treatment:", err);
            alert('Error deleting treatment');
        }
    };

    return (
        
        <div className='home-back'>
            
            {/* Home Header */}
            <header className="header">
                <img alt="" className="logo-nav" src={Logo} /> 
                <div className="logo">W E L L N E S S 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                A Y R V E D A
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                H O S P I T A L</div> 
                <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
            </header>
       {/* Home Header End */}
       
        <div className='viewtreatments'>
        <p>Date: {new Date().toLocaleDateString()}</p>&nbsp;
        <p> {new Date().toLocaleTimeString()}</p>
        <div className='viewtitle'> <h1>View Treatments</h1></div>
        </div>

            {/* Search container */}
            <div className="search-container">
                <input
                    id="search-bar"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search Treatments"
                />
                <button id="search-button" onClick={handleSearch}>Search</button>
            </div>

            {noResults ? (
                <div>
                    <p>No Treatments Found</p>
                </div>
            ) : (
                <div ref={ComponentsRef}>
                    {treatments.length > 0 ? (
                        <>
                            <table className="treatments-table">
                                <thead>
                                    <tr>
                                        {/* <th>ID</th> */}
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Benefit</th>
                                        <th>Duration</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {treatments.map((treatment) => (
                                        <tr key={treatment._id}>
                                            {/* <td>{treatment._id}</td> */}
                                            <td>{treatment.name}</td>
                                            <td>{treatment.description}</td>
                                            <td>{treatment.benefit}</td>
                                            <td>{treatment.duration}</td>
                                            <td className="actions-cell">
                                                <button
                                                    className="update-button"
                                                    onClick={() => handleUpdate(treatment._id)}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    id="delete-button"
                                                    className="delete-button"
                                                    onClick={() => handleDelete(treatment._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pie Chart */}
                            <PieChart treatments={treatments} />
                        </>
                    ) : (
                        <p>No treatments found</p>
                    )}
                </div>
            )}
            <button id="download-report" onClick={handlePrint}>Download Report</button>
            <button id="add-button" onClick={() => navigate('/addtreatment')}>Add Treatment</button>

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

export default ViewTreatment;
