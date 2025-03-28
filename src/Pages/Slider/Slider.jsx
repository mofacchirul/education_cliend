import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typewriter from 'typewriter-effect';


const slides = [
  {
    id: 1,
    title: "Learn Anytime, Anywhere",
    description: "Access high-quality education from the comfort of your home.",
    image: "https://i.ibb.co/1Jj6JXLg/slider-1.jpg",
  },
  {
    id: 2,
    title: "Expert Instructors",
    description: "Learn from industry-leading professionals and certified educators.",
    image: "https://i.ibb.co/pj0kcMPH/slider-2.jpg",
  },
  {
    id: 3,
    title: "Hands-on Learning",
    description: "Enhance your skills with practical projects and real-world applications.",
    image: "https://i.ibb.co/GvqXT1yb/slider-3.jpg",
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h1 className="lg:text-3xl text-2xl font-bold flex gap-2">
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-teal-400 to-yellow-500">
              <Typewriter
    key={slides[current].id} // Forces re-render when the slide changes
    options={{
        strings: [`${slides[current].title}`],
        autoStart: true,
        loop: false,
    }}
/>

              </span>
            </h1>
            <p className="text-sm">{slides[current].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
