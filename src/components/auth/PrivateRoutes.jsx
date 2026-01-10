import React from 'react'
import { Navigate } from 'react-router';


const PrivateRoutes = ({children}) => {
    const token = localStorage.getItem('token');

    if(token != null){
        return children
    }else{
        return <Navigate to='/login'/>
    }
}

export default PrivateRoutes