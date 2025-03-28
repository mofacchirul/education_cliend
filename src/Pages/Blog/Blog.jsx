import React from 'react';
import Blogtan from './Blogtan/Blogran';
import { Link } from 'react-router-dom';
import { MdOutlineCastForEducation } from 'react-icons/md';

const Blog = () => {
    const [blogData,loding]=Blogtan();
    if(loding){
        return  <span className="loading loading-bars loading-xl"></span>  
    }
    
    
    return (
       <div className='max-w-6xl mx-auto py-14'>
         <div>
            <div className="text-center mb-8">
                    <h1 className="text-yellow-500 mx-auto lg:text-2xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-40 lg:w-60 justify-center">
                      <MdOutlineCastForEducation />Blog Now
                    </h1>
                    <h1 className="text-2xl lg:text-4xl font-extrabold">
                    Details About <span className="text-yellow-500">Blog Now</span> Eduka.
                    </h1>
                    <p className="text-gray-600 ">
                    There are many variations of passages available but the majority have suffered alteration in some form by injected humour randomised words which don't look even slightly believable. If you are going to use passage you need sure there anything embarrassing first true generator on the Internet.
                    </p>
                   
                   
                  </div>
                  </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 min-h-screen bg-gray-100">
            {blogData?.map((blog) => (
                <div key={blog._id} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                    <div className="relative">
                        <img src={blog.thumbnail} alt="Blog Thumbnail" className="rounded-lg w-full h-48 object-cover" />
                        <span className="absolute top-2 -right-5 bg-yellow-500 text-white px-3 py-1 text-sm rounded-md">
                            📅 {blog.published_date}
                        </span>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <span>✍️ By {blog.author}</span>
                            <span>💬 03 Comments</span>
                        </div>
                        <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
                        <p className="text-gray-600 mt-1">{blog.description}</p>
                      <Link to={`/blog_detels/${blog._id}`}>
                      <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                            READ MORE →
                        </button>
                      </Link>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
};

export default Blog;