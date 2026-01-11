
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Completed","Pending"],
        default:"Pending"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Task =mongoose.model("Task",TaskSchema)
export default Task;