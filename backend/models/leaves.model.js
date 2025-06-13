import mongoose from "mongoose";

const leavesSchema = new mongoose.Schema(
    {
    user: {type: String, required:true},
    leaveId: {type: Number, required: true},
    leaveType: {type: String, required: true},
    leaveStartDate: {type: Date, required: true},
    leaveEndDate: {type: Date, required: true},
    comments: {type: String, required: false},
    status: {
        type: String,
        enum: ['Pending Approval', 'Approved', 'Declined', 'Cancelled', 'Completed'],
        default: 'Pending Approval',
        },
    },
    {
        timestamps: true //Includes Created & Updated Timestamp
    }
);

const LeaveCollection = mongoose.model('LeaveCollection', leavesSchema);
export default LeaveCollection;