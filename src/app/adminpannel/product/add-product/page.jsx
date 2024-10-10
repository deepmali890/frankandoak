import React from 'react'

function page() {
  return (
    <div className="w-full pb-8 ">
    <div className="w-full rounded-t-lg  border-[1px]">
    <h4 className="bg-[#F8F8F9]  py-3 font-bold  text-[25px] rounded-t-lg px-4">Product Details</h4>
    <div className="px-10  bg-white pt-9 pb-6 rounded-b-lg  ">
        <div className="mb-5">
        <p>Product Name</p>
        <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Name"/>
        </div>

        <div className="">
        <p>Product Description</p>
        <textarea type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Description"/>
        </div>

        <div className="">
        <p>Short Description</p>
        <textarea type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Short Description"/>
        </div>

        <div className="">
        <p>Product Image</p>
        <input type="file" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Short Description"/>
        </div>

        <div className="">
        <p>Image Animation</p>
        <input type="file" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" placeholder="Short Description"/>
        </div>

        <div className=" flex gap-6">
       
        <div className="mb-5 w-full">
        <p>Price</p>
        <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Product Price"/>
        </div>
        <div className="mb-5 w-full">
        <p>MRP</p>
        <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Product MRP"/>
        </div>
        </div>

        <div className="">
            <p>Select Parent Category</p>
        <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
            <option value="" disable>--Select Parent Category--</option>
        <option value="">Men</option>
        <option value="">Women</option>
      
        </select>
        </div>

        <div className="">
            <p>Select  Product Category</p>
        <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
            <option value="" disable>--Select  Product Category--</option>
        <option value="">T-shirt</option>
        <option value="">Shirt</option>
      
        </select>
        </div>



        <div className=" flex gap-6">
       
       <div className="mb-5 w-full">
       <p>Manage Stock</p>
       <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
            <option value="" disable>--Select Stock--</option>
        <option value="">In Stock</option>
        <option value="">Out Of Stock</option>
      
        </select>
       </div>
       <div className="mb-5 w-full">
       <p>Brand Name</p>
       <input type="text" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2 " placeholder="Brand  "/>
       </div>
       </div>

       <div className=" flex gap-6">
       
       <div className="mb-5 w-full">
       <p>Size</p>
       <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
            <option value="" disable>--Select Size--</option>
        <option value="">S</option>
        <option value="">M</option>
        <option value="">L</option>
        <option value="">XL</option>
        <option value="">XXL</option>
      
        </select>
       </div>

       <div className="mb-5 w-full">
       <p>color</p>
       <select name="" id="" className=" w-full border-[1px] py-[6px] rounded-lg outline-none my-3 ps-2" >
            <option value="" disable>--Select  Color--</option>
        <option value="">RED</option>
        <option value="">ORANGE</option>
        <option value="">YELLOW</option>
        <option value="">WHITE</option>
       
      
        </select>
       </div>
       </div>

       

         <div className=" flex gap-4 mt-6 pb-4">
        <div className=""><p>Status</p></div>
        <div className=" flex gap-2">
        <input type="radio" name="my gender" id=""   className=' cursor-pointer'/>Display
        <input type="radio" name="my gender" id=""  className=' cursor-pointer'/>Hide
    
        </div>
      </div> 

      <button className="px-4 text-white py-2 mt-4  bg-[#5351C9] rounded-lg text-center">Add Product</button>


    </div>
    </div>
</div>
  )
}

export default page
