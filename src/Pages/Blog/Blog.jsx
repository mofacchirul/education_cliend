import React from "react";
import { Link } from "react-router-dom";
import Blogtan from './Blogtan/Blogran';
import { MdOutlineCastForEducation } from "react-icons/md";
import Loading from "../../Loding";

const Blog = () => {
    const [blogData, loading] = Blogtan();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!Array.isArray(blogData) || blogData.length === 0) {
        return <p className="text-red-500 text-center">No blogs found.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto py-14">
            <div className="text-center mb-8">
                <h1 className="text-yellow-500 mx-auto lg:text-2xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-40 lg:w-60 justify-center">
                    <MdOutlineCastForEducation /> Blog Now
                </h1>
                <h1 className="text-2xl lg:text-4xl font-extrabold">
                    Details About <span className="text-yellow-500">Blog Now</span> Eduka.
                </h1>
                <p className="text-white">
                    There are many variations of passages available but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-3 min-h-screen items-center ">
                {blogData.map((blog) => (
                    <div key={blog._id} className=" rounded-lg border shadow-lg p-4 max-w-sm">
                        <div className="relative">
                            <img
                                src={blog.thumbnail}
                                alt="Blog Thumbnail"
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <span className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 text-sm rounded-md">
                                📅 {blog.published_date}
                            </span>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <span className="text-white">✍️ By {blog.author}</span>
                                <span className="text-white">💬 03 Comments</span>
                            </div>
                            <h3 className="text-lg text-white font-bold mt-2">{blog.title}</h3>
                            <p className="text-white mt-1">{blog.description}</p>
                            <Link to={`/blog_detels/${blog._id}`}>
                                <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-teal-900 transition">
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
