import mongoose from "mongoose"


const staffSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: String,
    password: {
        type: String,
        required: true
    }
})


export default mongoose.model("staff", staffSchema)