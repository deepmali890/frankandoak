"use client"
import React from 'react'
import Leftside from '../Leftside'
import avatar from '../images/nikita.jpg'
import Image from 'next/image'
import { useState } from 'react';




function layout( {children}) {
  const [Sidebar,setSidebar]=useState(false)

  let hello = () => {
    setSidebar(!Sidebar)
  }
  return (
    <div>
          <div className="w-full h-screen flex ">
        <div className={`${Sidebar==true ? " sidebar w-[20%] ":"activeleft "}  bg-[#212631] `}><Leftside/></div>
       

        <div className="w-full overflow-y-auto">
        <div className="max-w-full shadow-xl sticky top-0 z-[99] bg-white  ">
        <nav className="w-[95%]  mx-auto py-3 flex justify-between">
            <aside className=" flex gap-4 items-center">
            <div onClick={hello}>
            <svg  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="cursor-pointer text-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352" ></path></svg>
            </div>
        <p className="font-[200] text-[#303640]">Dashboard</p>
     
        </aside>
        <aside>
   
        <Image src={avatar} className="w-10 h-10 rounded-full" />
        </aside>
        </nav>
        <hr />
        <p className="w-[95%]  mx-auto">/dashboard</p>
    </div>

    
          <div className=" w-full bg-[#F8F8F9] pt-12 pb-8 ">
          <div className="w-[90%] mx-auto  ">
          {children}
          </div>
          </div>
          <div class="w-full bg-white border-t border-[#dbdfe6] h-[45px] p-[10px] text-center fixed bottom-0 box-border">developed@admin.com</div>
          </div>
    </div>
    </div>
  )
}

export default layout
