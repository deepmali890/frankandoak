
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useState } from 'react';


function Leftside() {

  const [sizeOpen, setSizeOpen] = useState(false)
  const [colorOpen, setColorOpen] = useState(false)
  const [parentCatOpen, setparentCatOpenOpen] = useState(false)
  const [productCatOpen, setproductCatOpen] = useState(false)
  const [productOpen, setproductOpen] = useState(false)
  const [storyOpen, setStoryOpen] = useState(false)
  const [sliderOpen, setSliderOpen] = useState(false)

  let sizebtn = () => {
    setSizeOpen(!sizeOpen)
  }
  return (
    <>
      <div className=" text-center border-b-[1px] border-solid border-[#323A49] text-[24px] text-white py-3">Frank and Oak</div>

      <div className=" h-[78vh] overflow-y-auto left">
        <div className=" w-[287px] mx-auto mt-2 ">
          <ul className=" text-white flex flex-col gap-1  ">
            <Link href="/adminpannel"> <li className=" py-3 cursor-pointer flex gap-5 items-center ps-5 bg-[#2A303D] rounded-lg">
              <AiOutlineDashboard className=" text-[#7D8087]  text-[20px]" />
              <span>Dashboard</span>
            </li>
            </Link>

            <Link href="/adminpannel/profile"><li className="flex gap-5  py-3 items-center cursor-pointer hover:bg-[#2A303D] ps-5 rounded-lg">
              <CiSettings className="text-[20px] text-[#7D8087] " />
              <span>Profile</span>
            </li>
            </Link>

          </ul>
        </div>
        <h4 className="text-center py-3 font-bold text-[#7D8087]" >Ecommerce Components</h4>

        <div className="w-[287px] mx-auto mt-5 ">
          <ul className="text-white">
            <div className="hover:bg-[#2A303D] " onClick={sizebtn}>

              <div className=" flex justify-between items-center cursor-pointer ">
              <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg" >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m18.19 12.44-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V6.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8.07 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.38 1.81-1 2.44V6.5a2.5 2.5 0 0 0-5 0v2.44c-.62-.63-1-1.49-1-2.44z"></path></svg>
                <span>Size</span>

              </li>
              <p className=" pr-7">{sizeOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
              </p>
              </div>
              {sizeOpen && (
              
                  <ul className="items-center ps-5">
                   <Link href={"/adminpannel/size/addsize"}><li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                      <span> Size Details</span>
                    </li>
                    </Link> 
                     
                    <Link href={"/adminpannel/size/viewsize"}>
                    <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                      <span>View Sizes</span>
                    </li>
                    </Link>
                  </ul>





              )}
            </div>
              
              <div className="hover:bg-[#2A303D] " onClick={()=>setColorOpen(!colorOpen)}>
              
              <div className=" flex justify-between items-center cursor-pointer ">

            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Droplet"><path d="M12,21.936A7.27,7.27,0,0,1,7.656,20.5c-2.332-1.724-3.187-5.6-1.868-8.46l4.875-9.173A1.515,1.515,0,0,1,12,2.064h0a1.512,1.512,0,0,1,1.337.805L18.2,12.017c1.331,2.888.475,6.762-1.856,8.485A7.274,7.274,0,0,1,12,21.936ZM12,3.064a.51.51,0,0,0-.456.274L6.683,12.485c-1.1,2.4-.376,5.777,1.568,7.212a6.4,6.4,0,0,0,7.5,0c1.942-1.435,2.668-4.817,1.554-7.237l-4.85-9.122A.507.507,0,0,0,12,3.064Z"></path></g></svg>
              <span>Color</span>
            </li>

            <p className=" pr-7">{colorOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
            </div>

            {colorOpen && (
              
              <ul className="items-center ps-5">
               <Link href={"/adminpannel/color/add-colors"}> <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span> Add Color</span>
                </li>
                </Link>

                <Link href={"/adminpannel/color/view-color"}>
                <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>View Color</span>
                </li>
                </Link>
              </ul>





          )}
        </div>
          

            <div className="hover:bg-[#2A303D] " onClick={()=>setparentCatOpenOpen(!parentCatOpen)}>

            <div className=" flex justify-between items-center cursor-pointer ">
            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h16v2h-16zM0 4h10v2h-10zM0 10h10v2h-10zM0 7h16v2h-16zM0 13h16v2h-16z"></path></svg>
              <span>Parent Category</span>
              </li>

              
            <p className=" pr-7">{parentCatOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
              </div>
              

              {parentCatOpen && (
              
              <ul className="items-center ps-5">
              <Link href={"/adminpannel/category/add-category"}>  <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span> Add Category</span>
                </li>
                </Link>

              <Link href={"/adminpannel/category/view-category"}>  <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>View Category</span>
                </li>
                </Link>
              </ul>





          )}
            


            </div>

            <div className="hover:bg-[#2A303D] " onClick={()=>setproductCatOpen(!productCatOpen)}>

            <div className=" flex justify-between items-center cursor-pointer ">

            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 18 4 L 18 13 L 9.6875 13 C 9.457031 12.457031 9.089844 11.730469 8.46875 10.90625 C 7.414063 9.503906 5.605469 8 3 8 L 3 10 C 4.855469 10 6.046875 10.996094 6.875 12.09375 C 7.664063 13.140625 7.96875 14.125 8 14.21875 C 8.082031 17.609375 10.082031 20.539063 12.9375 22 C 11.320313 22.035156 10 23.375 10 25 C 10 26.644531 11.355469 28 13 28 C 14.644531 28 16 26.644531 16 25 C 16 24.113281 15.617188 23.300781 15 22.75 C 15.644531 22.898438 16.3125 23 17 23 L 20 23 C 20.6875 23 21.355469 22.898438 22 22.75 C 21.382813 23.300781 21 24.113281 21 25 C 21 26.644531 22.355469 28 24 28 C 25.644531 28 27 26.644531 27 25 C 27 23.375 25.679688 22.035156 24.0625 22 C 26.695313 20.652344 28.589844 18.054688 28.9375 15 C 28.96875 14.710938 28.996094 14.421875 29 14.125 C 29 14.105469 29 14.082031 29 14.0625 C 29 14.0625 29.007813 13.898438 29 13.625 L 29 13 L 28.9375 13 C 28.863281 12.042969 28.664063 10.59375 27.9375 9.0625 C 26.746094 6.554688 24.046875 4 19 4 Z M 20 6.125 C 23.613281 6.421875 25.292969 8.121094 26.15625 9.9375 C 26.746094 11.183594 26.878906 12.230469 26.9375 13 L 20 13 Z M 10.21875 15 L 26.78125 15 C 26.273438 18.363281 23.5 21 20 21 L 17 21 C 13.5 21 10.726563 18.363281 10.21875 15 Z M 13 24 C 13.5625 24 14 24.4375 14 25 C 14 25.5625 13.5625 26 13 26 C 12.4375 26 12 25.5625 12 25 C 12 24.4375 12.4375 24 13 24 Z M 24 24 C 24.5625 24 25 24.4375 25 25 C 25 25.5625 24.5625 26 24 26 C 23.4375 26 23 25.5625 23 25 C 23 24.4375 23.4375 24 24 24 Z"></path></svg>
              <span>Product Category</span>
            </li>

            <p className=" pr-7">{productCatOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
            </div>

            {productCatOpen && (
              
              <ul className="items-center ps-5">
             <Link href={"/adminpannel/productcategory/addProduct-category"}>   <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Add Product Category</span>
                </li>
                </Link>

               <Link href={"/adminpannel/productcategory/viewProduct-category"}> <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>View Product Category</span>
                </li>
                </Link>
              </ul>





          )}
            </div>

            <div className="hover:bg-[#2A303D] " onClick={()=>setproductOpen(!productOpen)}>

            <div className=" flex justify-between items-center cursor-pointer ">

            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"></path></svg>
              <span>Product</span>
            </li>
            <p className=" pr-7">{productOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
            </div>

            {productOpen && (
              
              <ul className="items-center ps-5">
             <Link href={"/adminpannel/product/add-product"}>   <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Add Product</span>
                </li>
                </Link>

              <Link href={"/adminpannel/product/viewproduct"}> <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>View Product</span>
                </li>
                </Link> 
              </ul>





          )}
            </div>


            <div className="hover:bg-[#2A303D] " onClick={()=>setStoryOpen(!storyOpen)}>

            <div className=" flex justify-between items-center cursor-pointer ">

            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.7217 1.84998 3.34851 3.90636 2.76336 4.99997H4.5C4.77614 4.99997 5 5.22383 5 5.49997C5 5.77611 4.77614 5.99997 4.5 5.99997H1.5C1.22386 5.99997 1 5.77611 1 5.49997V2.49997C1 2.22383 1.22386 1.99997 1.5 1.99997C1.77614 1.99997 2 2.22383 2 2.49997V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7 10V5.00001H8V10H7Z" fill="currentColor"></path></svg>
              <span>Story</span>
              
            </li>
            <p className=" pr-7">{storyOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
            </div>

            {storyOpen && (
              
              <ul className="items-center ps-5">
               <Link href={"/adminpannel/story/add-story"}>   <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Story Details</span>
                </li>
                </Link>

                <Link href={"/adminpannel/story/viewstory"}>
                <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Story View</span>
                </li>
                </Link>
              </ul>





          )}
            </div>

            <div className="hover:bg-[#2A303D] " >
            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 24H2v-4h20v4zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06zm4.82 2.68-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83z"></path></svg>

              <span>Order</span>
            </li>
            </div>
            

            <div className="hover:bg-[#2A303D] " onClick={()=>setSliderOpen(!sliderOpen)}>

            <div className=" flex justify-between items-center cursor-pointer ">

            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.7217 1.84998 3.34851 3.90636 2.76336 4.99997H4.5C4.77614 4.99997 5 5.22383 5 5.49997C5 5.77611 4.77614 5.99997 4.5 5.99997H1.5C1.22386 5.99997 1 5.77611 1 5.49997V2.49997C1 2.22383 1.22386 1.99997 1.5 1.99997C1.77614 1.99997 2 2.22383 2 2.49997V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7 10V5.00001H8V10H7Z" fill="currentColor"></path></svg>
              <span>Slider</span>
            </li>
            <p className=" pr-7">{storyOpen==true ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>:  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="m-1 text-[#ffffff6a]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>}
            
            </p>
            </div>

            {sliderOpen && (
              
              <ul className="items-center ps-5">
                <Link href={"/adminpannel/slider/addslider"}>
                <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Slider Details</span>
                </li>
                </Link>
                
                <Link href={"/adminpannel/slider/viewslider"}>
                <li className="flex py-3 cursor-pointer gap-5 items-center rounded-lg">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="5px" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
                  <span>Slider View</span>
                </li>
                </Link>
              </ul>





          )}
            </div>


            <li className="flex py-3 cursor-pointer gap-5 items-center ps-5 rounded-lg">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#ffffff6a] my-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"></path></svg>
              <span>Terms & Conditions</span>
            </li>

          </ul>
        </div>
      </div>

      <div className="  border-b-[1px] border-solid border-[#323A49] text-[24px] py-6"></div>
      <div className=" flex justify-end py-2">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[25px] text-[#ffffff6a] hover:text-[#ffffff9a] mx-[20px] cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Logout"><g><path d="M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z"></path><path d="M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z"></path></g></g></svg>
      </div>

    </>

  )
}

export default Leftside
