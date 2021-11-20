import mongoose from "mongoose"

const allowanceSchema = new mongoose.Schema({
    allowance: Number
})

export default mongoose.model("allowance", allowanceSchema)