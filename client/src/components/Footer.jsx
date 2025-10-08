import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F0F0F] via-[#111111] to-[#0F0F0F] mt-10 shadow-inner relative overflow-hidden">
      
      {/* Subtle animated gradient overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#00A88E]/20 via-[#007a6e]/10 to-[#0F0F0F]/10 animate-gradient-x pointer-events-none"></span>

      <div className="container px-4 2xl:px-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10 relative z-10">
        
        {/* Logo */}
        <img
          width={160}
          src={assets.logo}
          alt="ChakriLagbe Logo"
          className="hover:scale-110 transition-transform duration-500"
        />
        
        {/* Footer Text */}
        <p className="text-sm text-gray-200 text-center md:text-left">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
          <span className="font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#00A88E] to-[#007a6e] hover:drop-shadow-xl transition-all duration-500">
            ChakriLagbe Team
          </span>{" "}
          | 2025
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          {[assets.instagram_icon, assets.facebook_icon, assets.twitter_icon].map((icon, idx) => (
            <a
              key={idx}
              href="#"
              className="relative group"
            >
              <img
                width={36}
                src={icon}
                alt=""
                className="invert group-hover:filter-none transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
              />
              {/* Glow + Navbar button color matching */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A88E] to-[#007a6e] opacity-40 blur-xl hidden group-hover:block animate-pulse"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
