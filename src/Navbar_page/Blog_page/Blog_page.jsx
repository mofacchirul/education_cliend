import { Link } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Typewriter from 'typewriter-effect';
import { FaAnglesRight } from "react-icons/fa6";

const Blog_page = () => {
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
                                strings: ['Our Blog'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></span>



                    </h1>
                        <h1 className='flex items-center gap-3 text-xl  '><Link  to={'/'}> Home</Link> <FaAnglesRight /> <span className='text-'> Our Blog</span> </h1>
                    </div>
                </div>
            </div>
           <Blog></Blog>
        </div>
    );
};

export default Blog_page;