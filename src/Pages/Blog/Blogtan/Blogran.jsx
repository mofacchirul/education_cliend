import React from 'react';
import { useQuery } from 'react-query';
import Publicaxios from '../../../Axios/Publicaxios/Publicaxios';

const Blogtan = () => {
    const axios = Publicaxios()
    const {data:blogData , isloding:loding}=useQuery({
        queryKey:['blog'],
        queryFn:async()=>{
            const res = await axios.get('/blog');
            return res.data;
        }
    })
    return [blogData,loding]
};

export default Blogtan;