import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] mt-10">
      <div className="container px-4 2xl:px-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        
        <img width={150} src={assets.logo} alt="ChakriLagbe Logo" />
        
        <p className="text-sm text-gray-200 text-center md:text-left">
          Made with ❤️ by <span className="font-semibold text-white">ChakriLagbe Team</span> | 2025
        </p>

        <div className="flex gap-4">
          <a href="#"><img width={35} src={assets.instagram_icon} alt="" className="invert" /></a>
          <a href="#"><img width={35} src={assets.facebook_icon} alt="" className="invert" /></a>
          <a href="#"><img width={35} src={assets.twitter_icon} alt="" className="invert" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
