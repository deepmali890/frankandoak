import React from 'react'

function page() {
  return (
    <div  className="w-full  mb-12">
      <div className="w-full rounded-t-lg  border-[1px]">
      <h4 className="bg-[#F8F8F9]  py-3  rounded-t-lg px-4">Add  Colors</h4>

    
      <div className="px-4  bg-white pt-9 pb-6 rounded-b-lg  ">
            <div className="mb-5">
            <p>Color Name</p>
            <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Color Name"/>
            </div>

            <div className="">
            <p>Color Code</p>
            <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Color Code"/>
            </div>

            <div className="">
            <p>Color Picker</p>
            <input type="color" className="  border-[1px] rounded-lg outline-none my-3 " placeholder="Color Code"/>
            </div>

          

            <div class="w-[300px] my-[10px]"><span class="w-full h-[200px] object-contain my-[10px]"><img src="" alt="Select product" id="image_preview" width="300" height="200"/></span>
            <input type="file" name="image" id="image_src" class="category w-full border input rounded-[5px]"/>
            
            <span id="colorPicker" class="w-[100px] bg-[#5351c9] text-white cursor-pointer h-[30px] text-center rounded-[5px] box-border my-[30px] block border">Pick Color</span></div>


        </div>
           
      </div>
    </div>
  )
}

export default page
