import mongoose from "mongoose"

const meterSchema = new mongoose.Schema({
    meter: Number,
    work: String,
    price: Number
})

export default mongoose.model("wage", meterSchema)