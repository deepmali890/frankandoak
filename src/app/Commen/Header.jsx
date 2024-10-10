'use client'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosArrowRoundForward, IoMdHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
import { HiArrowLongLeft } from "react-icons/hi2";
import Slider from 'react-slick';
import { VscLockSmall } from "react-icons/vsc";



function Header() {

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
  }

  const [login, setLogin] = useState(false)
  const [showmenu, setShowMenu] = useState(false)
  const [Showpass, setShowPass] = useState(false)
  const [ShowCart, setShowCart] = useState(false)
  const [ShowUnderCart, setShowUnderCart] = useState(false)
  const [ShowSearch, setShowSearch] = useState(false)


  let userbtn = () => {
    setLogin(!login)

  }
  let menu = () => {
    setShowMenu(!showmenu)

  }
  let pass = () => {
    setShowPass(!Showpass)
  }

  let cartbtn=()=>{
    setShowCart(!ShowCart)
    setShowUnderCart(!ShowUnderCart)

  }

  let searchbtn=()=>{
    setShowSearch(!ShowSearch)


  }
   console.log(typeof NaN)


  return (
    <>
      <div className=' sticky top-0 z-[1]' >
        <header className='bg-white sticky top-0 border-b-2  '>
          <nav className='max-w-[1455px] mx-auto flex py-3 items-center px-[10px] '>
            <aside className='w-[70%] flex items-center gap-[50px]  '>
              <div className="xs:flex lg:hidden">
                <GiHamburgerMenu className='text-[28px] duration-[1s]' onClick={menu} />
              </div>
              <h2 className='text-black text-[20px] font-bold '>Frank And Oak</h2>
              <div className="xs:hidden lg:flex">
                <ul className='flex gap-[42px] font-semibold  '>
                  <li className='hover:underline cursor-pointer group '>This Just In

                    <div className="hidden group-hover:block w-[100vw] left-0 bg-[#F9F9F9] top-[11%] fixed h-[300px]">
                      <div className="w-[1455px] mx-auto  flex">
                        <div className="w-[35%]   grid grid-cols-2">
                          <div className=" border-r-2">
                            <h3 className=' underline my-4'>Women's New Arrivals</h3>
                            <ul>
                              <li>Shop All</li>
                              <li>Tops</li>
                              <li>Bottoms</li>
                              <li>Jackets & Coats</li>
                              <li>Blazers</li>
                              <li>Dresses</li>
                              <li>Accessories</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className=" underline my-4 ps-2">Men's New Arrivals</h3>
                            <ul>
                              <li>Shop All</li>
                              <li>Tops</li>
                              <li>Bottoms</li>
                              <li>Overshirts</li>
                              <li>Jackets & Coats</li>
                              <li>Accessories</li>
                            </ul>
                          </div>
                        </div>
                        <div className="w-[65%]  flex ">
                          <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop_90187318-a3f1-492f-9377-b18381a175a6_600x.jpg?v=1724869721)]  h-[300px] bg-no-repeat border bg-cover '>
                            <p>kjbsdgjbdsiuhb0</p>
                          </div>
                          <div className='bg-[url(https://www.frankandoak.com/cdn/shop/files/Tile_desktop-1_3ac58a1d-4386-40be-a9bf-9db422c8941d_600x.jpg?v=1724869727)] h-[300px] bg-no-repeat '>
                            <p>kjlewnkjewbn</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='hover:underline cursor-pointer'><Link href={"/about"}>Women</Link></li>
                  <li className='hover:underline cursor-pointer'>Men</li>
                  <li className='hover:underline cursor-pointer'>Our Story</li>
                </ul>
              </div>
            </aside>
            <aside className='w-[30%] flex justify-end'>
              <ul className='flex gap-[20px]  text-[25px]'>
                <li className='cursor-pointer' onClick={searchbtn}><IoSearchOutline /></li>
                <li className='cursor-pointer' onClick={userbtn}><PiUserCircleLight /></li>
                <li className='cursor-pointer'><IoMdHeartEmpty /></li>
                <li className='cursor-pointer ' onClick={cartbtn}><BsBag  className='text-[20px]'/></li>
              </ul>

            </aside>
          </nav>

        </header>
      </div>

      {/* // offcanvas// */}
      <div className={login == true ? "activeForm" : "form "} >



        <div className="w-[650px] bg-white relative text-black text-center   mx-auto h-screen mt-[25px] overflow-y-auto   pb-[30px] border-2 ">
          <div className="bg-[#F9F9F9] pt-10">
            <div className="max-w-[540px] mx-auto">
              <h2 className='font-semibold text-[30px]'>Welcome back!</h2>
              <p className=' font-semibold'>Log in to enjoy your perks</p>
              <div className="grid grid-cols-3 gap-[5px] font-semibold text-[14px] pb-5 mt-5">
                <div className=" text-center">
                  <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none"><g clip-path="url(#clip0_2406_20469)"><path d="M18.9397 16.0898C18.9397 15.7398 18.8797 15.3898 18.7697 15.0498C18.7397 14.9398 18.6997 14.8298 18.6497 14.7298C18.3397 13.9998 17.7997 13.3998 17.1097 13.0298C16.9097 12.9298 16.7097 12.8398 16.4897 12.7798C16.2697 12.7098 16.0497 12.6698 15.8197 12.6498C15.5897 12.6298 15.3497 12.6298 15.1197 12.6498C14.8897 12.6798 14.6697 12.7198 14.4597 12.7998C14.3497 12.8398 14.2497 12.8798 14.1497 12.9198C13.7097 13.1098 13.3197 13.3998 12.9997 13.7598C12.6797 14.1198 12.4297 14.5398 12.2797 15.0098C12.1297 15.4698 12.0697 15.9598 12.1097 16.4498C12.1497 16.9398 12.2897 17.4098 12.5297 17.8298C12.5497 17.8598 12.5697 17.8998 12.5897 17.9298C12.6497 18.0198 12.7097 18.1198 12.7697 18.1998C13.1997 18.7898 13.7997 19.2298 14.4897 19.4598C15.1797 19.6798 15.9197 19.6798 16.5997 19.4398C17.2797 19.2098 17.8797 18.7598 18.2997 18.1498C18.7197 17.5498 18.9397 16.8298 18.9297 16.0898V16.0698L18.9397 16.0898Z" fill="black"></path><path d="M8.08 3.31982L0 6.02982L5.66 23.6598C10.35 19.3498 11.28 11.8198 8.08 3.31982Z" fill="black"></path><path d="M21.8598 0.000234375L11.2598 0.150234C11.3498 6.14023 16.1598 10.9202 22.0198 10.8302L21.8698 -0.00976562L21.8598 0.000234375Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20469"><rect width="22.02" height="23.66" fill="white"></rect></clipPath></defs></svg>
                  <h5>Frank's Club</h5>
                  <p>Earn points, get rewards</p>
                </div>
                <div className=" text-center">
                  <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none"><g clip-path="url(#clip0_2406_20478)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.94055 11.3201L11.3705 20.7501C11.5905 20.9701 11.9505 20.9701 12.1805 20.7501L21.6105 11.3201C24.2005 8.73006 24.2005 4.53006 21.6105 1.94006C19.0205 -0.649941 14.8205 -0.649941 12.2305 1.94006C11.8705 2.30006 11.7805 2.46006 11.7805 2.46006C11.7805 2.46006 11.4905 2.11006 11.3305 1.94006C8.73055 -0.649941 4.53055 -0.649941 1.94055 1.94006C-0.649453 4.53006 -0.649453 8.73006 1.94055 11.3201Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20478"><rect width="23.56" height="20.92" fill="white"></rect></clipPath></defs></svg>
                  <h5>Wishlist</h5>
                  <p>Save your favourites across devices</p>
                </div>
                <div className=" text-center">
                  <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"><g clip-path="url(#clip0_2406_20485)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0208 8.73C-0.0492 9.1 0.0608 9.49 0.3008 9.78L10.8608 22.31C11.3108 22.85 12.1208 22.92 12.6608 22.46L21.7708 14.78C22.3108 14.33 22.3808 13.52 21.9208 12.98L11.3608 0.45C11.1108 0.16 10.7508 0 10.3808 0L2.3008 0.03C1.8808 0.03 1.5208 0.33 1.4508 0.75L0.0208 8.73ZM4.8308 3.93C5.2208 3.58 5.8508 3.61 6.2108 4.05C6.5308 4.44 6.4908 5.07 6.0908 5.43C5.6608 5.75 5.0708 5.71 4.7108 5.31C4.3608 4.88 4.3908 4.29 4.8308 3.93Z" fill="black"></path></g><defs><clipPath id="clip0_2406_20485"><rect width="22.21" height="22.77" fill="white"></rect></clipPath></defs></svg>
                  <h5>Early access</h5>
                  <p>Exclusive sale perks</p>
                </div>

              </div>

            </div>
            <div className=" text-[30px] cursor-pointer absolute top-2 right-2" onClick={userbtn}>
              <RxCross2 />
            </div>
          </div>

          <div className="max-w-[560px] mx-auto mt-5">
            <div className="w-full border-[1px] border-[rgb(153,153,153)] my-2 py-2 px-2">
              <input type="text" className='w-full outline-none ps-3' placeholder='Email Address' />
            </div>
            <div className="w-full border-[1px] border-[rgb(153,153,153)] mt-4  py-2 flex px-2">
              <input type={Showpass == true ? "text" : "password"} className='w-[94%] outline-none ps-3' placeholder='Password' />
              <button onClick={pass} className=' underline hover:no-underline'>{Showpass == true ? "hide" : "show"}</button>
            </div>
            <p className='underline hover:no-underline text-start cursor-pointer mt-1 font-semibold text-[15px]'>Forgot Password?</p>

            <button className='w-full bg-black py-3 mt-4 text-[18px] text-center font-semibold text-white'>Log In</button>
          </div>
          <div className="max-w-[543px] mx-auto">
            <div className="flex my-8 items-center">
              <div className=" border-t-[2px] w-[41%]"></div>
              <div className="mx-2 font-semibold text-[14px]">Social Login</div>
              <div className="border-t-[2px] w-[41%]"></div>
            </div>
            <div className="flex justify-between ">
              <div className="w-[48%] flex items-center border-2 border-black px-[10px] py-2 hover:bg-[rgb(205,204,204)] hover:duration-[0.3s] cursor-pointer">
                <BiLogoFacebook className='text-[22px]' />
                <p className='font-semibold ms-[15%]'>Sign in with Facebook
                </p>
              </div>
              <div className="w-[48%] flex items-center border-2 border-black px-[10px] py-2 hover:bg-[rgb(205,204,204)] cursor-pointer hover:duration-[0.3s]">
                <FaGoogle />
                <p className='font-semibold ms-[15%]'> Sign in with Google</p>
              </div>

            </div>
            <div className="flex my-8 items-center">
              <div className=" border-t-[2px] w-[38%]"></div>
              <div className="mx-2 font-semibold text-[13px]">Create an account</div>
              <div className="border-t-[2px] w-[38%]"></div>
            </div>
            <div className="flex justify-center items-center ">
              <p className='flex items-center'>Don't have an account?  <span className='underline flex items-center '>Sign up <HiOutlineArrowSmRight className='text-[25px] mt-2 ms-1' /></span>
              </p>

            </div>


          </div>

        </div>

      </div>
      {/* // offcanvas end// */}

      {/* // Menu Start// */}

      <div className={`${showmenu == true ? "showmenu " : " menubar  "} lg:hidden block overflow-y-auto`}>
        <div className=" ">
          <div className="flex justify-between px-[10px] py-2 bg-[#F9F9F9]">
            <div className="">
              <IoSearchOutline className='font-bold text-[28px]' />
            </div>
            <div className="">
              <RxCross2 className='font-bold text-[28px]' onClick={menu} />
            </div>
          </div>
          <div className="">
            <ul className='flex gap-3 font-semibold bg-[#EBECEE] justify-center '>
              <li className='bg-[#EBECEE] hover:bg-white text-black px-2 py-1'>This Just In
                <div className="bg-[#f9f9f9]">
                  <div className="flex"></div>
                </div>
              </li>
              <li className=' bg-[#EBECEE] hover:bg-white text-black px-2 py-1'>Women</li>
              <li className=' bg-[#EBECEE] hover:bg-white text-black px-2 py-1'>Men</li>
              <li className=' bg-[#EBECEE] hover:bg-white text-black px-2 py-1'>Our Story</li>
            </ul>
          </div>
        </div>
      </div>


      {/* // Menu end// */}

      {/* cart side start */}
      <div className={ShowCart==true ?"activecartside  fixed w-[100%] bg-[rgba(0,0,0,0.5)] h-screen z-[99] top-0 cartside":"cartside  fixed w-[100%] bg-[rgba(0,0,0,0.5)] h-screen z-[99] top-0 cartside"}  >
     
      
        <div className={ShowUnderCart==true ? "activeundercart  w-[560px] fixed h-screen  bg-white top-0":"undercart  w-[560px] fixed  h-screen  bg-white top-0"}>
          <div className=" flex gap-2 items-center bg-[#f7f5f5] py-2 text-[15px] font-semibold px-8">  <HiArrowLongLeft className=' text-[25px] cursor-pointer'  onClick={cartbtn}/>Continue Shopping      </div>

          <div className="bg-black py-1 text-center font-[700] text-white text-[14px]"> Free shipping on orders $99+ and free returns </div>

          <div className="bg-[#eeeded] px-8 mt-14 py-2  font-semibold mb-5">Most popular right now</div>


          <Slider {...settings}>

            <div className=""> 
              <div className="flex gap-3">

              <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130302-2AY.01_450x.jpg?v=1721141422" className="w-[95px]" alt="" />
              <div className="">
                <div className="flex   ">
                <h5 className='text-[14px] font-semibold'>The SeaCell™ Crewneck Cardigan  in Dark Chocolate</h5>

                <p className=' text-[14px]'>$149.00</p>

                </div>

                <select name="" id="" className='border-[1px] outline-none my-3 py-1 text-[14px] px-1' >
                <option value=""  className=' border-b-2 border-black bg-[#F9F9F9]' >select a size </option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                <div className="">
                <button className='px-4 border-2 border-black cartbtn py-1.5 text-black font-semibold'>Add To Cart</button>
                </div>

                
              </div>

              </div>

            </div>

            <div className=""> 
              <div className="flex gap-3">

              <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310173-5JR.01_450x.jpg?v=1721145183" className="w-[95px]" alt="" />
              <div className="">
                <div className="flex   ">
                <h5 className='text-[14px] font-semibold'>The Zip Up Bomber Jacket in Light Beige</h5>

                <p className=' text-[14px]'>$149.00</p>

                </div>

                <select name="" id="" className='border-[1px] outline-none my-3 py-1 text-[14px] px-1' >
                <option value=""  className=' border-b-2 border-black bg-[#F9F9F9]' >select a size </option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                <div className="">
                <button className='px-4 border-2 border-black cartbtn py-1.5 text-black font-semibold'>Add To Cart</button>
                </div>

                
              </div>

              </div>

            </div>

            <div className=""> 
              <div className="flex gap-3">

              <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130297-4BO.01_450x.jpg?v=1723489145" className="w-[95px]" alt="" />
              <div className="">
                <div className="flex   ">
                <h5 className='text-[14px] font-semibold'>The Button-Up Sweater Vest in Space Blue</h5>

                <p className=' text-[14px]'>$149.00</p>

                </div>

                <select name="" id="" className='border-[1px] outline-none my-3 py-1 text-[14px] px-1' >
                <option value=""  className=' border-b-2 border-black bg-[#F9F9F9]' >select a size </option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                <div className="">
                <button className='px-4 border-2 border-black cartbtn py-1.5 text-black font-semibold'>Add To Cart</button>
                </div>

                
              </div>

              </div>

            </div>

            <div className=""> 
              <div className="flex gap-3">

              <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2410188-556.01_740a0100-37b5-4e64-bb3a-b10666642a6d_450x.jpg?v=1723646019" className="w-[95px]" alt="" />
              <div className="">
                <div className="flex   ">
                <h5 className='text-[14px] font-semibold'>The Skyline Maxi Hooded Coat in Rosin</h5>

                <p className=' text-[14px]'>$149.00</p>

                </div>

                <select name="" id="" className='border-[1px] outline-none my-3 py-1 text-[14px] px-1' >
                <option value=""  className=' border-b-2 border-black bg-[#F9F9F9]' >select a size </option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                <div className="">
                <button className='px-4 border-2 border-black cartbtn py-1.5 text-black font-semibold'>Add To Cart</button>
                </div>

                
              </div>

              </div>

            </div>

            <div className=""> 
              <div className="flex gap-3">

              <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110377-012.01_450x.jpg?v=1722283940" className="w-[95px]" alt="" />
              <div className="">
                <div className="flex   ">
                <h5 className='text-[14px] font-semibold'>The Fluid Camp Collar Blouse in White</h5>

                <p className=' text-[14px]'>$149.00</p>

                </div>

                <select name="" id="" className='border-[1px] outline-none my-3 py-1 text-[14px] px-1' >
                <option value=""  className=' border-b-2 border-black bg-[#F9F9F9]' >select a size </option>
                  <option value="">XXS</option>
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
                <div className="">
                <button className='px-4 border-2 border-black cartbtn py-1.5 text-black font-semibold'>Add To Cart</button>
                </div>

                
              </div>

              </div>

            </div>

           
           
           
            
          

            </Slider>

            <div className="   w-[100%] absolute  bottom-0 py-3 bg-[#e9e8e8]">
              <div className="flex justify-between px-8 mb-3">
                <h5 >Subtotal  <span  className='text-[#1d1d1d] text-[15px]'> (0 items)</span> </h5>
                <p className='text-black'>$0.00</p>
               
              </div>
              <button className='text-center bg-[#5f5f60] mx-auto  py-2 text-white text-[20px] flex justify-center items-center gap-2 w-[90%]'>Secure Checkout <VscLockSmall /></button>
            </div>

        </div>                                                                                                              
        </div>

          {/* cart side end */}



            {/* search box start */}
           
            <div className={ShowSearch==true ? "activesearchbox  w-full fixed bg-white h-screen top-[55px] z-[50]":"searchbox  w-full fixed bg-white h-screen top-[55px] z-[50]"}>
              <div className="w-[1455px]  h-screen mx-auto">
                <div className="flex border-b-2 py-2 justify-between">
                  <input type="text" name="" className='w-full placeholder:text-[#939393] placeholder:text-[20px] outline-none' placeholder='Search' id="" />
                  <IoIosArrowRoundForward className=' w-[60px] h-[35px] border-[1px] border-[#B5C1BE] text-[#B5C1BE] rounded-full' />

                </div>

                <div className="grid grid-cols-[20%_auto] ">
                  <div className="pe-10"> 
                    <p className='text-[18px] font-semibold mt-5'>Recently Searched</p>
                    <h6 className='no-underline hover:underline mt-2 mb-6 '>"Skyline"</h6>
                    <hr />
                    
                    <h5 className='text-[18px] font-semibold my-4'>Trending Searches</h5>
                    <div className=" flex flex-wrap gap-2">
                    <button className='px-2.5 py-1 border-[1px] border-black hover:bg-black hover:text-white hover:duration-[0.3s] font-semibold'>Sweaters</button>
                    <button className='px-2.5 py-1 border-[1px] border-black hover:bg-black hover:text-white hover:duration-[0.3s] font-semibold'>Skyline</button>
                    <button className='px-2.5 py-1 border-[1px] border-black hover:bg-black hover:text-white hover:duration-[0.3s] font-semibold'>Jackets</button>
                    <button className='px-2.5 py-1 border-[1px] border-black hover:bg-black hover:text-white hover:duration-[0.3s] font-semibold'>Shirts</button>
                    <button className='px-2.5 py-1 border-[1px] border-black hover:bg-black hover:text-white hover:duration-[0.3s] font-semibold'>Denim</button>
                    </div>
                  </div>
                  <div className="  overflow-y-auto h-screen "> 
                    <p className='text-[18px] font-semibold mt-5'>Trending Products</p>

                    <div className="grid grid-cols-4 gap-4 gap-y-14 mt-6 ">
                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130299-5IA.01_71b90a3a-6738-4038-9118-eb288d7b2e8d_900x.jpg?v=1726770606" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130302-2AY.01_900x.jpg?v=1721141422" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2110377-012.01_900x.jpg?v=1722283940" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130296-4BO.01_900x.jpg?v=1721140932" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2130296-6BB.01_900x.jpg?v=1721141144" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510545-012.01_900x.jpg?v=1722449653" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2510552-1BS.01_900x.jpg?v=1721157352" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      <div className="mb-32">
                      <img src="https://cdn.shopify.com/s/files/1/0555/5722/6653/files/2310173-5JR.01_900x.jpg?v=1721145183" alt="" />
                      <p className='my-3'>The Openwork Crewneck Sweater in Jade Green</p>
                      <span className='text-red-500 font-semibold'><del className='text-black'>$149.00</del> $110.00</span>
                      </div>

                      

                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
           

    </>
  )
}

export default Header


