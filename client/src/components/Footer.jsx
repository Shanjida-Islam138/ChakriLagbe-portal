import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-md mt-16"> 
     
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        {/* ------------Logo------------- */}
        <div className="flex items-center gap-2">
         
          <h1 className="text-lg font-semibold text-green-700">
            ChakriLagbe
          </h1>
        </div>

       

        {/*------- Copyright------------ */}
        <p className="text-green-800 text-xs sm:text-sm mt-2 sm:mt-0 text-center">
          © 2025 | Made with ❤️ by ChakriLagbe Team | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
