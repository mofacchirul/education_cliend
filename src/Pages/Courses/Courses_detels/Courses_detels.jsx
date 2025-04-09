import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const data = useLoaderData();

    

    return (
        <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg mt-6">
            <img src={data?.thumbnail} alt={data?.title} className="w-full h-80 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold mt-4">{data?.title}</h1>
            <p className="text-gray-100 mt-2">{data?.description}</p>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Details</h2>
                <p className="text-gray-100 mt-1">{data?.details}</p>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Power of Choice</h2>
                <p className="text-gray-100 mt-1">{data?.power_of_choice}</p>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Course Requirements</h2>
                <ul className="list-disc list-inside text-yellow-600">
                    {data?.course_requirement?.map((req, index) => (
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-semibold">Professional Experience</h2>
                <p className="text-gray-100 mt-1">{data?.professional_experience}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
      {data?.images && data.images.length > 0 ? (
        data.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))
      ) : (
        <p className="text-gray-600">No images available</p>
      )}
    </div>
   <Link to={'/applycation_from'}>
   <button className="btn btn-block mt-3 bg-yellow-500 text-white text-xl lg:text-2xl ">Apply Now</button>
   </Link>
        </div>
    );
};

export default CourseDetails;
