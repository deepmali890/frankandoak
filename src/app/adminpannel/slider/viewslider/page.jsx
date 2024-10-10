import React from 'react'

function page() {
  return (
    <div className="w-full    pb-8 h-[80vh]">
    <div className="w-full rounded-t-lg  border-[1px]">
    <h4 className="bg-[#F8F8F9]  py-3 text-[25px] rounded-t-lg font-bold px-4">View Stories</h4>
    <div className="px-4  bg-white pt-3 pb-6 rounded-b-lg  ">
    <table class="min-w-full leading-normal">
      <thead>
        <tr className="border-b-[1px]">
          <th
            class="px-5 py-3 flex  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
          >
         <button className="px-6 text-white py-2  bg-[#5351C9] rounded-lg text-center">Delete</button>
           &nbsp; <input type="checkbox" name="" id="" className=" cursor-pointer"/>
          </th>
          <th
            class="px-5 py-3   text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
               Sno
          </th>
          <th
            class="px-5 py-3   text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
                  		Slider Name
          </th>
          <th
            class="px-5 py-3   text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
               					Heading
          </th>
          <th
            class="px-5 py-3   text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
          >
               				Sub Heading
          </th>
          <th
            class="px-5 py-3   text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
>
Slider Image
          </th>
          <th
            class="px-5 py-3  "
          >
               	Action
          </th>
          <th
            class="px-5 py-3  "
          >
                Status
          </th>
         
        </tr>
      </thead>
      <tbody>

        <tr className=" border-b-[1px]">
          <td class="px-5 py-5     bg-white font-semibold text-md ">
            <input type="checkbox" className=" cursor-pointer"/>
          </td>

          <td class="px-5   bg-white  text-md ">
          <p>1</p>
          </td>

          <td class="px-5   bg-white  text-md ">
           <p>		Main Page</p>

          </td>
         
          <td class="px-5    bg-white text-md ">
        <p className="text-wrap">New Summer must have just dropped.</p>
          </td>
          
          <td class="px-5    bg-white text-md ">
         <p className="text-wrap">free shipping on orders over $79</p>
          </td>

          <td class="px-5    bg-white text-md ">
            <span
              class="relative inline-block px-3 py-1  text-green-900 leading-tight">
             
             <img src="https://admin-panel-self-sigma.vercel.app/Story_Banner.webp" alt="slider img" width="200" height="200" class="rounded-[5px]"/>
            </span>
          </td>
          
          <td class="px-5    bg-white font-semibold text-md ">
            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <div className="flex gap-2">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="my-[5px] text-red-500 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> | 

                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="my-[5px] text-yellow-500 cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Edit"><g><path d="M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"></path><path d="M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"></path></g></g></svg>
                </div>
             
            
            </span>
          </td>
          <td
            class="px-5    bg-white font-semibold text-md  text-center">
                   <p>Display</p>
           
          </td>
        </tr>
       
      </tbody>



      

      
    </table>
    </div>
    </div>

</div>
  )
}

export default page
