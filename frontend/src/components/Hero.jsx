import React, { useContext, useRef } from "react";
import { Search, MapPin } from "lucide-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/Animation";

const Hero = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);

    if (titleRef.current.value || locationRef.current.value) {
      navigate("/all-jobs/all");
    }
  };

 return (
    <section className="relative">
      {/* Space below navbar */}
      <div className="h-20 w-full"></div>

      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Background image layer (blur applied here only) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-474974.jpg?w=740')",
            filter: "brightness(70%) blur(3px)", // blur only background
            zIndex: 0,
          }}
        ></div>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        {/* Foreground content (no blur) */}
        <div className="relative z-[2] text-center max-w-2xl mx-auto px-6 md:px-20 pt-16 pb-20">
          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight sm:leading-snug text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            variants={SlideUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            Connecting Dreams to Opportunities
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mb-10 text-sm sm:text-base text-green-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
            variants={SlideUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            Your next big career move starts right here — explore the best job
            opportunities and take the first step toward your future!
          </motion.p>

          {/* Search Form */}
          <motion.form
            onSubmit={searchHandler}
            className="bg-white rounded-lg shadow-lg p-4 sm:p-3 flex flex-col sm:flex-row gap-4 sm:gap-2 items-stretch sm:items-center w-full"
            variants={SlideUp(0.5)}
            initial="hidden"
            animate="visible"
          >
            {/* Job Title Input */}
            <div className="flex items-center border border-green-300 rounded-md px-3 py-2 md:py-2.5 bg-white w-full">
              <Search className="text-green-500 mr-2 shrink-0" />
              <input
                type="text"
                name="job"
                placeholder="Title"
                aria-label="Title"
                autoComplete="on"
                className="w-full outline-none text-sm bg-transparent placeholder-green-400"
                ref={titleRef}
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center border border-green-300 rounded-md px-3 py-2 md:py-2.5 bg-white w-full">
              <MapPin className="text-green-500 mr-2 shrink-0" />
              <input
                type="text"
                name="location"
                placeholder="Location"
                aria-label="Location"
                autoComplete="on"
                className="w-full outline-none text-sm bg-transparent placeholder-green-400"
                ref={locationRef}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 md:py-3 px-6 rounded-md transition text-sm shadow-md"
            >
              Search
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Hero;