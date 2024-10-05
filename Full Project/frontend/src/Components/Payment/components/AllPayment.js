// all payments
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import { useReactToPrint } from "react-to-print";
import './print.css'; 
import Logo from "../../Assets/HeroLogo.png";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';


export default function AllPayment() {
    const [payments, setPayments] = useState([]);
    const [filteredPayments, setFilteredPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    const navigate = useNavigate(); 
    const ComponentsRef = useRef();

    useEffect(() => {
        fetchPayments();
        
        // Update date and time every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date().toLocaleString());
        }, 1000);
        
        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        handleSearch();
    }, [searchQuery, payments]);

    const fetchPayments = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:5000/payment/");
            setPayments(res.data);
            setFilteredPayments(res.data);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id) => {
        navigate(`/allPayment/${id}`); 
    };

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure you want to delete payment with ID: ${id}?`)) {
            try {
                await axios.delete(`http://localhost:5000/payment/delete/${id}`);
                alert(`Deleted payment with ID: ${id}`);
                fetchPayments(); 
            } catch (err) {
                alert(`Failed to delete payment: ${err.message}`);
            }
        }
    };

    const handlePrint = useReactToPrint({
        content: () => ComponentsRef.current,
        documentTitle: "Payment Report",
        onAfterPrint: () => alert("Payment Report Successfully Downloaded!"),
    });

    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setFilteredPayments(payments);
            setNoResults(false);
            return;
        }

        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = payments.filter(payment => 
            Object.values(payment).some(value =>
                value.toString().toLowerCase().includes(lowercasedQuery)
            )
        );

        setFilteredPayments(filtered);
        setNoResults(filtered.length === 0);
    };

    const maskCardNumber = (cardNumber) => {
        return cardNumber.length >= 16 ? `**** **** **** ${cardNumber.slice(-4)}` : cardNumber;
    };

    const maskCvc = () => '***';

    // Styles
    const pageStyle = {
        padding: '40px',
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        fontFamily: "'Roboto', sans-serif",
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '36px',
        color: '#343a40',
        marginBottom: '20px',
        fontWeight: '700',
        textTransform: 'uppercase',
        paddingBottom: '10px'
    };

    const dateTimeStyle = {
        textAlign: 'center',
        fontSize: '16px',
        color: '#495057',
        marginBottom: '20px',
        fontStyle: 'italic'
    };

    const hospitalDetailsStyle = {
        textAlign: 'center',
        fontSize: '18px',
        color: '#343a40',
        marginBottom: '20px',
        fontWeight: '600',
        lineHeight: '1.5',
        borderBottom: '2px solid #007bff',
        paddingBottom: '10px'
    };

    const billContainerStyle = {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
        maxWidth: '900px',
        border: '1px solid #dee2e6',
        position: 'relative',
    };

    const billItemStyle = {
        marginBottom: '15px',
        padding: '15px',
        border: '1px solid #ced4da',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa'
    };

    const billLabelStyle = {
        fontWeight: '600',
        color: '#495057',
        flex: '0 0 180px'
    };

    const billValueStyle = {
        flex: '1',
        color: '#212529',
        textAlign: 'right',
        fontWeight: '500'
    };

    const buttonStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '5px 10px',
        marginLeft: '10px',
        transition: 'transform 0.3s',
        color: '#007bff'
    };

    const searchContainerStyle = {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
    };

    const searchBarStyle = {
        padding: '12px',
        width: '70%',
        boxSizing: 'border-box',
        borderRadius: '5px',
        border: '1px solid #ced4da',
        fontSize: '16px',
    };

    const downloadButtonStyle = {
        backgroundColor: '#007bff',  
        color: '#fff',  
        border: 'none', 
        padding: '12px 25px', 
        fontSize: '16px', 
        borderRadius: '8px',  
        cursor: 'pointer',  
        transition: 'background-color 0.3s, transform 0.3s', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    };

    const hoverEffect = {
        '&:hover': {
            backgroundColor: '#0056b3', 
            transform: 'scale(1.05)',  
        }
    };

    return (
        <div className='allpayment-home'>

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

        <div style={pageStyle}>
            
            <h1 style={headerStyle}>Payment Details</h1>

            <div style={searchContainerStyle}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Payment..."
                    style={searchBarStyle}
                />

                <button 
                    onClick={handlePrint} 
                    style={{ ...downloadButtonStyle, ...hoverEffect }}
                >
                    Download Report
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                filteredPayments.length === 0 && noResults ? (
                    <p>No results found</p>
                ) : (
                    
                    <div ref={ComponentsRef}>
                       
                        {/* Hospital Details - Visible in PDF */}
                        <div style={hospitalDetailsStyle}>
                            <p>WELLNESS AYURVEDA HOSPITAL</p>
                            <p>56/A Weliweriya Road, Kirindiwela</p>
                            <p>Phone: 0777513155</p>
                        </div>

                        {/* Current Date and Time for Printed Report */}
                        <div style={dateTimeStyle}>
                            <p>{currentDateTime}</p>
                        </div>

                        {filteredPayments.map((payment, index) => (
                            <div key={index} style={billContainerStyle}>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>User Name:</div>
                                    <div style={billValueStyle}>{payment.UserName}</div>
                                </div>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>Method Type:</div>
                                    <div style={billValueStyle}>{payment.methodType}</div>
                                </div>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>Card Number:</div>
                                    <div style={billValueStyle}>{maskCardNumber(payment.cardNumber)}</div>
                                </div>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>Date:</div>
                                    <div style={billValueStyle}>{payment.date}</div>
                                </div>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>CVC:</div>
                                    <div style={billValueStyle}>{maskCvc()}</div>
                                </div>
                                <div style={billItemStyle}>
                                    <div style={billLabelStyle}>Description:</div>
                                    <div style={billValueStyle}>{payment.description || 'N/A'}</div>
                                </div>
                                {/* Edit and Delete Buttons - Visible only on page */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                                    <button style={buttonStyle} onClick={() => handleEdit(payment._id)}>
                                        <FaEdit /> Edit
                                    </button>
                                    <button style={buttonStyle} onClick={() => handleDelete(payment._id)}>
                                        <FaTrashAlt /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            )}

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
            </div> 
            <div className='copy-right'>
                <p>© 2024. Designed by Sahan. All rights reserved.</p>
            </div>
             {/* Footer Section End */}
        </div>
        
        
    );
}
