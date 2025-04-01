import Typewriter from 'typewriter-effect';
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiClock2, CiLocationOn } from 'react-icons/ci';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Contack_page = () => {
    return (
        <div>
            <div
                className="hero min-h-[350px] relative"
                style={{
                    backgroundImage: "url(https://i.ibb.co/yc3wmkV1/slider-3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Linear Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black "></div>

                {/* Content */}
                <div className="hero-content text-white text-center relative z-10">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold"></h1>
                        <h1 className="lg:text-3xl text-2xl font-bold flex gap-2"> <span className='uppercase text-transparent  text-bg-clip  bg-clip-text bg-gradient-to-r from-yellow-500  to-pink-600'>
                        <Typewriter

                            options={{
                                strings: ['Contact Us'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
                        <h1 className='flex items-center gap-3 text-xl  '><Link  to={'/'}> Home</Link> <FaAnglesRight /> <span className='text-'> Contact Us</span> </h1>
                    </div>
                </div>
            </div>
                

                <div className='max-w-5xl  py-14 text-center mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2.5'>
                    <div className=' shadow-2xl border p-2 rounded-tr-4xl rounded-bl-4xl'>
                        <h1 className=' flex items-center justify-center p-4 mx-auto'>
                        <p className='   bg-teal-800  text-white w-20 h-20 flex items-center justify-center  rounded-full text-3xl' > <CiLocationOn /> </p>
                        </h1>
                        <h3 className='text-xl font-semibold'>Office Address</h3>
                        <p>25/B Milford, New York, USA</p>
                    </div>
                    <div className=' shadow-2xl border p-2 rounded-tr-4xl rounded-bl-4xl'>
                        <h1 className=' flex items-center justify-center p-4 mx-auto'>
                        <p className='   bg-teal-800  text-white w-20 h-20 flex items-center justify-center  rounded-full text-3xl' > <IoCall /> </p>
                        </h1>
                        <h3 className='text-xl font-semibold'>Call Us</h3>
                        <p>+2 123 4565 789</p>
                    </div>
                    <div className=' shadow-2xl border p-2 rounded-tr-4xl rounded-bl-4xl'>
                        <h1 className=' flex items-center justify-center p-4 mx-auto'>
                        <p className='   bg-teal-800  text-white w-20 h-20 flex items-center justify-center  rounded-full text-3xl' > <MdEmail  /> </p>
                        </h1>
                        <h3 className='text-xl font-semibold'>Email Us</h3>
                        <p>info@example.com</p>
                    </div>
                    <div className=' shadow-2xl border p-2 rounded-tr-4xl rounded-bl-4xl'>
                        <h1 className=' flex items-center justify-center p-4 mx-auto'>
                        <p className='   bg-teal-800  text-white w-20 h-20 flex items-center justify-center  rounded-full text-3xl' > <CiClock2  /> </p>
                        </h1>
                        <h3 className='text-xl font-semibold'>Open Time</h3>
                        <p>Mon - Sat (10.00AM - 05.30PM)</p>
                    </div>
                   
                </div>




                <div className="flex max-w-5xl mx-auto flex-wrap items-center justify-center min-h-screen ">
      <div className=" lg:flex rounded-lg shadow-lg p-8 max-w-4xl  w-full">
        {/* Left Image Section */}
        <div className="w-1/2 mx-auto">
          <img
            src="https://i.ibb.co.com/RGqgj659/01.jpg"
            alt="Students"
            className="rounded-lg object-cover  mx-auto h-full"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-100 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>

          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Write Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center space-x-2">
              <span>SEND MESSAGE</span>
              <span>✈️</span>
            </button>
          </form>
        </div>
      </div>
    </div>


   
    <div className="max-w-5xl mx-auto h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606199.4433364025!2d-74.46626380729172!3d40.72755410657818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1741238856075!5m2!1sen!2sbd"
        width="600"
        height="450"
        style={{ border: "0" }} // Correct JSX format
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

        </div>
    );
};

export default Contack_page;