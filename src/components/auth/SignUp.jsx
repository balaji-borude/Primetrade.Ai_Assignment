import React, { useState } from 'react'

const SignUp = () => {
    const[formData,setFormData] = useState({
         name:"",
        email:"",
        password:"",
        role:""
    });

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log("submiting the form ==>", formData);
    };

    const changeHandler=(e)=>{
        setFormData((prevdata)=>({
            ...prevdata,
            [e.target.name]:e.target.value
        }));

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                name='name'
                id='name'
                value={formData.name}
                onChange={changeHandler}
                placeholder='Enter Your Name'

            />
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Your Email '

            />
 
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                name='password'
                id='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Your password '

            />

            <button type='submit'>
                SignUp
            </button>
 

        </form>
    </div>
  )
}

export default SignUp