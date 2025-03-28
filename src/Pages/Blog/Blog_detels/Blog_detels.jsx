import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const data = useLoaderData();

    if (!data) {
        return <p className="text-center text-red-500 mt-10">Error: No data available.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <img src={data.thumbnail} alt={data.title} className="w-full h-96 object-cover rounded-lg" />

            <h1 className="text-3xl font-bold mt-6">{data.title}</h1>
            <p className="text-gray-500 mt-2">By {data.author} | {new Date(data.published_date).toDateString()}</p>

            <p className="mt-4 text-lg text-gray-700">{data.description}</p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Details</h2>
                <p className="text-gray-600 mt-2">{data.details}</p>
            </div>

            {/* Check if data.img exists and is an array */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.isArray(data.img) && data.img.length > 0 ? (
                    data.img.map((image, index) => (
                        <img key={index} src={image} alt={`Blog Image ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
                    ))
                ) : (
                    <p className="text-gray-500">No images available.</p>
                )}
            </div>

            <Link to={'/applycation_from'}>
                <button className='btn btn-block bg-yellow-500 text-white my-4 rounded-tr-2xl rounded-bl-2xl hover:bg-teal-700'>Apply Now</button>
            </Link>
        </div>
    );
};

export default BlogDetails;
