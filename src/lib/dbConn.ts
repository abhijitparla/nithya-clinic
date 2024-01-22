import mongoose from "mongoose";

try {
    const con = mongoose.connect('mongodb://localhost:27017/server-action-test')
    console.log("connected to mongodb")
} catch (error) {
    console.log("failed to establish connection", error)
}

export default con