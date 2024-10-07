import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './Patientdetails.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import Logo from "../Assets/HeroLogo.png"; // Import your logo

const URL = "http://localhost:5000/Patient/";

function Patientdetails() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const componentRef = useRef();

    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await axios.get(URL);
                setPatients(response.data);
            } catch (err) {
                setError("Error fetching patient data");
                console.error("Fetch error: ", err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHandler();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            try {
                await axios.delete(`${URL}delete/${id}`);
                setPatients(patients.filter((patient) => patient._id !== id));
                alert("Patient deleted successfully");
            } catch (err) {
                setError("Error deleting patient");
                console.error("Delete error: ", err.message);
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/updatePatient/${id}`);
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'PatientDetails',
    });

    const filteredPatients = patients.filter(patient => {
        const query = searchQuery.toLowerCase();
        return (
            String(patient.nic).toLowerCase().includes(query) ||
            String(patient.name).toLowerCase().includes(query) ||
            String(patient.email).toLowerCase().includes(query) ||
            String(patient.gender).toLowerCase().includes(query) ||
            String(patient.number).toLowerCase().includes(query) ||
            String(patient.dob).toLowerCase().includes(query)
        );
    });

    const currentDate = new Date().toLocaleDateString();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="patient-details-container">
            {/* Home Header */}
            <header className="headerT">
                <img alt="" className="logo-nav" src={Logo} /> 
                <div className="logo">W E L L N E S S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Y U R V E D A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; H O S P I T A L</div>
                <button className="login-btnAd" onClick={() => navigate('/AdminHome')}>Log Out</button>
            </header>
            {/* END Home Header */}

            
            <div className="action-buttons">
                <button className="download-button" onClick={handlePrint}>Print Report</button>
            </div>
            <br/>
            <br/>
            <br/>

            <br/>


            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by NIC, Name, Email, Gender, Phone Number, DOB..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* Report Header for Printing */}
            <div className="report-header" ref={componentRef}>
                <h2>WELLNESS AYURVEDA HOSPITAL</h2>
                <p>56/A Weliweriya Road, Kirindiwela</p>
                <p>Phone: 0777513155</p>
                <p>Date: {currentDate}</p>

                <table className="patient-details-table">
                    <thead>
                        <tr>
                            <th>NIC</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>Phone Number</th>
                            <th>Patient Condition</th>
                            <th>Doctor's Notes</th>
                            <th className="hide-on-print">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient) => (
                            <tr key={patient._id}>
                                <td>{patient.nic}</td>
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>
                                <td>{patient.dob}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.address}</td>
                                <td>{patient.height}</td>
                                <td>{patient.weight}</td>
                                <td>{patient.number}</td>
                                <td>{patient.patientCondition}</td>
                                <td>{patient.doctorsNotes}</td>
                                <td className="actions-cell hide-on-print">
                                    <button className="update-button" onClick={() => handleUpdate(patient._id)}>Update</button>
                                    <button className="delete-button" onClick={() => handleDelete(patient._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default Patientdetails;
