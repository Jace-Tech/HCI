import mongoose from "mongoose"

const connectDatabase = (callBack) => {
    mongoose.connect("mongodb://localhost:27017/work", () => {
        callBack()
    })
}

export default connectDatabase