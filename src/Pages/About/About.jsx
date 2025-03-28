import React from 'react';
import links from '../../assets/services/exchange-idea.svg';
import Edukation from '../../assets/services/open-book.svg';
import International from '../../assets/services/global-education.svg';
import { MdOutlineCastForEducation } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="py-20 grid lg:grid-cols-12 items-center  max-w-7xl mx-auto rounded-t-2xl gap-4">
      <div className="lg:flex col-span-7 items-center gap-2.5">
        <div className="flex lg:flex-col gap-2 items-center">
          <img className="rounded-t-3xl w-80 rounded-bl-3xl" src="https://i.ibb.co.com/cKdK3BDV/01-1.jpg" alt="" />
          <div className="px-2 w-96 gap-2 py-2 bg-teal-950 rounded-t-3xl rounded-bl-3xl flex items-center text-white">
            <img className="w-32 h-32 mx-auto" src={links} alt="" />
            <h1 className="text-xl text-white">30 Years Of Quality Service</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center lg:flex-col py-10">
          <img src="https://i.ibb.co.com/dw5Xx3pg/02.jpg" className="lg:w-96 lg:h-96 w-72 h-72 rounded-full p-3 border-4 border-dashed border-y-amber-500" alt="" />
          <img src="https://i.ibb.co.com/N2xBxMZw/03.jpg" className="rounded-tr-3xl lg:w-full w-96 rounded-b-3xl" alt="" />
        </div>
      </div>
      
      <div className='col-span-5'>
        <h1 className="text-yellow-500 lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-48">
          <MdOutlineCastForEducation /> About Us
        </h1>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Our Education System <span className="text-yellow-500">Inspires</span> You More.</h1>
        <p>
          There are many variations of passages available but the majority have suffered alteration
          in some form by injected humour or randomised words which don't look even slightly believable.
        </p>
        
        <div className="flex items-center justify-around py-4">
          <div>
            <img src={Edukation} className="w-20 h-20 rounded-full p-2 bg-teal-950" alt="" />
            <h1 className="text-xl font-bold">Education Services</h1>
            <p>It is a long established fact that a reader will be using content.</p>
          </div>
          <div>
            <img src={International} className="w-20 h-20 rounded-full p-2 bg-teal-950" alt="" />
            <h1 className="text-xl font-bold">International Hubs</h1>
            <p>It is a long established fact that a reader will be using content.</p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg relative">
          <p className="text-gray-700">
            It is a long established fact that a reader will be distracted by the
            content of a page when looking at its reader for the long words layout.
          </p>
          <span className="absolute -mt-1  right-4 lg:text-4xl text-2xl font-bold text-green-600">99</span>
        </div>
        
        <div className="flex items-center justify-between mt-4 ">
          <button className="bg-orange-500  text-white py-2 px-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-950">
            DISCOVER MORE ➜
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-green-700 text-white p-3 rounded-full shadow-lg">
              <FaPhoneAlt className="text-lg" />
            </div>
            <div>
              <p className="text-orange-500 text-sm font-semibold">Call Now</p>
              <p className="text-green-800 text-lg font-bold">+2 123 654 7898</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
