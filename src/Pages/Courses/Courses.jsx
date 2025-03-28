import { MdOutlineCastForEducation } from 'react-icons/md';
import Coursestan from './Coursestan/Coursestan';
import { Star, Users, Clock } from "lucide-react";
import { Link } from 'react-router-dom';

const Courses = () => {
  const [course, loading] = Coursestan();

  if (loading) {
    return <p className="text-center py-10">Loading courses...</p>;
  }

  return (
    <div>
      <div className='text-center w-2/3 mx-auto py-10'>
        <h1 className="text-yellow-500 mx-auto text-center lg:text-3xl font-bold border-b-2 border-yellow-500 flex items-center gap-2 w-48">
          <MdOutlineCastForEducation /> About Us
        </h1>
        <h1 className="text-2xl lg:text-4xl font-extrabold">Our Education System <span className="text-yellow-500">Inspires</span> You More.</h1>
        <p>
          There are many variations of passages available but the majority have suffered alteration
          in some form by injected humour or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6">
        {course?.map(item => (
          <div key={item._id} className="max-w-xs rounded-2xl shadow-lg border p-4 bg-white">
            <div className="">
              <img src={item.thumbnail} alt="Course Thumbnail" className="w-full h-40 object-cover rounded-xl" />
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <Users size={16} className="text-orange-500" /> 10 Lessons
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" /> 4.0
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            </div>
            <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
              <span className="flex items-center gap-1">
                <Users size={16} className="text-orange-500" /> 75 Seats
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} className="text-orange-500" /> 4 Years
              </span>
            </div>
            <div className="mt-3 flex justify-end py-2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-lg text-lg font-semibold">
                $750
              </span>
            </div>
           <Link to={`/courses_detels/${item._id}`}  >  <button className='btn btn-block bg-teal-800 text-white'>Course Detels</button> </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
