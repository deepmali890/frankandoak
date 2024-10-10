import Image from 'next/image'
import React from 'react'
import chart from '../images/download (2).jpg'

function page() {
  return (
    <div className="mt-16 ms-12">
      <Image src={chart}/>
    </div>
  )
}

export default page
