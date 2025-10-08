import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white border border-gray-200">
        <table className="w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:text-sm">#</th>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:text-sm">User Name</th>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:hidden">Job Title</th>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:hidden">Location</th>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:text-sm">Resume</th>
              <th className="py-3 px-4 text-left text-gray-600 uppercase tracking-wider max-sm:text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className="text-gray-700 hover:bg-gray-50 hover:scale-[1.01] transform transition-all duration-300 cursor-pointer"
              >
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3 max-sm:hidden transform transition-transform duration-300 hover:scale-110"
                    src={applicant.imgSrc}
                    alt={applicant.name}
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="py-2 px-4 border-b max-sm:hidden">{applicant.jobTitle}</td>
                <td className="py-2 px-4 border-b max-sm:hidden">{applicant.location}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={applicant.resumeLink || "#"}
                    target="_blank"
                    className="bg-blue-50 text-blue-500 px-3 py-1 rounded inline-flex gap-2 items-center transition-all duration-300 hover:bg-blue-100 hover:scale-105"
                  >
                    Resume
                    <img src={assets.resume_download_icon} alt="download" className="w-4 h-4" />
                  </a>
                </td>
                <td className="py-2 px-4 border-b relative">
                  <div className="relative inline-block text-left group">
                    <button className="text-gray-500 px-2 py-1 rounded hover:bg-gray-100 transition-all duration-300">
                      ...
                    </button>
                    <div className="z-10 hidden group-hover:block absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg animate-fade-in">
                      <button className="block w-full text-left px-4 py-2 text-green-500 hover:bg-gray-100 transition-colors duration-200">Accept</button>
                      <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 transition-colors duration-200">Reject</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
