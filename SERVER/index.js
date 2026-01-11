import express from "express";
import dotenv from "dotenv";
import { Connect } from "./config/database.js";
import userRoutes from "./routes/User.js";
import taskRoutes from "./routes/taskRoutes.js";
import cors from 'cors';


dotenv.config();
const app = express();

app.use(express.json());

app.use(cors())
Connect();

// routes
// auth routes
//app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/auth", userRoutes);

// task route
// Routes
app.use("/api/v1/task", taskRoutes);



app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"HomePage baby"
    })
});

// eslint-disable-next-line no-undef
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Application is running on the Port ${PORT}`)
});