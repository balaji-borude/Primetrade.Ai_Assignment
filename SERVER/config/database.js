
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGOURL= process.env.MONGOURL;
// console.log(MONGOURL)
export const Connect=()=>{
    mongoose.connect(MONGOURL)
    .then(()=>{console.log("DB Connected Succesfully")})
    .catch((err)=>{console.error(err)});
}
