import React from 'react';
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from 'react-query';
import { IoIosContacts } from "react-icons/io";
import Swal from 'sweetalert2';
import Loading from '../../../Loding';

const All_users = () => {
    const axios = SecureAxios();
    
    const { data: users, isLoading,refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/user'); // ✅ Added 'await' to resolve the promise
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const HandleDelet=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axios.delete(`/user/${id}`)
            .then(res=>{
               if(res.data.deletedCount > 0){
                refetch()
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
               }
                
            })
            }
          });
          
    }


    const HandleAdmin = (id) => {
       
        
        axios.patch(`/user/${id}`) // Remove `:`
            .then(res => {
             
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User is now an Admin",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch(); // Refresh user data after update
                }
            })
            .catch(error => {
                console.error("Error updating user:", error);
                Swal.fire("Error", "Failed to make user admin", "error");
            });
    };
    





    return (
        <div className="max-w-6xl mx-auto">
            <h1 className=' text-2xl  lg:text-4xl'>All Users</h1>
            <div className="overflow-x-auto rounded-box border py-6 border-base-content/5 bg-base-100">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead className="bg-teal-900 text-white">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping Users */}
                        {
                        
                        users?.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                {
                user.role=== 'admin' ? 'admin' :  <button onClick={()=>HandleAdmin(user._id)} className='text-3xl text-teal-900'>  
                   <IoIosContacts />
                
                </button>
             }
                                </td>
                                <td>
                                    <button onClick={()=>HandleDelet(user._id)} className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-tr-2xl rounded-bl-2xl hover:bg-teal-900">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default All_users;
