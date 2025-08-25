import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate()

  return (
    <div
      className="h-16 flex items-center shadow-md"
  
    >
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img  onClick={()=> navigate('/')} className='cursor-pointer w-[220px] h-auto object-contain' src={assets.logo}
          alt=""
         
        />
        {
        user ? (
          <div className="flex items-center gap-3">
            <Link to={'/applications'}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-white-600">
              Recruiter Login
            </button>
            <button
              onClick={e => openSignIn()}
              className="bg-[#00A88E] hover:bg-[#0F0F0F] px-6 sm:px-9 py-2 rounded text-white m-1"
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
