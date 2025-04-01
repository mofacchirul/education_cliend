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
        <div className="lg:flex  space-y-2 lg:flex-col gap-2 items-center">
          <img className="rounded-t-3xl w-80 mx-auto rounded-bl-3xl" src="https://i.ibb.co.com/cKdK3BDV/01-1.jpg" alt="" />
          <div className="px-2 w-[320px] lg:w-96 mx-auto gap-2 py-2 bg-teal-950 rounded-t-3xl rounded-bl-3xl flex items-center text-white">
            <img className="w-32 h-32 mx-auto" src={links} alt="" />
            <h1 className="text-xl text-white">30 Years Of Quality Service</h1>
          </div>
        </div>
        <div className="lg:flex gap-2 space-y-2 items-center justify-center lg:flex-col py-10">
          <img src="https://i.ibb.co.com/dw5Xx3pg/02.jpg" className="lg:w-96 lg:h-96 w-72 h-72 mx-auto rounded-full p-3 border-4 border-dashed border-y-amber-500" alt="" />
          <img src="https://i.ibb.co.com/N2xBxMZw/03.jpg" className="rounded-tr-3xl w-[320px] lg:w-96 mx-auto rounded-b-3xl" alt="" />
        </div>
      </div>
      
      <div className='col-span-5'>
  <h1 className="text-yellow-500 text-center lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center justify-center gap-2 lg:w-48 w-32 mx-auto  ">
    <MdOutlineCastForEducation /> About Us
  </h1>
  <h1 className="text-2xl text-center lg:text-4xl font-extrabold">
    Our Education System <span className="text-yellow-500">Inspires</span> You More.
  </h1>
  <p className='  mx-auto text-center'>
    There are many variations of passages available but the majority have suffered alteration
    in some form by injected humour or randomised words which don't look even slightly believable.
  </p>

  <div className="flex items-center w-11/12 mx-auto lg:w-full justify-center py-4 gap-6">
    <div className="text-center">
      <img src={Edukation} className="w-20 h-20 rounded-full p-2 bg-teal-950 mx-auto" alt="" />
      <h1 className="text-xl font-bold">Education Services</h1>
      <p>It is a long established fact that a reader will be using content.</p>
    </div>
    <div className="text-center">
      <img src={International} className="w-20 h-20 rounded-full p-2 bg-teal-950 mx-auto" alt="" />
      <h1 className="text-xl font-bold">International Hubs</h1>
      <p>It is a long established fact that a reader will be using content.</p>
    </div>
  </div>

  <div className="p-4 bg-yellow-500 w-1/2 mx-auto lg:w-full  rounded-lg relative">
    <p className="text-white ">
      It is a long established fact that a reader will be distracted by the content of a page when looking at its reader for the long words layout.
    </p>
    <span className="absolute -mt-1 right-4 lg:text-4xl text-2xl font-bold text-teal-800">99</span>
  </div>

  <div className="flex w-11/12 mx-auto gap-3 items-center justify-between mt-8">
    <button className=" bg-teal-950 mb-3 text-white py-2 px-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-500">
      DISCOVER MORE ➜
    </button>
    <div className="flex items-center gap-3">
      <div className="bg-teal-900 text-white p-3 rounded-full shadow-lg">
        <FaPhoneAlt className="text-lg" />
      </div>
      <div>
        <p className="text-yellow-500 text-sm font-semibold">Call Now</p>
        <p className="text-yellow-500 text-lg font-bold">+2 123 654 7898</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
