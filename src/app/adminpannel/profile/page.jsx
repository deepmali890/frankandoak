"use client"
import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import mainlogo from "../../images/nikita.jpg"
import Image from 'next/image';
import prologo from '../../images/download (12).svg'
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { IoEyeOff } from "react-icons/io5";


function page() {

    const[showPass,setShowPass]=useState(false)


    let pass=()=>{
        setShowPass(!showPass)
    }
  return (
    <>

    <div className="w-full overflow-y-auto right  pb-8 ">
        <div className="w-full rounded-lg  border-[1px]  ">
            <h4 className="bg-[#F8F8F9] py-3 font-bold text-[25px] rounded-t-lg px-4">Profile</h4>
            <div className="px-4 grid grid-cols-2 bg-white pt-9 ">
                <div className="">

                <p>Name</p>
                <input type="text"  className=" w-full border-[1px] py-1 rounded-lg outline-none my-4"/>

                <p>Social Link</p>
                <div className=" flex gap-6 items-center my-4">
                <RiFacebookFill className="text-[25px]" />
                <input type="text" className=" w-full border-[1px] py-1 rounded-lg outline-none " />
                </div>

                <div className=" flex gap-6 items-center my-4">
                <CiInstagram className="text-[25px]" />
                <input type="text" className=" w-full border-[1px] py-1 rounded-lg outline-none " />
                </div>

                <div className=" flex gap-6 items-center my-4">
                <FaYoutube className="text-[25px]" />
                <input type="text" className=" w-full border-[1px] py-1 rounded-lg outline-none " />
                </div>

                <div className=" flex gap-6 items-center my-4">
                <FaXTwitter className="text-[25px]" />
                <input type="text" className=" w-full border-[1px] py-1 rounded-lg outline-none " />
                </div>

                <div className="mb-4">
                    <p>Logo</p>
                    <Image src={prologo} className="w-[50px] h-[50px] py-1"/>
                    <input type="file"  className=" w-full border-[1px] cursor-pointer py-1 rounded-lg outline-none my-4"/>
                </div>

                <div className="mb-4">
                    <p>Favicon</p>
                    <Image src={prologo} className="w-[50px] h-[50px] py-1"/>
                    <input type="file"  className=" w-full border-[1px] cursor-pointer py-1 rounded-lg outline-none my-4"/>
                </div>
                <div className="mb-4">
                    <p>FooterLogo</p>
                    <Image src={prologo} className="w-[50px] h-[50px] py-1"/>
                    <input type="file"  className=" w-full border-[1px] cursor-pointer py-1 rounded-lg outline-none my-4"/>
                </div>

                <div className="">
                    <p>password</p>
                    <div className="border-[1px] rounded-lg my-4 flex items-center px-2">
                    <input type={showPass==true ? "text":"password"}  className=" w-full  py-1  outline-none "/>
                    <div className=" cursor-pointer" onClick={pass}>
                   {showPass==true ?  <IoEye  /> :<IoEyeOff /> } 
                    </div>
                    
                    </div>
                </div>
                
                

                </div>


                <div className=" flex flex-col items-center mt-[70px] "> 

                    <Image src={mainlogo} className="w-[200px] h-[200px] rounded-full"/>
                    <p>Profile Image</p>
                    
                </div>
                <div className="my-6">
                    <button className="px-12 text-white py-2 bg-[#5351C9] rounded-lg text-center">Update</button>
                </div>
            </div>
        </div>



        <div className="w-full rounded-lg mb-14  border-[1px] mt-6 ">
        <h4 className=" py-3 font-bold text-[25px] bg-white rounded-t-lg px-4">Update Email</h4>

            <div className="bg-[#F8F8F9]">
        <div className="px-8 py-10  ">
            <p className="">Current Email</p>
            <input type="text"  className=" w-full border-[1px] py-1 rounded-lg outline-none mt-4"/>
        </div>

        <div className="px-8  ">
            <p className="">OTP</p>
            <input type="text"  className=" w-full border-[1px] py-1 rounded-lg outline-none mb-0.5 ps-3" placeholder="Enter OTP"/>
            <input type="text"  className=" w-full border-[1px] py-1 rounded-lg outline-none  ps-3" placeholder="Enter new email"/>
        </div>

        <button type="button" class="w-[150px] h-[40px] rounded-md text-black  my-[30px]">otpBtnText</button>

                <div className="my-6 ms-4">
                    <button className="px-8 text-white py-2 bg-[#5351C9] rounded-lg text-center">Update Email</button>
                </div>


        </div>
        
      
            
        
        </div>
      
    </div>

 
    </>

  )
}

export default page
