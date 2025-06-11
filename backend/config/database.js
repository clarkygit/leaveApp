import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); //Allows usage of ENV variables such as PORT and MONGO_URI

export const ConnectDB = async () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() =>{console.log("MongoDB Connected")})
        .catch((err) => { console.log(`MongoDB connection failed: ${err}`)})
}