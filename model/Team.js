import mongoose from "mongoose"


const teamSchema = new mongoose.Schema({
    teamID: String,
    teamName: String,
    location: String,
    phoneNumber: String,
    bankName: String,
    branchName: String,
    bankIFSCCode: String,
    accountNumber: Number
})


export default mongoose.model("team", teamSchema)