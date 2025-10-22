import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { JobCategories, JobLocations } from "../assets/assets";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import { slideRigth, SlideUp } from "../utils/Animation";

function AllJobs() {
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const {
    jobs,
    searchFilter,
    setSearchFilter,
    setIsSearched,
    isSearched,
    fetchJobsData,
  } = useContext(AppContext);

  const { category } = useParams();
  const navigate = useNavigate();

  const jobsPerPage = 6;

  const [searchInput, setSearchInput] = useState({
    title: "",
    location: "",
    selectedCategories: [],
    selectedLocations: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchJobsData();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!jobs?.length) return;

    let filtered = [...jobs];

    if (category !== "all") {
      filtered = filtered.filter(
        (job) => job.category.toLowerCase() === category.toLowerCase()
      );
    }

    setJobData(filtered);
    setSearchInput({
      title: isSearched ? searchFilter.title : "",
      location: isSearched ? searchFilter.location : "",
      selectedCategories: [],
      selectedLocations: [],
    });

    setCurrentPage(1);
  }, [category, jobs, isSearched, searchFilter]);

  useEffect(() => {
    let results = [...jobData];

    if (searchInput.title.trim()) {
      results = results.filter((job) =>
        job.title.toLowerCase().includes(searchInput.title.trim().toLowerCase())
      );
    }

    if (searchInput.location.trim()) {
      results = results.filter((job) =>
        job.location
          .toLowerCase()
          .includes(searchInput.location.trim().toLowerCase())
      );
    }

    if (searchInput.selectedCategories.length > 0) {
      results = results.filter((job) =>
        searchInput.selectedCategories.includes(job.category)
      );
    }

    if (searchInput.selectedLocations.length > 0) {
      results = results.filter((job) =>
        searchInput.selectedLocations.includes(job.location)
      );
    }

    setFilteredJobs(results);
    setCurrentPage(1);
  }, [jobData, searchInput]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (cat) => {
    setSearchInput((prev) => {
      const updated = prev.selectedCategories.includes(cat)
        ? prev.selectedCategories.filter((c) => c !== cat)
        : [...prev.selectedCategories, cat];
      return { ...prev, selectedCategories: updated };
    });
  };

  const handleLocationToggle = (loc) => {
    setSearchInput((prev) => {
      const updated = prev.selectedLocations.includes(loc)
        ? prev.selectedLocations.filter((l) => l !== loc)
        : [...prev.selectedLocations, loc];
      return { ...prev, selectedLocations: updated };
    });
  };

  const clearAllFilters = () => {
    setSearchInput({
      title: "",
      location: "",
      selectedCategories: [],
      selectedLocations: [],
    });
    setSearchFilter({ title: "", location: "" });
    setIsSearched(false);
    navigate("/all-jobs/all");
  };

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginatedJobs = useMemo(() => {
    return [...filteredJobs]
      .reverse()
      .slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);
  }, [filteredJobs, currentPage]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

    return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            <Filter size={18} />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <motion.div
          variants={slideRigth(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:gap-8 lg:gap-16"
        >
          {/* Filters */}
          <div
            className={`lg:w-1/4 p-4 rounded-xl border border-green-200 shadow-sm bg-green-50 ${
              showFilters ? "block" : "hidden md:block"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  Job Title
                </h2>
                <input
                  type="text"
                  name="title"
                  value={searchInput.title}
                  onChange={handleSearchChange}
                  placeholder="Enter title"
                  className="w-full border border-green-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  Job Location
                </h2>
                <input
                  type="text"
                  name="location"
                  value={searchInput.location}
                  onChange={handleSearchChange}
                  placeholder="Enter location"
                  className="w-full border border-green-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  Categories
                </h2>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {JobCategories.map((cat, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`cat-${i}`}
                        checked={searchInput.selectedCategories.includes(cat)}
                        onChange={() => handleCategoryToggle(cat)}
                        className="h-4 w-4 text-green-600"
                      />
                      <label
                        htmlFor={`cat-${i}`}
                        className="ml-2 text-green-800"
                      >
                        {cat}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                  Locations
                </h2>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {JobLocations.map((loc, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`loc-${i}`}
                        checked={searchInput.selectedLocations.includes(loc)}
                        onChange={() => handleLocationToggle(loc)}
                        className="h-4 w-4 text-green-600"
                      />
                      <label
                        htmlFor={`loc-${i}`}
                        className="ml-2 text-green-800"
                      >
                        {loc}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={clearAllFilters}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Job Cards */}
<div className="lg:w-3/4 mt-8 lg:mt-12"> {/* mt-8 বা lg:mt-12 দিয়ে উপরের থেকে spacing বাড়ালাম */}
  <div className="mb-6">
    <h1 className="text-2xl md:text-3xl font-bold text-green-800 capitalize mb-2">
      {category === "all"
        ? "Latest All Jobs"
        : `Jobs in ${category.charAt(0).toUpperCase() + category.slice(1)}`}
      {filteredJobs.length > 0 && (
        <span className="ml-2 text-green-600 text-lg">
          ({filteredJobs.length} {filteredJobs.length === 1 ? "job" : "jobs"})
        </span>
      )}
    </h1>
    <p className="text-green-700">
      Get your desired job from top companies in Bangladesh
    </p>
  </div>

  <motion.div
    variants={SlideUp(0.5)}
    initial="hidden"
    animate="visible"
    className="space-y-4"
  >
    {paginatedJobs.length > 0 ? (
      paginatedJobs.map((job, i) => (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          key={i}
        >
          <JobCard job={job} />
        </motion.div>
      ))
    ) : (
      <div className="text-center p-6 border border-green-200 rounded-xl bg-green-50">
        <h3 className="text-lg font-semibold text-green-700 mb-1">
          No jobs found
        </h3>
        <p className="text-green-600 mb-3">
          Try adjusting your search filters.
        </p>
      </div>
    )}
  </motion.div>

  {/* Pagination */}
  {totalPages > 1 && (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 border border-green-300 rounded-md hover:bg-green-100 disabled:opacity-50 text-green-700"
      >
        <ChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-10 h-10 rounded-md border text-center cursor-pointer ${
            currentPage === i + 1
              ? "bg-green-600 text-white border-green-700"
              : "bg-white border-green-300 text-green-700 hover:bg-green-50"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() =>
          setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        }
        disabled={currentPage === totalPages}
        className="p-2 border border-green-300 rounded-md hover:bg-green-100 disabled:opacity-50 text-green-700"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )}
</div>

        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default AllJobs;
