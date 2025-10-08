import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from "../components/JobCard";
import Footer from '../components/Footer';

const App = () => {
  const { id } = useParams();
  const [JobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id);
    if (data.length !== 0) setJobData(data[0]);
  }

  useEffect(() => {
    if (jobs.length > 0) fetchJob();
  }, [id, jobs]);

  return JobData ? (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col py-10 container px-4 sxl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">

          {/* Header Section */}
          <div className="relative flex justify-center md:justify-between flex-wrap gap-8 px-10 md:px-14 py-20 mb-6 text-white rounded-xl overflow-hidden shadow-2xl"
               style={{background: 'linear-gradient(90deg, #0F0F0F, #111111, #00A88E)'}}>
            
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#00A88E]/30 via-[#007a6e]/20 to-[#0F0F0F]/30 animate-[gradientX_8s_linear_infinite] pointer-events-none"></span>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <img 
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border transform hover:scale-110 hover:shadow-2xl hover:shadow-[#00FFD1]/50 transition-transform duration-500" 
                src={JobData.companyId.image} 
                alt="" 
              />
              <div className="text-center md:text-left">
                <h1 className="text-2xl sm:text-4xl font-bold hover:text-[#00FFD1] transition-colors duration-500 drop-shadow-xl">{JobData.title}</h1>
                <div className="flex flex-wrap max-md:justify-center gap-4 items-center text-gray-200 mt-3">
                  <span className="flex items-center gap-1 hover:text-[#00FFD1] transition-colors duration-500">
                    <img src={assets.suitcase_icon} alt="" className="w-4 h-4 filter brightness-200 contrast-200" />
                    {JobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#00FFD1] transition-colors duration-500">
                    <img src={assets.location_icon} alt="" className="w-4 h-4 filter brightness-200 contrast-200" />
                    {JobData.location}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#00FFD1] transition-colors duration-500">
                    <img src={assets.person_icon} alt="" className="w-4 h-4 filter brightness-200 contrast-200" />
                    {JobData.level}
                  </span>
                  <span className="flex items-center gap-1 hover:text-[#00FFD1] transition-colors duration-500">
                    <img src={assets.money_icon} alt="" className="w-4 h-4 invert" />
                    CTC: {kconvert.convertTo(JobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center relative z-10">
              <button className="bg-gradient-to-r from-[#00FFD1] to-[#00A88E] hover:from-[#00A88E] hover:to-[#00FFD1] px-6 py-2 rounded text-white m-1 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse">
                Apply Now
              </button>
              <p className="mt-1 text-gray-300 text-sm">Posted {moment(JobData.date).fromNow()}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

            {/* Left Section */}
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">Job Description</h2>
              <div className="rich-text p-4 border rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-500">
                <div dangerouslySetInnerHTML={{ __html: JobData.description }} />
              </div>
              <button className="bg-gradient-to-r from-[#00FFD1] to-[#00A88E] hover:from-[#00A88E] hover:to-[#00FFD1] px-6 py-2 rounded text-white mt-6 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse">
                Apply Now
              </button>
            </div>

            {/* Right Section: More Jobs */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 space-y-5">
              <h2 className="font-semibold text-lg mb-4">More jobs from {JobData.companyId.name}</h2>
              {jobs.filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id)
                   .slice(0,4)
                   .map((job,index) => (
                     <div key={index} className="transform hover:scale-105 hover:shadow-xl hover:border hover:border-[#00FFD1] rounded transition-all duration-500">
                       <JobCard job={job} />
                     </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default App;
