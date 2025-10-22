import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryIcon } from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft } from "../utils/Animation";

const JobCategory = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (index, name) => {
      setActiveIndex(index);
      setTimeout(() => setActiveIndex(null), 150);
      navigate(`/all-jobs/${encodeURIComponent(name)}`);
      window.scrollTo(0, 0);
    },
    [navigate]
  );

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-2">
          Popular Job Categories
        </h1>
        <p className="text-green-700 max-w-2xl mx-auto text-sm sm:text-base">
          Discover top job categories tailored to your skills and career goals.
        </p>
      </div>

      {/* Grid of Categories */}
      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6"
      >
        {Array.isArray(categoryIcon) &&
          categoryIcon.map((icon, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onClick={() => handleClick(index, icon.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick(index, icon.name);
                }}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative group bg-white p-5 md:p-6 rounded-2xl border border-gray-100 hover:border-green-300 shadow hover:shadow-xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                  isActive
                    ? "scale-[0.98] bg-green-50 border-green-200 shadow-lg"
                    : ""
                }`}
              >
                <div className="bg-green-50 p-4 rounded-full mb-4 transition-transform group-hover:scale-110 flex items-center justify-center">
                  <img
                    className="w-8 h-8 md:w-10 md:h-10"
                    src={icon.icon}
                    alt={icon.name}
                    title={icon.name}
                    loading="lazy"
                  />
                </div>
                <span className="font-medium text-green-800 text-sm md:text-base">
                  {icon.name}
                </span>
              </motion.div>
            );
          })}
      </motion.div>
    </section>
  );
};

export default JobCategory;
