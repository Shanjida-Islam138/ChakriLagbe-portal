import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="container p-4 max-w-6xl mx-auto">

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 border-b text-left max-sm:hidden text-gray-600 uppercase tracking-wider">#</th>
              <th className="py-3 px-4 border-b text-left text-gray-600 uppercase tracking-wider">Job Title</th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden text-gray-600 uppercase tracking-wider">Date</th>
              <th className="py-3 px-4 border-b text-left text-gray-600 uppercase tracking-wider">Location</th>
              <th className="py-3 px-4 border-b text-center text-gray-600 uppercase tracking-wider">Applicants</th>
              <th className="py-3 px-4 border-b text-left text-gray-600 uppercase tracking-wider">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="text-gray-700 hover:bg-gray-50 hover:scale-101 transform transition-all duration-300 cursor-pointer"
              >
                <td className="py-2 px-4 border-b max-sm:hidden">{index + 1}</td>
                <td className="py-2 px-4 border-b">{job.title}</td>
                <td className="py-2 px-4 border-b max-sm:hidden">{moment(job.date).format("ll")}</td>
                <td className="py-2 px-4 border-b">{job.location}</td>
                <td className="py-2 px-4 border-b text-center">{job.applicants}</td>
                <td className="py-2 px-4 border-b">
                  <input
                    className="scale-125 ml-2 cursor-pointer accent-green-500 transition-all duration-300 hover:scale-150"
                    type="checkbox"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Job Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-gradient-to-r from-[#00A88E] to-[#00FFD1] hover:from-[#00FFD1] hover:to-[#00A88E] text-white py-2 px-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 font-semibold"
        >
          Add New Job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
