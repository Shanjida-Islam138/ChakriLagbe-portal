import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import JobCard from "./JobCard";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/Animation";

const FeaturedJob = () => {
  const { jobs, jobLoading } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section className="mt-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-2">
          Featured Jobs
        </h1>
        <p className="text-green-700 max-w-2xl mx-auto text-sm sm:text-base">
          Know your worth and find the job that suits your career aspirations
        </p>
      </div>

      {jobLoading ? (
        <div className="flex items-center justify-center mt-10">
          <Loader />
        </div>
      ) : !Array.isArray(jobs) || jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs found</p>
      ) : (
        <>
          {/* Jobs Grid - cards visible immediately with shadow */}
          <motion.div
            variants={SlideUp(0)} // immediate visibility
            initial="visible"
            animate="visible"
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {[...jobs]
              .reverse()
              .slice(0, 6)
              .map((job, index) => (
                <JobCard
                  job={job}
                  key={job.id || index}
                  className="rounded-2xl shadow-md transition-all duration-300" // subtle shadow added
                />
              ))}
          </motion.div>

        <div className="text-center mt-12">
  <button
    onClick={() => {
      navigate("/all-jobs/all");
      window.scrollTo(0, 0);
    }}
    className="bg-green-600 text-white px-8 py-3 rounded-2xl hover:bg-green-700 hover:scale-105 shadow-md transition-all duration-300 cursor-pointer font-semibold"
  >
    See More
  </button>
</div>
        </>
      )}
    </section>
  );
};

export default FeaturedJob;
