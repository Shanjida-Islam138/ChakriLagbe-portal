import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const {openSignIn} = useClerk()
  const {user} =useUser()
  return (
    <div
      className="py-2"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
    >
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          src={assets.logo}
          alt=""
          className="w-[220px] h-auto object-contain"
        />
        {
          user
          ?<div className="flex items-center gap-3">
            <Link to={'/applications'}>Applied Jobs</Link>
            <p>|</p>
            <p>Hi, {user.firstName+" "+user.lastName}</p>
            <UserButton />
          </div>
          :<div className="flex gap-4 max-sm:text-xs">
          <button className="bg-[#309689]">Recruiter Login</button>
          <button onClick ={ e => openSignIn()}className="bg-[#309689] text-white px-6 sm:px-9 py-2 rounded-full">
            Login
          </button>
        </div>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
