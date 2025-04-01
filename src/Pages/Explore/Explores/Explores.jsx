import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import ProgressSection from "../Exploreanimation/Exploreanimation";

const Explores = () => {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/MkZTfc5k/slider-3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl px-6">
        {/* Left Side - Form */}
        <div className="flex-1">
          <div className="max-w-lg mt-3 lg:mt-0 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-teal-950 text-white p-6">
              <h2 className="text-2xl font-bold">Start Your Enrollment</h2>
              <p className="text-sm mt-1">
                We are variations of passages that have suffered.
              </p>
            </div>

            {/* Form Section */}
            <div className="p-6">
              <form className="space-y-4">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 outline-none focus:ring-2 focus:ring-orange-400"
                />

                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 outline-none focus:ring-2 focus:ring-orange-400"
                />

                {/* Course Selection */}
                <select className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 outline-none focus:ring-2 focus:ring-orange-400">
                  <option>Choose Course</option>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Data Science</option>
                </select>

                {/* Message Textarea */}
                <textarea
                  placeholder="Type Message"
                  className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600 outline-none focus:ring-2 focus:ring-orange-400 h-28 resize-none"
                ></textarea>

                {/* Submit Button */}
                <button className="w-full bg-teal-950 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300">
                  ENROLL NOW →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Side - About Us Section */}
        <div className="flex-1 mb-3 text-center lg:text-left">
          <h1 className="text-yellow-500 text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 justify-center lg:justify-start w-48 mx-auto lg:mx-0">
            <MdOutlineCastForEducation /> About Us
          </h1>
          <h1 className="text-2xl text-white lg:text-4xl font-extrabold mt-4">
            Our Education System <span className="text-yellow-500">Inspires</span> You More.
          </h1>
          <p className="mt-4 text-yellow-500">
            There are many variations of passages available but the majority have suffered alteration
            in some form by injected humour or randomised words which don't look even slightly believable.
          </p>
          <div className="mt-6">
            <ProgressSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explores;
