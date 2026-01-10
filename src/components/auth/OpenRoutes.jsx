import { Navigate } from "react-router";

const OpenRoutes = ({children}) => {

    // const token = localStorage.getItem('token');
     let token;

    if(token==null){
        return children;
    }else{
        <Navigate to="/dashboard"/>
    }
}

export default OpenRoutes