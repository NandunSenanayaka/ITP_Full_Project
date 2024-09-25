// import React, { useEffect, useState, useRef } from "react";
// import Nav from "../Nav/Nav";
// import axios from "axios";
// import NurseDetail from "./NurseDetail";
// import { useReactToPrint } from "react-to-print";
// import "./NurseDetails.css"; // Import the CSS file
// import Logo1 from "../Assets/HeroLogo.png"
// import { useNavigate } from 'react-router-dom';

// const URL = "http://localhost:5000/nurses";

// const fetchHandler = async () => {
//   try {
//     const response = await axios.get(URL);
//     return response.data; // Ensure that response.data matches the expected structure
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };

// function NurseDetails() {
//   const [nurseDetails, setNurseDetails] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [noResults, setNoResults] = useState(false);

//   useEffect(() => {
//     fetchHandler().then((data) => {
//       console.log(data); // Log the data to verify its structure
//       setNurseDetails(data.nurses || []); // Ensure this matches the data structure from the backend
//     });
//   }, []);

//   // PDF download function part start
//   const componentsRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentsRef.current,
//     documentTitle: "Nurse Report",
//     onAfterPrint: () => alert("Nurse Report Successfully Downloaded!"),
//   });

//   // Search function
//   const handleSearch = () => {
//     fetchHandler().then((data) => {
//       const filteredNurses = data.nurses.filter((nurse) =>
//         Object.values(nurse).some((field) =>
//           field.toString().toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//       setNurseDetails(filteredNurses);
//       setNoResults(filteredNurses.length === 0);
//     });
//   };

//   return (
//     <div className="nurse-details-page">
//       {/* Home Header */}
//       <header className="header">
//                 <img alt="" className="logo-nav" src={Logo1} /> 
//                 <div className="logo">W E L L N E S S 
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 A Y R V E D A
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 H O S P I T A L</div>
//                 {/* <button className="login-btnAd">Log Out</button> */}
//                 <button className="login-btnAd" onClick={() => navigate('/adminhome')}>Log Out</button>
//             </header>
//       <Nav />
//       <div className="content-wrapper">
//         <h1 className="title">Appointment Details</h1>

//         <div className="search-section">
//           <input
//             className="search-input"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             type="text"
//             name="search"
//             placeholder="Search Appointment Details"
//           />
//           <button className="search-btn" onClick={handleSearch}>
//             Search
//           </button>
//         </div>

//         {noResults ? (
//           <div className="no-results">
//             <p>Details Not Found</p>
//           </div>
//         ) : (
//           <div ref={componentsRef} className="nurse-details-container">
//             {nurseDetails &&
//               nurseDetails.map((nurseDetail, i) => (
//                 <div key={i} className="nurse-detail-card">
//                   <NurseDetail {...nurseDetail} />
//                 </div>
//               ))}
//           </div>
//         )}
//         <button className="download-btn" onClick={handlePrint}>
//           Download Report
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NurseDetails;

import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import NurseDetail from "./NurseDetail";
import { useReactToPrint } from "react-to-print";
import "./NurseDetails.css"; // Import the CSS file
import Logo1 from "../Assets/HeroLogo.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const URL = "http://localhost:5000/nurses";

const fetchHandler = async () => {
  try {
    const response = await axios.get(URL);
    return response.data; // Ensure that response.data matches the expected structure
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

function NurseDetails() {
  const [nurseDetails, setNurseDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  const navigate = useNavigate(); // Define navigate using the useNavigate hook

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log(data); // Log the data to verify its structure
      setNurseDetails(data.nurses || []); // Ensure this matches the data structure from the backend
    });
  }, []);

  // PDF download function part start
  const componentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    documentTitle: "Nurse Report",
    onAfterPrint: () => alert("Nurse Report Successfully Downloaded!"),
  });

  // Search function
  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filteredNurses = data.nurses.filter((nurse) =>
        Object.values(nurse).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setNurseDetails(filteredNurses);
      setNoResults(filteredNurses.length === 0);
    });
  };

  return (
    <div className="nurse-details-page">
      {/* Home Header */}
      <header className="header">
        <img alt="" className="logo-nav" src={Logo1} />
        <div className="logo">W E L L N E S S
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          A Y R V E D A
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          H O S P I T A L
        </div>
        <button className="login-btnAd" onClick={() => navigate('/adminhome')}>
          Log Out
        </button>
      </header>
      <Nav />
      <div className="content-wrapper">
        <h1 className="title">Appointment Details</h1>

        <div className="search-section">
          <input
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            name="search"
            placeholder="Search Appointment Details"
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>

        {noResults ? (
          <div className="no-results">
            <p>Details Not Found</p>
          </div>
        ) : (
          <div ref={componentsRef} className="nurse-details-container">
            {nurseDetails &&
              nurseDetails.map((nurseDetail, i) => (
                <div key={i} className="nurse-detail-card">
                  <NurseDetail {...nurseDetail} />
                </div>
              ))}
          </div>
        )}
        <button className="download-btn" onClick={handlePrint}>
          Download Report
        </button>
      </div>
    </div>
  );
}

export default NurseDetails;
