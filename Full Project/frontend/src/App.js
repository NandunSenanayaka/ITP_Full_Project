import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Link } from 'react-router-dom'; // Remove this if not used

import NurseLogin from "./Components/NurseLogin/NurseLogin";
import AddNurse from './Components/AddNurse/AddNurse';
import NurseDetails from './Components/NurseDetails/NurseDetails';
import UpdateNurse from './Components/UpdateNurse/UpdateNurse';

import ViewTreatment from "./Components/Treatment/ViewTreatment";
import AddTreatment from "./Components/Treatment/AddTreatment";
import UpdateTreatment from "./Components/UpdateTreatment/UpdateTreatment";
import TreatmentPage from "./Components/TreatmentPage/TreatmentPage"; // Import your new TreatmentPage component
import HomeNav from "./Components/HomeNav/HomeNav";
import AdminHome from "./Components/AdminHome/AdminHome";
import TreatmentLogin from "./Components/TreatmentLogin/TreatmentLogin";
import Contact from "./Components/ContactPage/Contact";
import SinhalaTreatmentPage from "./Components/TreatmentPage/SinhalaTreatmentPage"; 


import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";
import AddDoctor from "./Components/AddDoctor/AddDoctor";
import UpdateDoctor from "./Components/UpdateDoctor/UpdateDoctor";
import DoctorLogin from "./Components/DoctorLogin/DoctorLogin";
import FindDoctor from "./Components/FindDoctorPage/FindDoctor";

import Header from './Components/Payment/components/Header'; // Update path if necessary
import AddPayment from './Components/Payment/components/AddPayment'; // Update path if necessary
import AllPayment from './Components/Payment/components/AllPayment'; // Update path if necessary
import UpdatePayment from './Components/Payment/components/UpdatePayment'; // Update path if necessary
import PaymentLogin from "./Components/Paymentlogin/PaymentLogin";


import Patient from './Components/AddPatient/Patient';
import Patientdetails from './Components/Patientdetails/Patientdetails';
import UpdatePatient from './Components/UpdatePatient/UpdatePatient';
import FoodLogin from "./Components/FoodLogin/FoodLogin";
import FoodPage from "./Components/FoodPage/food";
import PharmacyPage from './Components/PharmacyPage/PharmacyPage';



function App() {

  return (
    <div>

      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addappoinment' element={<AddNurse/>}/> 
          <Route path='/appoinmentdetails' element={<NurseDetails/>}/> 
          <Route path='/appoinmentdetails/:id' element={<UpdateNurse/>}/> 
          <Route path="/NurseLogin" element={<NurseLogin />} /> {/* Route to NurseLoginLogin */}

           {/* Treatment-related routes */}
          <Route path="/addtreatment" element={<AddTreatment />} />
          <Route path="/viewtreatment" element={<ViewTreatment />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/viewtreatment/:_id" element={<UpdateTreatment />} />
          <Route path="/treatmentpage" element={<TreatmentPage />} /> {/* Route to TreatmentPage */}
          <Route path="/TreatmentLogin" element={<TreatmentLogin />} /> {/* Route to TreatmentLogin */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SinhalaTreatmentPage" element={<SinhalaTreatmentPage />} />

          {/* Doctor-related routes */}
          <Route path="/DoctorLogin" element={<DoctorLogin/>}></Route>
          <Route path="/addDoctor" element={<AddDoctor/>}></Route>
          <Route path="/doctorDetails" element={<DoctorDetails/>}></Route>
          <Route path="/doctorDetails/:id" element={<UpdateDoctor/>}></Route>
          <Route path="/DoctorPage" element={<FindDoctor />}/>

          {/* Payment-related routes */}
          <Route path="/addPayment" element={<AddPayment />} />
          <Route path="/allPayment" element={<AllPayment />} />
          <Route path="/allPayment/:id" element={<UpdatePayment />} />
          <Route path="/PaymentLogin" element={<PaymentLogin />} />
          {/* Define other routes as needed */}

          {/* Food-patient-related routes */}
          <Route path="/FoodLogin" element={<FoodLogin />} />
          <Route path="/addPatient" element={<Patient />} />
          <Route path="/Patientdetails" element={<Patientdetails />} />
          <Route path="/updatePatient/:id" element={<UpdatePatient />} />
          <Route path="/food" element={<FoodPage/>} />

          <Route path="/PharmacyPage" element={<PharmacyPage/>} />


          



        </Routes>

      </React.Fragment>


    </div>
  );
}

export default App;
