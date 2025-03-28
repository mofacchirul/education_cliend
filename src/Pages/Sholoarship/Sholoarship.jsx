import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import facility from "../../assets/Scholarship/money.svg";
import Lecturers from "../../assets/Scholarship/teacher.svg";
import Library from "../../assets/Scholarship/library.svg";
import Price from "../../assets/Scholarship/scholarship.svg";

const Scholarship = () => {
  const scholarshipData = [
    {
      id: 1,
      img: facility, // ✅ এখানে সরাসরি পাথ রাখা হয়েছে
      number: 1,
      title: "Scholarship Facility",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      img: Lecturers,
      number: 2,
      title: "Skilled Lecturers",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 3,
      img: Library,
      number: 3,
      title: "Book Library Facility",
      description: "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 4,
      img: Price,
      number: 4,
      title: "Affordable Price",
      description: "It is a long established fact that a reader will be distracted.",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-yellow-500 mx-auto lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-28 lg:w-48 justify-center">
          <MdOutlineCastForEducation /> Features
        </h1>
        <h1 className="text-2xl lg:text-4xl font-extrabold">
          Our Awesome <span className="text-yellow-500">Features</span>
        </h1>
        <p className="text-gray-600">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 gap-6">
        {scholarshipData.map((item) => (
          <div key={item.id} className="bg-white rounded-t-3xl rounded-bl-xl shadow-md  p-6 text-center">
            <img src={item.img} alt={item.title} className="w-20 h-20 lg:w-32 lg:h-32 rounded-full  mx-auto mb-4  p-3 bg-teal-950" />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
