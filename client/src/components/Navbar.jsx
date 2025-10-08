import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="h-16 flex items-center shadow-lg sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer w-[220px] h-auto object-contain hover:scale-105 transition-transform duration-500"
          src={assets.logo}
          alt="ChakriLagbe Logo"
        />

        {/* User / Auth Buttons */}
        {user ? (
          <div className="flex items-center gap-4">
            <Link
              to={"/applications"}
              className="text-gray-700 hover:text-[#00A88E] font-medium transition-colors duration-300"
            >
              Applied Jobs
            </Link>
            <span className="text-gray-300">|</span>
            <p className="max-sm:hidden text-gray-700 font-medium">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                },
              }}
            />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-700 hover:text-[#00A88E] font-medium transition-colors duration-300 cursor-pointer"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-gradient-to-r from-[#00A88E] to-[#007a6e] hover:from-[#0F0F0F] hover:to-[#0F0F0F] px-6 sm:px-9 py-2 rounded text-white font-medium shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
