import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/AuthServices";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    console.log("form data --> ", formData);
    await login(formData);
    toast.success("Login succesfully");
   navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h2>

        <input
          type="text"
          placeholder="Enter your Email"
          required
          name="email"
          value={formData.email}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          value={formData.password}
          onChange={changeHandler}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

<p className="mt-4 text-sm text-gray-600">
  Don’t have an account?
  <Link
    to="/signup"
    className="ml-2 text-indigo-600 font-semibold hover:underline hover:text-indigo-700 transition"
  >
    Sign up
  </Link>
</p>
    </div>
  );
};

export default Login;
