
import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

const teamMembers = [
  {
    name: "Angela T. Vigil",
    designation: "Associate Professor",
    image: "https://i.ibb.co.com/JwzFPdTd/01-1.jpg",
    bgColor: "bg-gray-100",
  },
  {
    name: "Frank A. Mitchell",
    designation: "Associate Professor",
    image: "https://i.ibb.co.com/q3PYGg4p/02.jpg",
    bgColor: "bg-orange-100",
  },
  {
    name: "Susan D. Lunsford",
    designation: "CEO & Founder",
    image: "https://i.ibb.co.com/vvdqMLQH/03.jpg",
    bgColor: "bg-gray-200",
  },
  {
    name: "Dennis A. Pruitt",
    designation: "Associate Professor",
    image: "https://i.ibb.co.com/fVrRVPcV/04.jpg",
    bgColor: "bg-orange-200",
  }
];

const TeamCard = ({ member }) => {
  return (
   <div>

    

     <div className={`rounded-2xl p-4 shadow-lg ${member.bgColor} text-center`}> 
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto  w-full mb-4"
      />
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.designation}</p>
    </div>
   </div>
  );
};

const TeamGrid = () => {
  return (
   <div>
     <div className='text-center w-1/2 mx-auto py-10'>
    <h1 className="text-yellow-500 mx-auto text-center lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-36 lg:w-60">
      <MdOutlineCastForEducation /> Our Teachers
    </h1>
    <h1 className="text-2xl lg:text-4xl font-extrabold">Meet With Our <span className="text-yellow-500">Teachers</span> </h1>
    <p>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
  </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
   </div>
  );
};

export default TeamGrid;
