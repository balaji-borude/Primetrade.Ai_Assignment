
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

// authentication middleware
export const auth = async (req, res, next) => {
    try{
        // console.log("Entering in Auth middleware")
        //extract token
        const token = req.cookies.token
            || req.body.token 
            || req.header("Authorization").replace("Bearer ", "");

        // console.log("Printing Token From Auth --> ", token);

        //if token missing, then return response
        if(!token) {
            return res.status(401).json({
                success:false,
                message:'TOken is missing',
            });
        }

        //verify the token
        // eslint-disable-next-line no-undef
        const JWT_SCERET = process.env.JWT_SCERET;
        // console.log("Printing jwtSecret in auth -->",JWT_SCERET);

        try{
            const decode =  jwt.verify(token, JWT_SCERET);
            // console.log(decode);
            req.user = decode;    
            // user chya request madhe Token pathavle ====> mahnje pratyek user chya request madhe he token janar --> tyacha fayda as honar ki --> pudhcya konntya hi request user takel tyamadhe token asel ch 
            
            // const payload={
            //     id:user._id,
            //     email:user.email,
            //     accountType:user.accountType
            // };
            // ------------> ha jo data user ne payload madhe store kela ahe na to apan acces karu shakkto 
        }
        catch(err) {
            //verification - issue
            console.log(err)
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();

    }
    catch(error) {  
        console.log(error)
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}

export const isUser = async(req,res,next)=>{
    try {
        // fetching role from request and checking the role is student  
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route for User"
            })
        }

        next();  // go to next middleware

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified "
        })
    }
}

// isAdmin  
export const isAdmin = async(req,res,next)=>{
    try {
        // fetching role from request and checking the role is admin  
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a Protected Route for Admin"
            })
        }

        next();  // go to next middleware

    } catch (error) {
        console.log("Isuue in Admin middleware-->",error);
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified "
        })
    }
}
