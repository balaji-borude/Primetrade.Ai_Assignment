import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();


app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"HomePage baby"
    })
});

const PORT =process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Application is running on the Port ${PORT}`)
})