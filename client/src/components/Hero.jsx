import React, { useContext, useRef } from "react"
import { assets } from "../assets/assets"
import bg_image from "../assets/bg_image.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "../context/AppContext"

const Hero = () => {

  const { setSearchFilter, setIsSearched } = useContext(AppContext)
  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)
  }

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="relative text-white rounded-xl overflow-hidden shadow-lg">

        {/* Background Image with gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/80 to-[#00A88E]/40 z-0"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5) blur(1px)"
          }}
        ></div>

        <div className="relative z-10 text-center py-20 px-5 md:px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 animate-fadeInDown">
            Over <span className="text-[#00A88E]">10,000+</span> jobs waiting for you
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed animate-fadeInUp">
            Discover your next career opportunity with ease. Explore the best jobs, apply instantly, and take the first step toward your dream career!
          </p>

          {/* Updated Search Inputs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 animate-fadeInUp">

            {/* Job Title Input */}
            <div className="flex items-center flex-1 bg-gray-50 rounded-2xl px-4 py-3 hover:shadow-md transition-all duration-300">
              <img className="h-5 w-5 mr-3 text-gray-400" src={assets.search_icon} alt="search" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 font-medium"
                ref={titleRef}
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center flex-1 bg-gray-50 rounded-2xl px-4 py-3 hover:shadow-md transition-all duration-300">
              <img className="h-5 w-5 mr-3 text-gray-400" src={assets.location_icon} alt="location" />
              <input
                type="text"
                placeholder="Location"
                className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400 font-medium"
                ref={locationRef}
              />
            </div>

            {/* Search Button */}
            <button
              onClick={onSearch}
              className="bg-gradient-to-r from-[#00A88E] to-[#007a6e] hover:bg-[#0F0F0F] hover:scale-105 transform transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted Companies Slider */}
      <div className="border border-gray-200 shadow-md mx-2 mt-10 p-6 rounded-xl bg-white">
        <p className="font-medium mb-4 text-gray-700 text-center">Trusted by leading companies</p>
        <Slider
          infinite
          slidesToShow={5}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2500}
          arrows={false}
          className="flex items-center"
        >
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.bjit_logo} alt="BJIT" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.datasoft_logo} alt="Datasoft" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.ti_logo} alt="TI" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.bracbank_sm_logo} alt="BRAC Bank" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.dutchbangla_logo} alt="Dutch Bangla" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.aci_logo} alt="ACI" /></div>
          <div className="flex justify-center"><img className="h-8 object-contain" src={assets.sci_logo} alt="SCI" /></div>
        </Slider>
      </div>
    </div>
  )
}

export default Hero
