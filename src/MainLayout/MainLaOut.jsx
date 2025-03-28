import React from 'react';
import Navbar from '../Componet/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Componet/Footer/Footer';


const MainLaOut = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer> 
        </div>
    );
};

export default MainLaOut;