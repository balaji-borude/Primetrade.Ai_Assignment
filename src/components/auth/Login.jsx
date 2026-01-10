import React, { useState } from 'react'

const Login = () => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    // onchnnge
    function changeHandler(e){
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    // submit handler 
    function submitHandler(e){
        e.preventDefault();

        console.log("form data --> ",formData);

    };


  return (
    <form onSubmit={submitHandler}>

        <h2> Login</h2>

        <input
            type='text'
            placeholder='Enter your Email'
            required
            name="email"
            value={formData.email}
            onChange={changeHandler}
        />
        <input
            type='password'
            placeholder='Enter your password'
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
        />

        <button type='submit' >
            Login
        </button>
    </form>
  )
}

export default Login