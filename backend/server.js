import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/database.js"
import LeaveCollection from "./models/leaves.model.js";

dotenv.config(); //Allows usage of ENV variables such as PORT and MONGO_URI
const app = express();
app.use(express.json()); //Allows acceptance of JSON data from post's req.body

//GET API
app.get('/', (req, res) =>{
    
})



//POST API
app.post('/api/leaves', async (req, res) => {
    const leave = req.body; //Gets Body of POST request
    //Checks if all fields are present
    if(!leave.name || !leave.leaveId || !leave.leaveType || !leave.leaveStartDate || !leave.leaveEndDate){
        return res.status(400).json({success:false, message:"Insufficient leave information provided"});
    }

    //Save leave to DB
    const newLeave = new LeaveCollection(leave);
    await newLeave.save()
        .then(() => { res.status(201).json({success:true, data: newLeave})}) //Success Message after saving
        .catch((err) => { //Handle Saving Failure
            console.log(`Error in saving leave: ${err}`)
            res.status(500).json({ success:false, message: "Server Error" })
         });
})


//STARTS BACKEND
const PORT = process.env.PORT;
app.listen(PORT, () =>{
    ConnectDB(); //CONNECT TO MONGO DB
    console.log(`Server started at http://localhost:${PORT}`);
})