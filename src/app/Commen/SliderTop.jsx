'use client'
import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function SliderTop() {
  const [showToggle,setShowToggal]=useState(false)

  let toggal=()=>{
    setShowToggal(!showToggle)


 
   
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove:true,
    autoplay:true,
    arrows:true,
    fade:true,
    cssEase: 'ease-in-out',
  };

  return (
    <>
    <div className="bg-black">
    <div className="flex bg-black text-[white] max-w-[1455px] mx-auto">
    <div className='max-w-[70%] mx-auto'>
         <Slider {...settings} className='text-center text-white bg-black sliderss '>
      <div >
        <h3>Our loyalty program just got better! Explore the new perks</h3>
      </div>
      <div>
        <h3>The Skyline: A cult favourite. Shop Women Shop Men</h3>
      </div>
      <div>
        <h3 >Your favourite season for fashion is here. Shop Women Shop Men</h3>
      </div>
      <div>
        <h3>Enjoy free shipping on orders over $99 and free returns</h3>
      </div>
    </Slider>
    </div>
    <div className="max-w-[30%] xs:hidden lg:inline cursor-pointer">
    <h2 className='relative' onClick={toggal}>🏳️‍⚧️ USD </h2>
    <div className={showToggle==true ? "active ":"tooggels"}>
    <div className="bg-[#EBECEE] py-2 w-[100px] text-center absolute right-4 z-[99] text-black font-semibold ">
    <ul className=''>
      <li className='my-3 cursor-pointer bg-red-400 '>$ CAD</li>
      <li className='mb-3 cursor-pointer'>$ USD</li>
    </ul>
    </div>
    </div>

    </div>
    </div>  
    </div>

    </>
    
  )
}
