import React from 'react'

function page() {
  return (
    <>
  
    <div className="w-full pb-8 h-[80vh]">
        <div className="w-full rounded-t-lg  border-[1px]">
        <h4 className="bg-[#F8F8F9]  py-3 font-bold text-[25px] rounded-t-lg px-4">Add Size</h4>
        <div className="px-4  bg-white pt-9 pb-6 rounded-b-lg  ">
            <div className="mb-5">
            <p>Size Name</p>
            <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Size Name"/>
            </div>

            <div className="">
            <p>Size Order</p>
            <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Size Order"/>
            </div>

             <div className=" flex gap-4 mt-6 pb-4">
            <div className=""><p>Display</p></div>
            <div className=" flex gap-2">
            <input type="radio" name="my gender" id=""   className=' cursor-pointer'/>Display
            <input type="radio" name="my gender" id=""  className=' cursor-pointer'/>Hide
        
            </div>
          </div> 

          <button className="px-4 text-white py-2 mt-4  bg-[#5351C9] rounded-lg text-center">Add Size</button>


        </div>
        </div>
    </div>
    </>
  )
}

export default page
