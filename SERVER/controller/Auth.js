/* eslint-disable no-undef */
import User from "../module/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Login user
export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const user = await User.findOne({ email });

    // matched password
    const password_matched = await bcrypt.compare(password, user.password);

    // if pasword matched then generate the Token
    if (password_matched) {
      
      const payload = {
        _id: user._id,
        user: user.email,
        role: user.role,
      };
      const JWT_SECRET = process.env.JWT_SECRET;
      if(!JWT_SECRET){
        throw new Error("JWT secret is not defined ")
      }
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });

      // login the user
      return res.status(200).json({
        success: true,
        message: "Login succesfully ",
        token,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Issue in Login the user, please Retry !!",
    });
  }
};

// Create account 
export const SignUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // vallidation
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }

    // check user is email is existing or not if existing not aaloowed to create account
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User is already Exist",
      });
    }

    // password bcrypt karaycha
    const hashedPassword = await bcrypt.hash(password, 10);
    // create user
    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: createdUser,
    });
  } catch (error) {
    console.log("Sign In Error -->", error);
    res.status(500).json({
      success: false,
      message: "Issue in SignIn user, please Retry !!",
    });
  }
};
