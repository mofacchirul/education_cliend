
import React from "react";
// import backgroundImage from "../../assets/Educations/slider-3.jpg"; // Ensure this image is in your project folder

const stats = [
  { id: 1, icon: "📖", value: 500, label: "Total Courses" },
  { id: 2, icon: "🎓", value: 1900, label: "Our Students" },
  { id: 3, icon: "👨‍🏫", value: 750, label: "Skilled Lecturers" },
  { id: 4, icon: "🏆", value: 30, label: "Win Awards" },
];

const EducationStats = () => {
  return (
  <div className="">
     <div
  className="hero  min-h-screen bg-fixed"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/rKsWmFzj/slider-3.jpg)",
  }}>
  <div className="absolute inset-0  bg-opacity-60"></div>
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-yellow-500 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-2 relative"
          >
            <span className="text-5xl">{stat.icon}</span>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-lg">+ {stat.label}</p>
          </div>
        ))}
      </div>
</div>
  </div>
  );
};

export default EducationStats;
