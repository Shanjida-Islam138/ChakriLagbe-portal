import React, { useEffect, useState,useContext } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext"

const Dashboard = () => {
  const navigate = useNavigate()

  const { companyData, setCompanyData, setCompanyToken } = useContext(AppContext)

  // Function to logout company

  const logout = () => {

       setCompanyToken(null)
       localStorage.removeItem('companyToken')
       setCompanyData(null)
       navigate('/')
  }

   useEffect(() =>{
    if (companyData) {
      navigate('/dashboard/manage-jobs')
      
    }


   },[companyData])

  return (
    <div className="min-h-screen">

      {/* Navbar for Recruiter Panel */}
      <div className="h-16 flex items-center shadow-md">
        <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
          {/* Logo - same as Navbar.jsx */}
          <img
            onClick={() => navigate('/')}
            className="cursor-pointer w-[220px] h-auto object-contain"
            src={assets.logo}
            alt="logo"
          />

            {companyData && (
               <div className="flex items-center gap-3">
          
            <p className="max-sm:hidden text-gray-700">
              Welcome, {companyData.name} <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
            </p>

            <div className="relative group">
              <img className="w-8 border rounded-full" src={companyData.image} alt="company" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li onClick ={logout}className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>

            )}

         
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex items-start">
        {/* Left Sidebar */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/add-job'}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/manage-jobs'}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/view-applications'}
            >
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
