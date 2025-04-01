import React from "react";

const Banner = () => {
  return (
    <div
    className="hero min-h-screen w-[320px] md:w-[550px] mx-auto lg:w-full "
    style={{
      backgroundImage: "url(https://i.ibb.co/W4ftgGRs/05-1.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h2 className="lg:text-3xl text-xl md:text-3xl  font-bold">
          Our 20% Offer Running - Join Today For Your Course
        </h2>
        <p className="mt-4">
          There are many variations of passages available, but the majority
          have suffered alteration in some form by injected humor, randomized
          words which don’t look even slightly believable.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
          APPLY NOW →
        </button>
    </div>
  </div>
</div>
  );
};

export default Banner;
