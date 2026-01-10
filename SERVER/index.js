import express from "express";
import dotenv from "dotenv";
import { Connect } from "./config/database.js";

dotenv.config();
const app = express();

Connect();



app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"HomePage baby"
    })
});

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Application is running on the Port ${PORT}`)
});