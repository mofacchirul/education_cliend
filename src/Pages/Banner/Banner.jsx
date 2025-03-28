import React from "react";

const Banner = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/W4ftgGRs/05-1.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h2 className="text-3xl font-bold">
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
