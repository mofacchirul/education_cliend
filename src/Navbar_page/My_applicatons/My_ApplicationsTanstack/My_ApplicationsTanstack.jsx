import React, { useContext } from 'react';
import { AuthContext } from '../../../Auth/Provider/Auth';
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from 'react-query';

const My_ApplicationsTanstack = () => {
    const {user}=useContext(AuthContext);
    const axios= SecureAxios()
 const {data:apply=[],refetch}=useQuery({
    queryKey:['apply',user?.email],
    queryFn:async()=>{
        const res= await axios.get(`/apply?email=${user?.email}`)
        return res?.data
    }
 })
 return [apply,refetch]
};

export default My_ApplicationsTanstack;