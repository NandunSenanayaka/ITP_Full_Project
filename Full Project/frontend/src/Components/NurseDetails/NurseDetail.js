import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./details.css"; // Import the CSS file

function NurseDetail({
  _id,
  name,
  nic,
  email,
  phone,
  appnumber,
  rnumber,
  time,
  diseases,
  description,
}) {
  const navigate = useNavigate();

   // Validation function
   const isValidInput = () => {
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      alert("Name should only contain letters.");
      return false;
    }
    if (!/^\d{0,12}$/.test(nic) || nic.length > 12) {
      alert("NIC should be a 12-digit number.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!/^\d{0,10}$/.test(phone) || phone.length > 10) {
      alert("Phone number should be 10 digits.");
      return false;
    }
    if (!/^\d*$/.test(appnumber)) {
      alert("Appointment number should only allow digits.");
      return false;
    }
    if (!/^[1-9]$|^10$/.test(rnumber)) {
      alert("Room number should be between 1 to 10.");
      return false;
    }
    if (!/^\d{2}:\d{2}$/.test(time)) {
      alert("Time should be in HH:MM format.");
      return false;
    }
    if (!/^[a-zA-Z\s]*$/.test(diseases)) {
      alert("Diseases field should only contain text.");
      return false;
    }
    return true;
  };

  // Delete function handler
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/nurses/${_id}`);
      alert("Appointment deleted successfully!");
      navigate("/appoinmentdetails");
    } catch (err) {
      console.error("Error deleting appointment: ", err);
    }
  };

  return (
            
            
    <div className="nurse-detail-report">
      
      <h1 className="report-title">Appointment Details Report</h1>
      <table className="report-table">
        <tbody>
          <tr>
            {/* <th>ID:</th>
            <td>{_id || "N/A"}</td> */}
          </tr>
          <tr>
            <th>Name:</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>NIC:</th>
            <td>{nic}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>Appointment Number:</th>
            <td>{appnumber}</td>
          </tr>
          <tr>
            <th>Room Number:</th>
            <td>{rnumber}</td>
          </tr>
          <tr>
            <th>Time:</th>
            <td>{time}</td>
          </tr>
          <tr>
            <th>Diseases:</th>
            <td>{diseases}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{description || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      <div className="report-actions">
        <button className="btn-update">
          <Link to={`/appoinmentdetails/${_id}`}>Update</Link>
        </button>
        <button className="btn-delete" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NurseDetail;
