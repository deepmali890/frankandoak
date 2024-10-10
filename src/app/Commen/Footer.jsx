"use client"
import Image from 'next/image'
import React from 'react'
import lastlogo from '../images/download (4).svg'
import img1 from '../images/download (5).svg'
import img2 from '../images/download (8).svg'
import img3 from '../images/download (9).svg'
import img4 from '../images/download (6).svg'
import img5 from '../images/download (7).svg'
import img6 from '../images/download (10).svg'
import certified from '../images/download (11).svg'


function Footer() {
  return (
    <div className='max-w-[100%] bg-black text-white p-1 mt-14 pb-14'>


      <div className="max-w-[1400px] mx-auto ">
     <div className="grid grid-cols-4 mt-10 items-center">
            <div className="text-center">
              <img src="https://www.frankandoak.com/cdn/shop/files/Shipping-black_2_cf60e41b-4164-4db3-b59f-2bb25b09caac_40x.png?v=1726686230" alt=""  className='mx-auto my-2'/>
              <h3 className='text-[20px] font-semibold'>Free Shipping</h3>
              <p className='text-[14px] font-semibold my-2'>On orders over $99.</p>
            </div>
            <div className="text-center">
              <img src="https://www.frankandoak.com/cdn/shop/files/Returns-black_b36d98cd-0487-4c6b-ac9b-d8ed7bfc1e8c_40x.png?v=1726686222" alt=""  className='mx-auto my-2'/>
              <h3 className='text-[20px] font-semibold'>Free Returns</h3>
              <p className='text-[14px] font-semibold my-2'>Only keep what you love.</p>
            </div>
            <div className="text-center">
              <img src="https://www.frankandoak.com/cdn/shop/files/Group_127_40x.png?v=1726686224" alt=""  className='mx-auto my-2'/>
              <h3 className='text-[20px] font-semibold'>Frank's Club</h3>
              <p className='text-[14px] font-semibold my-2'>Earn points and get rewards.</p>
            </div>
            <div className="text-center">
              <img src="https://www.frankandoak.com/cdn/shop/files/Sezzle_9ab1dcbb-d292-4804-b790-34119522631b_40x.png?v=1726686214" alt=""  className='mx-auto my-2'/>
              <h3 className='text-[20px] font-semibold'>Buy Now, Pay Later</h3>
              <p className='text-[14px] font-semibold my-2'>Select Klarna at checkout.</p>
            </div>
     </div>
      </div>

      <div className="max-w-[1375px]  justify-between mx-auto flex my-24">
        <div className="w-[71%] grid grid-cols-4 gap-[40px] ">
          <div className="">
            <Image src={lastlogo} className=''/>
            <div className="flex gap-2 my-6">
            <Image src={img1} className=''/>
            <Image src={img2} className=''/>
            <Image src={img3} className=''/>
            <Image src={img4} className=''/>
            <Image src={img5} className=''/>
            <Image src={img6} className=''/>
            </div>
            <div className="">
              <Image src={certified} className='w-[40px]'/>
            </div>


            
          </div>
          <div className="">
            <h4 className='text-[20px] font-[400] mb-4'>Our Story</h4>
            <ul className='font-semibold text-[14px]'>
              <li className='my-4'>Who we are</li>
              <li className='my-4'>Sustainable practices</li>
              <li className='my-4'>Design Ideology</li>
              <li className='my-4'>Fabrics</li>
              <li className='my-4'>Circular denim™</li>
              <li className='my-4'>Partners and factories</li>
            </ul>
          </div>
          <div className="">
            <h4 className='text-[20px] font-[400] mb-4'>Discover</h4>
            <ul className='font-semibold text-[14px]'>
              <li className='my-4'>Gift Cards</li>
              <li className='my-4'>Frank's Club</li>
              <li className='my-4'>Give $15, Get $15</li>
              <li className='my-4'>Affiliate</li>
              <li className='my-4'>Blog</li>
              <li className='my-4'>Work with us</li>
              <li className='my-4'>Our Stores</li>
            </ul>
          </div>
          <div className="">
            <h4 className='text-[20px] font-[400] mb-4'>Customer Care</h4>
          <ul className='font-semibold text-[14px]'>
            <li className='my-4'>Shipping Information</li>
            <li className='my-4'>Returns & Exchanges</li>
            <li className='my-4'>Coupon Codes</li>
            <li className='my-4'>F.A.Q.</li>
            <li className='my-4'>Terms & Conditions</li>
            <li className='my-4'>Refund Policy</li>
            <li className='my-4'>Privacy policy</li>
            <li className='my-4'>Accessibility Statement</li>
            <li className='my-4'>Customer Data Requests</li>
          </ul>
          </div>
          
        </div>
        <div className="w-[25%] ">
          <h4 className='text-[20px] font-[400] mb-4'>Stay in touch</h4>
          <p className='text-[12px] font-[400] '>Join our newsletter and stay in the know about new collections outfit inspiration, sales, and more.</p>
          <div className="my-4">
          <input type="email" name="" id=""  className='w-full border-[1px] bg-[rgba(54,54,54,0.5)] border-[#7D8281] my-2 ps-3 placeholder:text-white py-2'placeholder='Email'/>
          <input type="text" name="" id="" className='w-full border-[1px] bg-[rgba(54,54,54,0.5)] border-[#7D8281] my-2 py-2 ps-3 placeholder:text-white' placeholder='First Name' />
          </div>
          {/* <div className=" flex gap-4 text-white">
            <div className=""><p>I shop for</p></div>
            <div className=" flex gap-2">
            <input type="radio" name="my gender" id=""   className=' cursor-pointer'/>Women
            <input type="radio" name="my gender" id=""  className=' cursor-pointer'/>Men
            <input type="radio" name="my gender" id=""  className=' cursor-pointer '/>All
            </div>
          </div> */}
          <button className='w-full border-[white] border-2 py-3 text-[14px] mt-5  font-semibold  subscribe'>Subscribe</button>
        </div>
      </div>

        <div className="max-w-[1400px] mx-auto ">
      <p className='text-[12px]'>© Frank And Oak 2024 , All Rights Reserved.</p>
      </div>
      

    </div>
  )
}

export default Footer
