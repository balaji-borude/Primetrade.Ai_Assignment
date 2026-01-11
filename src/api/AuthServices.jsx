import axios from 'axios';
const BASE_URL=import.meta.env.VITE_BASE_URL;

export const Login = async (formData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/auth`,formData)
    } catch (error) {
        
    }
}