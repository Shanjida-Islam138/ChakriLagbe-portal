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
      <div
        className="text-white py-16 text-center mx-2 rounded-xl bg-[#0F0F0F] relative overflow-hidden"
        style={{
          backgroundSize: "65%",
          backgroundPosition: "center"
        }}
      >
    
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "65%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(1.5px)", 
            zIndex: 0
          }}
        ></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Over 10,000+ jobs to apply
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
            Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
          </p>
          <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
            <div className="flex items-center">
              <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
              <input
                type="text"
                placeholder="Search for Jobs"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
                ref={titleRef}
              />
            </div>
            <div className="flex items-center">
              <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
              <input
                type="text"
                placeholder="Location"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
                ref={locationRef}
              />
            </div>
            <button
              onClick={onSearch}
              className="bg-[#00A88E] hover:bg-[#0F0F0F] px-6 py-2 rounded text-white m-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>

<div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md">
  <div className="flex items-center gap-5">
    <p className="font-medium whitespace-nowrap">Trusted by</p>

    <div className="w-full">
      <Slider
        infinite={true}
        slidesToShow={4}   // ekshathe koyta logo dekhabe
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        arrows={false}
        rtl={true}   // 👉 left theke right e cholar jonno eta add holo
      >
        <div><img className="h-6" src={assets.bjit_logo} alt="" /></div>
        <div><img className="h-6" src={assets.datasoft_logo} alt="" /></div>
        <div><img className="h-6" src={assets.ti_logo} alt="" /></div>
        <div><img className="h-6" src={assets.bracbank_sm_logo} alt="" /></div>
        <div><img className="h-6" src={assets.dutchbangla_logo} alt="" /></div>
        <div><img className="h-6" src={assets.aci_logo} alt="" /></div>
        <div><img className="h-6" src={assets.sci_logo} alt="" /></div>
      </Slider>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
