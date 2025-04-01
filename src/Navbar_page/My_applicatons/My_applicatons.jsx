import React from 'react';
import My_ApplicationsTanstack from './My_ApplicationsTanstack/My_ApplicationsTanstack';
import Swal from 'sweetalert2';
import SecureAxios from '../../Axios/SecureAxios/SecureAxios';
import Loading from '../../Loding';

const My_applicatons = () => {
    const [apply,refetch,loading]=My_ApplicationsTanstack()
    if (loading) {
        return <Loading></Loading>;
    }
    if (!Array.isArray(apply) || apply.length === 0) {
        return <p className="text-center text-red-500">No courses found.</p>;
      }
const axios=SecureAxios()
    const Handledelet=(id)=>{
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
         
          axios.delete(`/apply/${id}`)
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

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-center">My Applications</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                    <thead>
                        <tr className="bg-teal-800 text-white text-left">
                            <th className="border p-2">No</th>
                            <th className="border p-2">Photo</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Course Level</th>
                            <th className="border p-2">Program Type</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apply?.map((app,index) => (
                            <tr key={app._id} className="text-center border hover:bg-gray-100 transition">
                               <td>
                                {index+1}
                               </td>
                                <td className="border p-2">
                                    <img src={app.studentPhoto} alt="Profile" className="h-10 w-10 md:h-12 md:w-12 rounded-full mx-auto" />
                                </td>
                                <td className="border p-2">{app.firstName} {app.lastName}</td>
                                <td className="border p-2">{app.degreeLevel}</td>
                                <td className="border p-2">{app.programType}</td>
                                <td className="border p-2 font-semibold text-green-600">{app.currentStatus}</td>
                                <td className="">
                                  
                                    <button onClick={()=>Handledelet(app._id)} className="bg-red-500 text-white px-3 py-1 rounded text-xs md:text-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_applicatons;