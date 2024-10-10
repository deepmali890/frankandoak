import React from 'react'

function page() {
  return (
    <div className="w-full pb-8 ">
    <div className="w-full rounded-t-lg  border-[1px]">
    <h4 className="bg-[#F8F8F9]  py-3  text-[25px] font-bold rounded-t-lg px-4">Add Category</h4>
    <div className="px-10  bg-white pt-9 pb-6 rounded-b-lg  ">
        <div className="mb-5">
        <p>Category Name</p>
        <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Category Name"/>
        </div>

        <div className="mb-5">
        <p>Category Image</p>
        <input type="file" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 "/>
        </div>

        <div className="">
        <p>Category Description</p>
        <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
        <option value="">Men</option>
        <option value="">Women</option>
        <option value="">Kids</option>
        </select>
        </div>

        <div className="">
        <p>Category Description</p>
        <textarea type="text" className=" w-full border-[1px]  rounded-lg outline-none my-3 ps-2" />
        </div>

       

         <div className=" flex gap-4 mt-6 pb-4">
        <div className=""><p>Status</p></div>
        <div className=" flex gap-2">
        <input type="radio" name="my gender" id=""   className=' cursor-pointer'/>Display
        <input type="radio" name="my gender" id=""  className=' cursor-pointer'/>Hide
    
        </div>
      </div> 

      <button className="px-4 text-white py-2 mt-4  bg-[#5351C9] rounded-lg text-center">Add Size</button>


    </div>
    </div>
</div>
  )
}

export default page
