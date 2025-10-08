import React, { useState } from "react";
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from "../assets/assets";
import moment from 'moment'
import Footer from "../components/Footer"

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [Resume, setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className="container px-4 2xl:px-20 min-h-[70vh] mx-auto my-12">
        {/* Resume Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Resume</h2>
          <div className="flex flex-wrap items-center gap-4">
            {isEdit ? (
              <>
                <label htmlFor="resumeUpload" className="flex items-center gap-3 cursor-pointer">
                  <p className="bg-gradient-to-r from-[#00FFD1] to-[#00A88E] text-white px-5 py-2 rounded-lg font-semibold shadow hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                    Select Resume
                  </p>
                  <input 
                    id="resumeUpload" 
                    type="file" 
                    accept="application/pdf" 
                    hidden 
                    onChange={e => setResume(e.target.files[0])} 
                  />
                  <img src={assets.profile_upload_icon} alt="upload" className="w-8 h-8 animate-bounce"/>
                </label>
                <button 
                  onClick={() => setIsEdit(false)}
                  className="bg-green-100 text-green-700 px-5 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors"
                >
                  Save
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <a 
                  className="bg-gradient-to-r from-[#00FFD1] to-[#00A88E] text-white px-5 py-2 rounded-lg font-semibold shadow hover:shadow-lg transform hover:scale-105 transition-all duration-500"
                  href="#"
                >
                  {Resume ? Resume.name : "Resume"}
                </a>
                <button 
                  onClick={() => setIsEdit(true)}
                  className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Jobs Applied Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Jobs Applied</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700">Company</th>
                  <th className="py-3 px-4 text-left text-gray-700">Job Title</th>
                  <th className="py-3 px-4 text-left text-gray-700 max-sm:hidden">Location</th>
                  <th className="py-3 px-4 text-left text-gray-700 max-sm:hidden">Date</th>
                  <th className="py-3 px-4 text-left text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobsApplied.map((job, index) => (
                  <tr key={index} className={`text-gray-700 transition-all duration-300 hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <td className="py-3 px-4 flex items-center gap-3 border-b">
                      <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full border" />
                      {job.company}
                    </td>
                    <td className="py-3 px-4 border-b font-medium">{job.title}</td>
                    <td className="py-3 px-4 border-b max-sm:hidden">{job.location}</td>
                    <td className="py-3 px-4 border-b max-sm:hidden">{moment(job.date).format('ll')}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-4 py-1.5 rounded-full font-medium text-sm
                        ${job.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                          job.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'}
                        transition-colors duration-300`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Applications;
