import mongoose from "mongoose"

const workSchema = new mongoose.Schema({
    work: String,
    price: Number
})

export default mongoose.model("work", workSchema)