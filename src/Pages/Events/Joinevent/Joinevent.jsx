import React from 'react';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';

const Joinevent = () => {
    const data = useLoaderData();
    return (
        <div>
             <div className='text-center w-1/2 mx-auto py-10'>
                <h1 className="text-yellow-500 mx-auto text-center lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-48">
                  <MdOutlineCastForEducation /> Events
                </h1>
                <h1 className="text-2xl lg:text-4xl font-extrabold">Our Upcoming Events <span className="text-yellow-500">Events</span> </h1>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
              </div>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img src={data.thumbnail} alt={data.event_title} className="w-full h-64 object-cover rounded-md" />
            
            <h1 className="text-3xl font-bold mt-4">{data.event_title}</h1>
            <p className="text-gray-600 mt-2">{data.event_description}</p>
            
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Event Details</h2>
                <p className="text-gray-700 mt-2">{data.event_details}</p>
            </div>
            
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Why Join?</h2>
                <p className="text-gray-700 mt-2">{data.power_of_choice}</p>
            </div>
            
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Requirements</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                    {data.event_requirement.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Industry Experts</h2>
                <p className="text-gray-700 mt-2">{data.professional_experience}</p>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
                {data.images.map((image, index) => (
                    <img key={index} src={image} alt={`Event Image ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Joinevent;
