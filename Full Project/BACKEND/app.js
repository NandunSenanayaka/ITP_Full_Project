
//pw-admin123

const express=require("express");
const mongoose=require("mongoose");
const router = require("../BACKEND/Routes/NurseRoutes")

const app =express();
const cors = require("cors");

const treatmentRouter = require("../BACKEND/Routes/treatments.js");
const doctorsRouter=require("../BACKEND/Routes/DoctorRoute");
const paymentRouter=require("../BACKEND/Routes/payment");

//middleware
app.use(express.json());
app.use(cors());
app.use("/nurses",router);
app.use("/treatments", treatmentRouter);
app.use("/doctors",doctorsRouter);
app.use("/payment", paymentRouter);


mongoose.connect("mongodb+srv://admin:admin123@cluster.ugqok.mongodb.net/")
.then(()=>  console.log("connect to the mongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
