import mongoose from "mongoose";

const users = new mongoose.Schema({
    username: {type: String, required: true},
    pasasword: {type: String, required: true},
    role: {type: String, default: "Employee"}
})

const Users = mongoose.model('User', users);
export default Users;