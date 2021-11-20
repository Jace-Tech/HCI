import mongoose from "mongoose"

const wageSchema = new mongoose.Schema({
    team: String,
    category: String,
    work: String,
    meter: Number,
    benefit: Number,
    allowance: Number,
    month: String,
    wage: Number
})

export default mongoose.model("wages", wageSchema)