'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import SliderTop from './SliderTop';
import Header from './Header';
import Footer from './Footer';

export default function Boddy() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };
  var dilip = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  console.log("hello", typeof NaN)
  return (
    <>

      <SliderTop />
      <Header />
      <div>
        <div className="max-w-full">
          <div className="banner">
            <div className="p-1">
              <h2 className='text-[72px] text-white font-[400]  mt-[25%] ms-[52px]'>The <span className='font-serif'>Fall</span> Collection</h2>
              <div className=" flex gap-4 font-semibold  ms-[52px]">
                <button className='bg-white px-12 py-2'>Women</button>
                <button className='bg-white px-16 py-2'>Men</button>
              </div>
            </div>
          </div>


        </div>

        <div className="bg-black max-w-full">
          <div className=" w-[65%] mx-auto grid lg:grid-cols-4 xs:grid-cols-2   py-2 gap-16 text-white">
            <div className="flex gap-2 items-center">
              <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Shipping-black_2_ce714247-b176-4ecf-832e-fa3a2a773e20.png?v=1657557635" className='w-[20px]' alt="" />
              <p>Free Shipping over $99</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Returns-black_40542005-7a75-4b5b-89fe-190bad6422e6.png?v=1668023906" className='w-[20px]' alt="" />
              <p>Free Returns</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/franks-club-icon-1.png?v=1725563403" className='w-[20px]' alt="" />
              <p>Earn Points</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="https://cdn.shopify.com/s/files/1/0553/7100/6130/files/Sezzle.png?v=1704400405" className='w-[20px]' alt="" />
              <p>Buy Now, Pay Later</p>
            </div>
          </div>
        </div>

        {/* jacket start */}
        <div className="max-w-[1455px] mx-auto mt-12">
          <div className="grid lg:grid-cols-4 xs:grid-cols-2 gap-6 font-semibold">
            <div className="">
              <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area_62cfa167-5bb7-49b4-a364-9b03a57e597f_900x.jpg?v=1725904243" alt="" />
              <p className='mt-1'>Womens Sweaters</p>
            </div>
            <div className="">
              <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-1_9ed9aaaf-5f7d-46fd-b724-7bad1b87915a_900x.jpg?v=1725904257" alt="" />
              <p className='mt-1'>Womens Jackets</p>
            </div>
            <div className="">
              <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-2_807de894-9db1-4f43-bbc3-b3e03027f224_900x.jpg?v=1725904281" alt="" />
              <p className='mt-1'>Mens Sweaters</p>
            </div>
            <div className="">
              <img src="https://www.frankandoak.com/cdn/shop/files/PLP_thumbnail_image_area-3_59bf8ff6-1792-42de-ad08-f396e3be53d4_900x.jpg?v=1725904307" alt="" />
              <p className='mt-1'>Mens Jackets</p>
            </div>
          </div>
        </div>
        {/* jacket end */}

        {/* womenMens cloth */}
        <div ></div>
      </div>

      {/* womenMens cloth end*/}

      {/* womenMens slider */}
      <div className="max-w-[1455px] mx-auto mt-[5%] mb-[2%]">
        <div className="flex justify-between">
          <div className="">
            <h2 className='text-[34px] font-semibold'>This Just In</h2>
          </div>
          <div className="flex gap-6 text-[24px]">
            <h3 className='underline cursor-pointer'>Women's</h3>
            <h3 className='font-semibold text-[#666666] cursor-pointer'>Men's</h3>
          </div>
        </div>
      </div>


      <div className="max-w-[1500px] mx-auto mt-4">
        <Slider {...settings}>
          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2310173-5JR.01_1200x.jpg?v=1721145183)] bg-cover  bg-no-repeat  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/PRE-FALL_WWLOOK1_1edff77d-65ff-406b-ab9b-462c944ddf63_1200x.jpg?v=1723645188)] relative p-1 '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>


            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2110377-012.01_1200x.jpg?v=1722283940)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2110377-012.02_1200x.jpg?v=1722283940)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2510546-4KW.01_1200x.jpg?v=1721145582)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2510546-4KW.02_1200x.jpg?v=1721145582)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2130296-6BB.01_1200x.jpg?v=1721141144)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2130296-6BB.02_1200x.jpg?v=1721141144)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2130296-4BO.01_1200x.jpg?v=1721140932)] bg-cover  bg-no-repeat  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2130296-4BO.02_1200x.jpg?v=1721140933)] relative p-1 '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2510545-012.01_1200x.jpg?v=1722449653)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2510545-012.02_1200x.jpg?v=1722449652)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2510552-1BS.01_1200x.jpg?v=1721157352)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2510552-1BS.02_1200x.jpg?v=1721157352)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/2130270-5DS.01_1200x.jpg?v=1723490267)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2130270-5DS.02_1200x.jpg?v=1723490267)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>
          <div className="group cursor-pointer">
            <div className='bg-[url(https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130270-2JZ.01_450x.jpg?v=1722280555)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/2130270-2JZ.02_1200x.jpg?v=1722280555)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>

          <div className="group cursor-pointer">
            <div className='bg-[url(https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310170-1AA.01_450x.jpg?v=1722278597)] bg-cover  h-[500px] hover:bg-[url(https://www.frankandoak.com/cdn/shop/files/PRE-FALL_WWLOOK4.0671_dc694f9c-d2a3-4e02-abd4-e6c51c338652_1200x.jpg?v=1723645262)] relative p-1  '>

              <h2 className='text-[#FA4B21] text-center  w-[40px_!important] bg-white text-[13px] '>  -26%</h2>
              <button className='bg-white py-2 w-[95%] left-2 absolute bottom-2 font-semibold hidden   cursor-pointer group-hover:inline  showbtn  '>Quick add

                <div className='w-[100%] left-0 absolute bottom-2 bg-white showsize  '>
                  <ul className=' flex-wrap text-[20px] gap-2 justify-center flex '>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xxs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xs</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>s</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>m</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>l</li>
                    <li className='hover:bg-black  text-black px-5 hover:text-white py-1'>xl</li>
                  </ul>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between my-3">
              <h3 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h3>
              <span><CiHeart className='text-[20px]' /></span>
            </div>
            <h5 className='text-[#FA4B21] text-[13px] font-semibold my-3'><del className='text-[black]'>$149.00</del> &nbsp; $109.00</h5>
            <p className='text-[13px] font-semibold text-[#666666]'>1 Colour</p>
          </div>



        </Slider>
      </div>


      {/* womenMens slider end */}

      <div className="max-w-full bg-[#F9F9F9] mt-14">
        <h2 className='text-center py-10 text-[36px] font-semibold'>You didn’t hear it from us</h2>
      </div>

      <div className="fixed bg-black text-white bottom-2 left-2 px-12 font-semibold py-3">Get 20% Off</div>

      <div className=" bg-[#F9F9F9] py-14">
        <Slider {...dilip}>

          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/2130231-2KI.01.jpg?crop=center&height=880&v=1723490760&width=672" alt="" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/1110352-403.01.jpg?crop=center&height=880&v=1722526424&width=672" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/2110327-012.01_68d227e9-6a4d-40ff-8a87-03e36db5e659.jpg?crop=center&height=880&v=1723648143&width=672" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/1210402-400.7889.jpg?crop=center&height=880&v=1692367258&width=672" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/2210509-4KW.01_e91300d3-7ee0-4e73-9efa-7ccc3a5f3766.jpg?crop=center&height=880&v=1723646949&width=672" alt="" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="w-[40%] relative bg-white ">

                <h2 className=' absolute w-[200px] left-[10%] top-[40%] font-semibold'>I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing.</h2>
                <button className=' absolute bottom-4 left-[10%] font-semibold underline'>Shop Now</button>
              </div>
              <div className="w-[50%]">
                <img src="https://www.frankandoak.com/cdn/shop/files/1110352-403.01.jpg?crop=center&height=880&v=1722526424&width=672" alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>


      {/*  */}

      <div className="max-w-[1455px] mx-auto  mt-10 xs:flex-1 lg:flex ">
        <div className=" xs:w-[100%] lg:w-[50%]  flex items-center">
          <div className="w-[600px] mx-auto">
            <h2 className='text-[52px] font-[400] my-4'>Inspire Better Living.</h2>
            <p className='text-[26px] text-[#666666] text-start font-semibold my-4'>Born in Canada, we are grounded on innovation, our community, and respecting the planet we all call home.</p>
            <span className=' underline text-[32px]'>Who We Are</span>
          </div>

        </div>
        <div className=" xs:w-[100%] lg:w-[50%]">
          <div className="grid grid-cols-2 gap-3">
            <div className=" relative bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop_2_900x.jpg?v=1712334213)] h-[346px]  bg-cover bg-center  bg-no-repeat  ">
              <p className=' absolute left-6 bottom-6 text-[24px] text-white font-semibold'>Sustainable Practices</p>
            </div>
            <div className=" relative bg-[url(https://www.frankandoak.com/cdn/shop/files/story-design_900x.jpg?v=1712160804)] h-[346px]  bg-cover bg-center  bg-no-repeat   ">
              <p className=' absolute left-6 bottom-6 text-[24px] text-white font-semibold'>
                Design Philosophy</p>
            </div>
            <div className=" relative bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop_3_900x.jpg?v=1712334263)] h-[346px]  bg-cover bg-center  bg-no-repeat">
              <p className=' absolute left-6 bottom-6 text-[24px] text-white font-semibold'>
                Fabrics Innovation</p>
            </div>
            <div className=" relative bg-[url(https://www.frankandoak.com/cdn/shop/files/story-partners_900x.jpg?v=1712160804)] h-[346px]  bg-cover bg-center  bg-no-repeat ">
              <p className=' absolute left-6 bottom-6 text-[24px] text-white font-semibold'>
                Partners and Factories
              </p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}
