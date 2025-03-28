import React, { useContext, useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import logins from '../../Lottie/login.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Provider/Auth';
import Swal from 'sweetalert2';
import Google from '../Google/Google';
import SecureAxios from '../../Axios/SecureAxios/SecureAxios';
// import SecureAxios from '../../Axios/SecureAxios/SecureAxios';


const Login = () => {
    const [view,setview]=useState(true);
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    const axios = SecureAxios()
    const HandleLogin = (e) => {
     
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value; 
    
      
     
       
      login(email, password)
      .then(result => {
          Swal.fire({
              title: `${result.user.email} logged in successfully!`,
              icon: "success",
              draggable: true,
          });
          const user={
            email:result.user.email
          }
          axios.post('/user',user)
          navigate('/')
      })
      .catch(error => {
          Swal.fire({
              title: "Login Failed",
              text: error.message,
              icon: "error",
              draggable: true,
          });
      });
  };
  
    return (
        <div className="flex flex-col py-10 lg:flex-row-reverse items-center justify-center min-h-screen">
          {/* Lottie Animation */}
          <div className="w-96  hidden lg:block justify-center">
            <Lottie animationData={logins} className="" />
          </div>
    
          {/* Login Form */}
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl p-6">
            <div>
               <h1 className='font-bold text-xl text-center lg:text-5xl text-yellow-500'> Login Now!</h1>
            </div>
            <form className="card-body" onSubmit={HandleLogin}>
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-800  font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
    
              {/* Password Field */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-teal-800  font-semibold">Password</span>
                </label>
                <input
                  type={view ? "password"  : "text"}  
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
               <div>
                <button className='absolute -mt-8 ml-[16rem] text-teal-800 text-lg ' onClick={()=>setview(!view)}> {view  ? <FaRegEyeSlash /> :  <FaEye />  } </button>
               </div>
              </div>
    
    
             
    
              {/* Login Button */}
              <div className="form-control mt-6">
                <button disabled={false} className='uppercase btn-block   btn text-white  bg-yellow-500 hover:bg-teal-800 rounded-tr-4xl rounded-bl-4xl '>Login</button>
              </div>
            </form>
            <div>
            <Google></Google>
          </div>
                  <div className='text-center'>
                          <h3 className='text-xl text-teal-800 font-semibold'>Create your accountt</h3>
                          <p className='text-teal-800'>Have an account? <Link to="/signup" className='underline text-yellow-500'>Resistar in now</Link></p>
                        </div>
    
                 
          </div>
        </div>
      );
};

export default Login;