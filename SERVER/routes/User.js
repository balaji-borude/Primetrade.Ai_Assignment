import express from "express";
import { Login,SignIn,Dummy } from "../controller/Auth"; // controller called 

const router = express();

router.post('/login',Login);
router.post('/signin',SignIn);
router.get('/dummy',Dummy);


export default router;