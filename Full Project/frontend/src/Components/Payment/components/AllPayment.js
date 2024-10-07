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
    const componentsRef = useRef();

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
        content: () => componentsRef.current,
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
        backgroundImage: 'url("../Assets/MHome.jpg")', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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

    const searchInputStyle = {
        padding: '10px',
        border: '1px solid #ced4da',
        borderRadius: '4px',
        flexGrow: 1,
        marginRight: '10px'
    };

    // Calculate total doctor charges
    const totalCharges = filteredPayments.length * 1500; // Assuming each charge is Rs. 1500

    return (
        <div style={pageStyle}>
            <h1 style={headerStyle}>All Payments</h1>
            <p style={dateTimeStyle}>Current Date and Time: {currentDateTime}</p>
            <div style={searchContainerStyle}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    style={searchInputStyle}
                />
                <button onClick={handlePrint} style={buttonStyle}>Print</button>
            </div>
            <div style={hospitalDetailsStyle}>
                Hospital Name: <strong>ABC Hospital</strong><br />
                Address: <strong>123 Main St, City, Country</strong><br />
                Phone: <strong>(123) 456-7890</strong>
            </div>

            {loading && <div>Loading payments...</div>}
            {noResults && !loading && <div>No payments found.</div>}
            {!loading && filteredPayments.map((payment, index) => (
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
                    <div style={billItemStyle}>
                        <div style={billLabelStyle}>Doctor Charges:</div>
                        <div style={billValueStyle}>Rs. 1500</div>
                    </div>
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

            {/* Display total charges */}
            <div style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>
                Total Doctor Charges: Rs. {totalCharges}
            </div>

            {/* Print Section */}
            <div style={{ display: 'none' }}>
                <div ref={componentsRef}>
                    <h1 style={headerStyle}>Payment Report</h1>
                    <p style={dateTimeStyle}>Date: {currentDateTime}</p>
                    <div style={hospitalDetailsStyle}>
                        Hospital Name: <strong>ABC Hospital</strong><br />
                        Address: <strong>123 Main St, City, Country</strong><br />
                        Phone: <strong>(123) 456-7890</strong>
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
                            {/* <div style={billItemStyle}>
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
                            </div> */}
                            <div style={billItemStyle}>
                                <div style={billLabelStyle}>Description:</div>
                                <div style={billValueStyle}>{payment.description || 'N/A'}</div>
                            </div>
                            <div style={billItemStyle}>
                                <div style={billLabelStyle}>Doctor Charges:</div>
                                <div style={billValueStyle}>Rs. 1500</div>
                            </div>
                        </div>
                    ))}
                    <div style={{ textAlign: 'right', fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>
                        Total Doctor Charges: Rs. {totalCharges}
                    </div>
                </div>
            </div>
        </div>
    );
}
