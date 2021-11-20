import mongoose from "mongoose"

const benefitSchema = new mongoose.Schema({
    benefit: Number
})

export default mongoose.model("benefit", benefitSchema)