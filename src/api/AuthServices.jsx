import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const login = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, formData);

    const { token, user } = res.data;

    if (!token) {
      throw new Error("Token missing in response");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return { token, user };
  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.message ||
      "Login failed";

    throw new Error(message);
  }
};

// register the suer 
export const register = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/auth/register`, formData);
    return res.data;
  } catch (err) {
    const message =
      err.response?.data?.message ||
      err.message ||
      "Registration failed";

    throw new Error(message);
  }
};

// logoout 
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// get token for the private routes 
export const getToken = () => {
  return localStorage.getItem("token");
};
