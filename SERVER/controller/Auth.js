import User from "../module/user";
import User from "../module/user";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const Dummy = (req, res) => {
  const data = "this is data ";
  res.json({
    success: true,
    message: "data fetched ",
    data,
  });
};
// Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if(!email || !password){
        return res.status(403).json({
            success:false,
            message:"All fields are required "
        })
    };

    const user = await User.find({email});

    // matched password
    const password_matched = bcrypt.compare(password,user.password);

    // if pasword matched then generate the Token 
    if(password_matched){

        const payload={
            _id:user._id,
            user:user.email,
            role:user.role
        };
        const JWT_SECRET = process.env.JWT_SECRET;

        const token = jwt.sign(payload,JWT_SECRET,{expiresIn:"30d"});

        // login the user
    }

    return res.status(200).json({
        success:true,
        message:"Login succesfully ",
        token
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Issue in Login the user, please Retry !!",
    });
  }
};

// SignIn
export const SignIn = async (req, res) => {
  try {
    const { name, email, password,role } = req.body;

    // vallidation
    if (!name || !email || !password || !role) {
      res.status(403).json({
        success: false,
        message: "All fields are Required",
      });
    }

    // check user is email is existing or not if existing not aaloowed to create account
    const existing_user = await User.find({ email });
    if (existing_user) {
      return res.status(409).json({
        success: false,
        message: "User is already Exist",
      });
    }

    // password bcrypt karaycha
    const hashedPassword = bcrypt.hash(password, 10);
    if (hashedPassword) {
      // create user
      let created_User = await User.create({
        name,
        email,
        password:hashedPassword,
        role
      });
      // response send
      return res.status(201).json({
        success: true,
        message: "User is Created Succesfully",
        created_User,
      });

    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Issue in SignIn user, please Retry !!",
    });
  }
};
