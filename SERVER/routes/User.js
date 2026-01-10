import express from "express";
import { Router } from "express";
import { Login,SignIn } from "../controller/Auth.js"; // controller called 

const router = Router();
console.log("Riuter hits ")
router.post('/login',Login);
router.post('/signin',SignIn);
// router.get('/dummy',Dummy);


export default router;