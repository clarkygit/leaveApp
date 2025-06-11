import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/database.js"

dotenv.config(); //Allows usage of ENV variables such as PORT and MONGO_URI
const app = express();

//GET API
app.get('/', (req, res) =>{
    
})

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    ConnectDB(); //CONNECT TO MONGO DB
    console.log(`Server started at http://localhost:${PORT}`);
})