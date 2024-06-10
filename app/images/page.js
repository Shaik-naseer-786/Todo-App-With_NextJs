import React from 'react'
import bg_image from "../../assets/text.png"
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <h1>we have image here</h1>
      <Image src={bg_image} alt=''/>
    </div>
  )
}

export default page
