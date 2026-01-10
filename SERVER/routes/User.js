import express from "express";
import { Router } from "express";
import { SignIn,SignUp } from "../controller/Auth.js"; // controller called 

const router = Router();
console.log("Riuter hits ")
router.post('/signin',SignIn);
router.post('/signup',SignUp);
// router.get('/dummy',Dummy);


export default router;