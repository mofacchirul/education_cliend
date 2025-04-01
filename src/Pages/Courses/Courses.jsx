import { MdOutlineCastForEducation } from 'react-icons/md';
import Coursestan from './Coursestan/Coursestan';
import { Star, Users, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const Courses = () => {
  const [course, loading] = Coursestan();
  console.log(course);
  

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
}

  if (!Array.isArray(course) || course.length === 0) {
    return <p className="text-center text-red-500">No courses found.</p>;
  }

  return (
    <div>
      <div className='text-center w-2/3 mx-auto py-10'>
        <h1 className="text-yellow-500 mx-auto text-center lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-48">
          <MdOutlineCastForEducation /> About Us
        </h1>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Our Education System <span className="text-yellow-500">Inspires</span> You More.</h1>
        <p>
          There are many variations of passages available but the majority have suffered alteration.
        </p>
      </div>
      <div className="grid  grid-cols-1 place-items-center items-center md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto lg:max-w-5xl gap-6">
        {course.map(item => (
          <div key={item._id} className="max-w-xs   shadow-lg border rounded-4xl p-4 text-white">
            <img src={item.thumbnail || "default-image.jpg"} alt="Course Thumbnail" className="w-full h-40 object-cover rounded-xl" />
            <div className="mt-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <Users size={16} className="text-yellow-500 " />
                   <p className='text-white'>
                  {item.lessons || "N/A"} Lessons
                    </p> 
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" /> <p className='text-white'>
                  {item.rating || "N/A"}
                  </p>
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            </div>
            <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
              <span className="flex items-center gap-1">
                <Users size={16} className="text-yellow-500 " /> 
                <p className='text-white'>
                {item.seats || "N/A"} Seats
                </p>
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} className="text-yellow-500 " /> 
                <p className='text-white'>
                {item.years || "N/A"} Years
                </p>
              </span>
            </div>
            <div className="mt-3 flex justify-between py-2">
              <span className="bg-yellow-500 text-white px-4 py-1 rounded-lg text-lg font-semibold">
               <p className='text-white'>
               ${item.price || "N/A"}
               </p>
              </span>
              <Link to={`/courses_details/${item._id}`}>
                <button className="btn bg-teal-800 text-white">Course Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

