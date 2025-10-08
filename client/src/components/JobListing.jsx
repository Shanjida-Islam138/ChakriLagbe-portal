import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations(
      (prev) =>
        prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation = (job) =>
      selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 px-4">
        <div
          className={`bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-2xl transition-all duration-500 ${
            showFilter ? "max-lg:block" : "max-lg:hidden"
          }`}
        >
          {/* Current Search */}
          {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Current Search</h3>
              <div className="flex flex-wrap gap-2">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-medium shadow hover:scale-105 transition-transform cursor-pointer">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      src={assets.cross_icon}
                      alt="clear"
                      className="w-4 h-4"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-100 to-red-200 text-red-800 font-medium shadow hover:scale-105 transition-transform cursor-pointer">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      src={assets.cross_icon}
                      alt="clear"
                      className="w-4 h-4"
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Toggle Filter Button */}
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="lg:hidden mb-4 w-full py-2 rounded-full bg-gradient-to-r from-[#00A88E] to-[#007a6e] text-white font-semibold shadow-lg hover:from-[#007a6e] hover:to-[#00A88E] transition-all duration-300"
          >
            {showFilter ? "Close Filters" : "Show Filters"}
          </button>

          {/* Category Filter */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3">Search by Categories</h4>
            <ul className="flex flex-col gap-3">
              {JobCategories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:text-[#00A88E] transition-all duration-300"
                >
                  <input
                    className="scale-125 accent-[#00A88E] cursor-pointer"
                    type="checkbox"
                    onChange={() => handleCategoryChange(category)}
                    checked={selectedCategories.includes(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Location Filter */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Search by Location</h4>
            <ul className="flex flex-col gap-3">
              {JobLocations.map((location, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:text-[#00A88E] transition-all duration-300"
                >
                  <input
                    className="scale-125 accent-[#00A88E] cursor-pointer"
                    type="checkbox"
                    onChange={() => handleLocationChange(location)}
                    checked={selectedLocations.includes(location)}
                  />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-semibold text-3xl mb-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8 text-gray-600">
          Find the job you’ve been looking for at top companies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredJobs
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              className="p-2 rounded-full hover:bg-gray-200 transition-all"
            >
              <img src={assets.left_arrow_icon} alt="prev" className="w-5 h-5" />
            </button>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-[#00A88E] to-[#007a6e] text-white shadow-lg"
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  } transition-all duration-300`}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() =>
                setCurrentPage(
                  Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6))
                )
              }
              className="p-2 rounded-full hover:bg-gray-200 transition-all "
            >
              <img
                src={assets.right_arrow_icon}
                alt="next"
                className="w-5 h-5 "
              />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
