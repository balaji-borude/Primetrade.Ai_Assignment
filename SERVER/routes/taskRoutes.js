import express from "express";
const router = express.Router();

// import Controller function 
import {
    createTask,
    getAllTask,
    updateTask,
    deleteTask
} from "../controller/task.js";

// create route
router.post("/createtask",createTask);
router.get("/getalltask",getAllTask);
router.put("/updatetask/:id",updateTask); // id params madhe pass keli 
router.delete("/deletetask/:id",deleteTask); 


// exports the routes
export default router;
