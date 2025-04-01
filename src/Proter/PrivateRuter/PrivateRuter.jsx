import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/Provider/Auth';
import Loading from '../../Loding';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRuter = ({children}) => {
    const {loding,user }=useContext(AuthContext)
    const location = useLocation();
    if(loding){
        return <Loading></Loading>
    }
    if(user){
       return children;
    }
    return <Navigate  to="/login" state={{from:location}} ></Navigate>
};

export default PrivateRuter;