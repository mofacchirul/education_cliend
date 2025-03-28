import { motion } from "framer-motion";

const ProgressSection = () => {
  return (
    <div className="bg-yellow-500 p-8 rounded-lg w-96 mx-auto">
      {/* OUR STUDENTS */}
      <div className="mb-4">
        <div className="flex justify-between text-white text-sm font-semibold mb-1">
          <span>OUR STUDENTS</span>
          <span>85%</span>
        </div>
        <div className="w-full bg-white rounded-full h-2 relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "85%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-2 bg-orange-500 rounded-full"
          />
        </div>
      </div>

      {/* OUR TEACHERS */}
      <div className="mb-4">
        <div className="flex justify-between text-white text-sm font-semibold mb-1">
          <span>OUR TEACHERS</span>
          <span>65%</span>
        </div>
        <div className="w-full bg-white rounded-full h-2 relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-2 bg-orange-500 rounded-full"
          />
        </div>
      </div>

      {/* OUR COURSES */}
      <div className="mb-4">
        <div className="flex justify-between text-white text-sm font-semibold mb-1">
          <span>OUR COURSES</span>
          <span>75%</span>
        </div>
        <div className="w-full bg-white rounded-full h-2 relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-2 bg-orange-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
