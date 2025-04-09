import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SecureAxios from '../../Axios/SecureAxios/SecureAxios';

const Google = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axios = SecureAxios();
    const navigate = useNavigate(); 

    const HandleGoole = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axios.post('/user', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Google login success",
                                icon: "success",
                                draggable: true
                            });
                        }
                        navigate('/');
                    });
            });
    };

    return (
        <div>
            <div className='py-3'>
                <button onClick={HandleGoole} className="btn rounded-tl-4xl rounded-br-4xl btn-block text-xl ">
                    <img className='h-10' src='https://i.ibb.co.com/VcjpRTPz/icons8-google-100.png' alt="" /> Google
                </button>
            </div>
        </div>
    );
};

export default Google;
