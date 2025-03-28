import React from 'react';
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from 'react-query';


const Manage_Applications = () => {
    const axios =SecureAxios();
    const {data: applycations}=useQuery({
        queryKey:['applycation'],
        queryFn:async ()=>{
            const res= await axios.get('/adminapply');
            return res.data
        }
    })
  
    
    return (
        <div className=' max-w-6xl mx-auto py-10'>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-teal-800 text-white'>
        <th>No</th>
        <th>Name</th>
        <th>email</th>
        <th>Course Name</th>
        <th>Contact Number</th>
       <th>Date</th>
       <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applycations?.map((applycation,index)=>(
            <tr key={applycation._id} className="bg-base-200">
            <th>{index+1}</th>
            <td>{applycation.firstName}</td>
            <td>{applycation.email}</td>
            <td>{applycation.degreeLevel}</td>
            <td>{applycation.contactNumber}</td>
            <td>{applycation.dateOfBirth}</td>
            <td>{applycation.presentAddress}</td>
           
          </tr>
        ))
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Manage_Applications;