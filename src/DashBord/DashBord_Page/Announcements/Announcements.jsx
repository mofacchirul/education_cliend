import React from 'react';
import SecureAxios from '../../../Axios/SecureAxios/SecureAxios';
import { useQuery } from 'react-query';

const Announcements = () => {
  const axios = SecureAxios();
  const { data: announcements = [] } = useQuery({
    queryKey: ['Announcements'],
    queryFn: async () => {
      const res = await axios.get('/announcements');
      return res.data;
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center  mb-6">Latest
         <span className='text-yellow-500 ml-3  '>
         Announcements
        </span></h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {announcements.map(announcement => (
          <div key={announcement._id} className="bg-white shadow-lg rounded-lg p-6   border-2">
             <h5 className='text-center'>
                
             </h5>
            <h3 className="text-2xl text-teal-800 font-semibold mb-2">{announcement.title}</h3>
            <p className="text-xl font-semibold mb-1">Category: {announcement.category}</p>
            <p className="text-gray-700 mb-3">{announcement.description}</p>
            <p className="text-sm  text-yellow-500">Date: {new Date(announcement.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
