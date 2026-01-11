import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/AuthServices";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  })
  const navigate= useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("submitting the form ==>", formData);
 
    // signup  function call for the
     await register(formData);
    navigate("/")
  };

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={changeHandler}
            className="px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter your name"
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter your email"
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?
        <Link
          to="/"
          className="ml-2 text-indigo-600 font-semibold hover:underline hover:text-indigo-700 transition"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
