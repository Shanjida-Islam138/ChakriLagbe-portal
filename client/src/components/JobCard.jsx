import React from "react"
import { assets } from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const JobCard = ({ job }) => {
  const navigate = useNavigate()
  
  return (
    <div className="p-6 shadow-lg rounded-2xl flex flex-col h-full bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      
      {/* Company Logo */}
      <div className="flex justify-between items-center mb-3">
        <img className="h-10 object-contain" src={job.companyId.image} alt={job.companyId.name} />
      </div>

      {/* Job Title */}
      <h4 className="font-semibold text-xl md:text-2xl mt-2 text-gray-800 hover:text-[#00A88E] transition-colors duration-300">
        {job.title}
      </h4>

      {/* Job Location & Level */}
      <div className="flex flex-wrap gap-2 mt-3 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full text-blue-700">{job.location}</span>
        <span className="bg-red-50 border border-red-200 px-3 py-1.5 rounded-full text-red-700">{job.level}</span>
      </div>

      {/* Job Description */}
      <p className="text-gray-500 text-sm mt-4 line-clamp-4">
        {job.description.slice(0, 150)}...
      </p>

      {/* Buttons */}
      <div className="mt-5 flex gap-4 text-sm mt-auto">
        <button
          onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }}
          className="flex-1 bg-gradient-to-r from-[#00A88E] to-[#007a6e] hover:bg-[#0F0F0F] text-white px-4 py-2 rounded-2xl font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Apply Now
        </button>
        <button
          onClick={() => { navigate(`/apply-job/${job._id}`); scrollTo(0, 0) }}
          className="flex-1 text-gray-700 border border-gray-300 rounded-2xl px-4 py-2 hover:bg-gray-50 transition-all duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default JobCard
