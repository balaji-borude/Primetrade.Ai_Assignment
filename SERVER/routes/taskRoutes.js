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
router.post("/createTask",createTask);
router.get("/getAllTask",getAllTask);
router.put("/updateTask/:id",updateTask); // id params madhe pass keli 
router.delete("/deleteTask/:id",deleteTask); 


// exports the routes
export default router;
