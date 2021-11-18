import mongoose from "mongoose"


const teamMemberSchema = new mongoose.Schema({
    name: String,
    teamName: String,
    bankName: String,
    bankBranch: String,
    bankIFSCCode: String,
    accountNumber: Number,
    
})


export default mongoose.model("team_member", teamMemberSchema)