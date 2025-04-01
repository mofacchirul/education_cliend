import React, { useContext } from 'react';
import { AuthContext } from '../../../Auth/Provider/Auth';
import UseAdmin from './UseAdmin';
import { LuNotebookPen } from "react-icons/lu";
import { TbDiabolo } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import Loading from '../../../Loding';
const Admin_home = () => {
  const {user}=useContext(AuthContext)
  const [admin_status,loading]= UseAdmin()
  if(loading){
    return <Loading></Loading>
  }

  
    return (
        <div className=" flex-col items-cente  shadow-2xl rounded-3xl p-10  ">
            <div className=" w-full mx-auto max-w-5xl text-center">
                <h1 className="lg:text-4xl text-xl font-extrabold text-gray-100 flex gap-0.5 items-center text-center justify-center mb-6">Welcome, 
                    <span>
                        {user ? <h1>{user.displayName}</h1> : "Guest" }
                    
                    </span> 
                    
                    👑</h1>
              
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
             <div className='px-7 font-bold flex items-center gap-1 text-xl lg:text-2xl py-10 text-white bg-yellow-500 rounded-4xl text-center'>
             <LuNotebookPen />  Apply Count : 
           
           
             <p>{admin_status ? admin_status.applyCount : "Loading..."}</p>

             </div>
             <div className='px-7 font-bold flex items-center gap-1 text-xl lg:text-2xl py-10 text-white bg-teal-900 rounded-4xl text-center'>
             <TbDiabolo />      Blog Count : 
           
       
             <p>{admin_status ? admin_status.blogCount : "Loading..."}</p>

             </div>
             <div className='px-7 font-bold flex items-center gap-1 text-xl lg:text-2xl py-10 text-white bg-yellow-500 rounded-4xl text-center'>
             <FaUserFriends />         User Count : 
           
        
             <p>{admin_status ? admin_status.userCount : "Loading..."}</p>

             </div>
             <div className='px-7 font-bold flex items-center gap-1 text-xl lg:text-2xl py-10 text-white bg-teal-900 rounded-4xl text-center'>
            
             <MdEvent />     event Count : 
       
             <p>{admin_status ? admin_status.eventCount : "Loading..."}</p>

             </div>
             <div className='px-7 font-bold flex items-center gap-1 text-xl lg:text-2xl py-10 text-white bg-yellow-500 rounded-4xl text-center'>
             <SiCoursera />      Course Count : 
           
          
             <p>{admin_status ? admin_status.courseCount : "Loading..."}</p>

             </div>
               </div>
        </div>
    );
};


export default Admin_home;